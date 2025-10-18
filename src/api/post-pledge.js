async function postPledge(amount, comment, anonymous, campaign) {
  const url = `${import.meta.env.VITE_API_URL}/pledges/`;

  const token = localStorage.getItem("token");

  const response = await fetch(url, {
    method: "POST", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${token}`,
    },
    body: JSON.stringify({
      "amount": amount,
      "comment": comment,
      "anonymous": anonymous,
      "campaign": campaign,
    }),
  });

  if (!response.ok) {
    const fallbackError = `Error adding pledge to campaign with id ${campaign}`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default postPledge;