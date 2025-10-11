import { oneCampaign } from "../data";

function CampaignPage() {

  return (
      <div>
          <h2>{oneCampaign.title}</h2>
          <h3>Created at: {oneCampaign.date_created}</h3>
          <h3>{`Status: ${oneCampaign.is_open}`}</h3>
          <h3>Pledges:</h3>
          <ul>
              {oneCampaign.pledges.map((pledgeData, key) => {
                  return (
                      <li key={key}>
                          {pledgeData.amount} from {pledgeData.supporter}
                      </li>
                  );
              })}
          </ul>
      </div>
  );  
}

export default CampaignPage;