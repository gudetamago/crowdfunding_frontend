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

  // Method to determine display name for pledges
  const getDisplayName = (pledgeData) => {
    if (!pledgeData.anonymous && pledgeData.nickname !== null && pledgeData.nickname !== undefined) {
      return pledgeData.nickname;
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
  if (auth.token) {
    displayedTitle = campaign.title;
    displayedDescription = campaign.description;
  } else {
    displayedTitle = campaign.alt_title;
    displayedDescription = campaign.alt_description;
  }

  return (
    <>
      <div>
        <h2>{displayedTitle}</h2>
          <h3>Created at: {campaign.date_created}</h3>
          <h3>{`Status: ${campaign.is_open}`}</h3>
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