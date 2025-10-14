import useCampaigns from "../hooks/use-campaigns";
import CampaignCard from "../components/CampaignCard";
import "./HomePage.css";

function HomePage() {
    const { campaigns } = useCampaigns();

  return (
      <div id="campaign-list">
          {campaigns.map((campaignData, key) => {
              return <CampaignCard key={key} campaignData={campaignData} />;
          })}
      </div>
  );
}

export default HomePage;