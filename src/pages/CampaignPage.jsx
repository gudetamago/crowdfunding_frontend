import { useParams } from "react-router-dom";
import useCampaign from "../hooks/use-campaign";
import PledgeForm from "../components/PledgeForm";
import { useAuth } from "../hooks/use-auth.js";

function CampaignPage() {

  const {auth, setAuth} = useAuth();
  // Here we use a hook that comes for free in react router called `useParams` to get the id from the URL so that we can pass it to our useCampaign hook.
  const { id } = useParams();
  // useCampaign returns three pieces of info, so we need to grab them all here
  const { campaign, isLoading, error } = useCampaign(id);    

  // Function to format date from ISO string to "DD Month YYYY"
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const options = { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    return date.toLocaleDateString('en-GB', options);
  };

  // Method to determine display name for pledges
  const getDisplayName = (pledgeData) => {
    if (!pledgeData.anonymous && pledgeData.nickname !== null && pledgeData.nickname !== undefined) {
      if (auth.token) {
        return pledgeData.nickname;
      } else {
        return pledgeData.alt_nickname;
      }
    }
    return 'anonymous';
  };

  const getDisplayComment = (pledgeData) => {
    if (pledgeData.comment !== null && pledgeData.comment !== undefined && pledgeData.comment.trim() !== "") {
      return ` : ${pledgeData.comment}`;
    }
    return "";
  };

  if (isLoading) {
      return (<p>loading...</p>)
  }
  if (error) {
      return (<p>{error.message}</p>)
  }

  let displayedTitle;
  let displayedDescription;
  let displayedOwner;
  if (auth.token) {
    displayedTitle = campaign.title;
    displayedDescription = campaign.description;
    displayedOwner = campaign.owner_nickname;
  } else {
    displayedTitle = campaign.alt_title;
    displayedDescription = campaign.alt_description;
    displayedOwner = campaign.owner_alt_nickname;
  }

  let displayedCampaignStatus;
  if (campaign.is_open) {
    displayedCampaignStatus = "Active";
  } else {
    displayedCampaignStatus = "Inactive";
  }

  let noPledgeMessage;
  noPledgeMessage = "Be the first one to show your support!";

  return (
    <>
      <div>
        <h2>{displayedTitle}</h2>
          <h3>Created at: {formatDate(campaign.date_created)}{displayedOwner ? ` by ${displayedOwner}` : ''}</h3>
          <h3>{`Status: ${displayedCampaignStatus}`}</h3>
          <h3>{`${campaign.amount_pledged} pledged out of ${campaign.goal}`}</h3>
          <p>{displayedDescription}</p>
          <h3>Pledges:</h3>
          <ul>
              {campaign.pledges.map((pledgeData, key) => {
                  return (
                      <li key={key}>
                          {pledgeData.amount} from {getDisplayName(pledgeData)}{getDisplayComment(pledgeData)}
                      </li>
                  );
              })}
          </ul>
      </div>
      {auth.token && campaign.is_open && <PledgeForm campaignId={id} />}
    </>
  );  
}

export default CampaignPage;