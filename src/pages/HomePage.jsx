import { allCampaigns } from "../data";
import CampaignCard from "../components/CampaignCard";
import "./HomePage.css";

function HomePage() {

  return (
      <div id="campaign-list">
          {allCampaigns.map((campaignData, key) => {
              return <CampaignCard key={key} campaignData={campaignData} />;
          })}
      </div>
  );
}

export default HomePage;