import useCampaigns from "../hooks/use-campaigns";
import CampaignCard from "../components/CampaignCard";
import ContactMe from "../components/ContactMe";
import "./HomePage.css";

function HomePage() {
    const { campaigns, isLoading, error  } = useCampaigns();

    if (isLoading) {
      return (<p>loading...</p>)
    }
    if (error) {
      return (<p>{error.message}</p>)
    }

    return (
        <>
            <div id="campaign-list">
                {campaigns.map((campaignData, key) => {
                    return <CampaignCard key={key} campaignData={campaignData} />;
                })}
            </div>
            <ContactMe />
        </>
    );
}

export default HomePage;