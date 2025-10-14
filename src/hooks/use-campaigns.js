import { useState, useEffect } from "react";

import getCampaigns from "../api/get-campaigns";

export default function useCampaigns() {
  // Here we use the useState hook to create a state variable called campaigns and a function to update it called setCampaigns. We initialize the state variable with an empty array.
  const [campaigns, setCampaigns] = useState([]);
  // Means, render even if you have an empty array.
  // We do this because we expect campaigns to be an array of campaign objects.

  // We also create a state variable called isLoading and error to keep track of the loading state and any errors that might occur.
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  // We use the useEffect hook to fetch the campaigns from the API and update the state variables accordingly.
  // This useEffect will only run once, when the component this hook is used in is mounted.
  useEffect(() => {
    getCampaigns()
      .then((campaigns) => {
        setCampaigns(campaigns);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);
  // Empty array means, re-render anytime anything in this array changes. If it's empty, it only runs once when the component mounts.

  // Finally, we return the state variables and the error. As the state in this hook changes it will update these values and the component using this hook will re-render.
  return { campaigns, isLoading, error };
}