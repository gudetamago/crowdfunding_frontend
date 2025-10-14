import { useState, useEffect } from "react";

import getCampaign from "../api/get-campaign";

export default function useCampaign(campaignId) {
  const [campaign, setCampaign] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    // Here we pass the campaignId to the getCampaign function.
    getCampaign(campaignId)
      .then((campaign) => {
        setCampaign(campaign);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });

    // This time we pass the campaignId to the dependency array so that the hook will re-run if the campaignId changes.
  }, [campaignId]);

  return { campaign, isLoading, error };
}