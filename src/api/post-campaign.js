async function postCampaign(title, description, goal, image, is_open, date_created, alt_title, alt_description, alt_image, date_end) {
  const url = `${import.meta.env.VITE_API_URL}/campaigns/`;

  const token = localStorage.getItem("token");

  const response = await fetch(url, {
    method: "POST", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${token}`,
    },
    body: JSON.stringify({
      "title": title,
      "description": description,
      "goal": goal,
      "image": image,
      "is_open": is_open,
      "date_created": date_created,
      "alt_title": alt_title,
      "alt_description": alt_description,
      "alt_image": alt_image,
      "date_end": date_end,
    }),
  });

  if (!response.ok) {
    const fallbackError = `Error creating new campaign named ${title}`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default postCampaign;