import { useState } from "react";
import postUser from "../api/post-user.js";
import { useNavigate } from "react-router-dom";


function UserForm() {

    // console.log(props.campaignId);

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [nickname, setNickname] = useState("");
    const [alt_nickname, setAltNickname] = useState("");

    const userData = {
      username: username,
      password: password,
      email: email,
      first_name: first_name,
      last_name: last_name,
      nickname: nickname,
      alt_nickname: alt_nickname,

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.username && userData.password && userData.email
            && userData.first_name && userData.last_name && userData.nickname && userData.alt_nickname
        ) {

            postUser(userData.username,
                userData.password,
                userData.email,
                userData.first_name,
                userData.last_name,
                userData.nickname,
                userData.alt_nickname)

                .then((response) => {
                    console.log(response);
                    navigate(`/login`);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input
            type="text"
            id="username"
            value={username}
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
            type="email"
            id="anonymous"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="first_name">First Name</label>
        <input
            type="text"
            id="first_name"
            value={first_name}
            placeholder="First Name"
            onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="last_name">Last Name</label>
        <input
            type="text"
            id="last_name"
            value={last_name}
            placeholder="Last Name"
            onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="nickname">Professional Title</label>
        <input
            type="text"
            id="nickname"
            value={nickname}
            placeholder="Professional Title"
            onChange={(event) => setNickname(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="alt_nickname">Public-friendly Alias</label>
        <input
            type="text"
            id="alt_nickname"
            value={alt_nickname}
            placeholder="Public-friendly Alias"
            onChange={(event) => setAltNickname(event.target.value)}
        />
      </div>




      <button type="submit" onClick={handleSubmit}>Sign Up</button>
    </form>
  );
}

export default UserForm;