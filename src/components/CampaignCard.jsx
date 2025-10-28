import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";
import "./CampaignCard.css";

function CampaignCard(props) {
  const { campaignData } = props;
  const campaignLink = `campaign/${campaignData.id}`;
  const {auth, setAuth} = useAuth();

  let campaignTitle;
  let campaignPicture;
  if (auth.token) {
    campaignTitle = campaignData.title;
    campaignPicture = campaignData.image;
  } else {
    campaignTitle = campaignData.alt_title;
    campaignPicture = campaignData.alt_image;
  }

  return (
    <div className="campaign-card">
      <Link to={campaignLink}>
        <img src={campaignPicture} />
        <h3>{campaignTitle}</h3>
        
      </Link>
    </div>
  );
}

export default CampaignCard;