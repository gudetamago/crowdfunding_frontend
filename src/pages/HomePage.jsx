import { allCampaigns } from "../data";
import CampaignCard from "../components/CampaignCard";

function HomePage() {

  return (
      <div>
          {allCampaigns.map((campaignData, key) => {
              return <CampaignCard key={key} campaignData={campaignData} />;
          })}
      </div>
  );
}

export default HomePage;