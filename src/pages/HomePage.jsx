import useCampaigns from "../hooks/use-campaigns";
import CampaignCard from "../components/CampaignCard";

function HomePage() {
    const { campaigns } = useCampaigns();

  return (
      <div>
          {campaigns.map((campaignData, key) => {
              return <CampaignCard key={key} campaignData={campaignData} />;
          })}
      </div>
  );
}

export default HomePage;