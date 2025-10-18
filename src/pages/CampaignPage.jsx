import { useParams } from "react-router-dom";
import useCampaign from "../hooks/use-campaign";
import PledgeForm from "../components/PledgeForm";

function CampaignPage() {

  // Here we use a hook that comes for free in react router called `useParams` to get the id from the URL so that we can pass it to our useCampaign hook.
  const { id } = useParams();
  // useCampaign returns three pieces of info, so we need to grab them all here
  const { campaign, isLoading, error } = useCampaign(id);    

  if (isLoading) {
      return (<p>loading...</p>)
  }
  if (error) {
      return (<p>{error.message}</p>)
  }

  return (
    <>
      <div>
        <h2>{campaign.title}</h2>
          <h3>Created at: {campaign.date_created}</h3>
          <h3>{`Status: ${campaign.is_open}`}</h3>
          <h3>Pledges:</h3>
          <ul>
              {campaign.pledges.map((pledgeData, key) => {
                  return (
                      <li key={key}>
                          {pledgeData.amount} from {pledgeData.supporter}
                      </li>
                  );
              })}
          </ul>
      </div>
      <PledgeForm campaignId={id} />
    </>
  );  
}

export default CampaignPage;