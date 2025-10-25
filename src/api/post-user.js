async function postUser(username, password, email, first_name, last_name, nickname, alt_nickname) {
  const url = `${import.meta.env.VITE_API_URL}/users/`;
  const response = await fetch(url, {
    method: "POST", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "username": username,
      "password": password,
      "email": email,
      "first_name": first_name,
      "last_name": last_name,
      "nickname": nickname,
      "alt_nickname": alt_nickname,
    }),
  });

  if (!response.ok) {
    const fallbackError = `Error signing up`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default postUser;