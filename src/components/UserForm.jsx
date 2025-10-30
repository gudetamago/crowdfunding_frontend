import { useState } from "react";
import postUser from "../api/post-user.js";
import { useNavigate } from "react-router-dom";
import "./Forms.css";

function UserForm() {
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
        <div className="form-container">
            <h2 className="form-title">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="form-input"
                        value={username}
                        placeholder="Choose a username"
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        placeholder="Enter a secure password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input
                        type="text"
                        id="first_name"
                        className="form-input"
                        value={first_name}
                        placeholder="Enter your first name"
                        onChange={(event) => setFirstName(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input
                        type="text"
                        id="last_name"
                        className="form-input"
                        value={last_name}
                        placeholder="Enter your last name"
                        onChange={(event) => setLastName(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nickname" className="form-label">Professional Title</label>
                    <input
                        type="text"
                        id="nickname"
                        className="form-input"
                        value={nickname}
                        placeholder="e.g. Software Developer, Designer"
                        onChange={(event) => setNickname(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="alt_nickname" className="form-label">Public-friendly Alias</label>
                    <input
                        type="text"
                        id="alt_nickname"
                        className="form-input"
                        value={alt_nickname}
                        placeholder="How you'd like to appear to the public"
                        onChange={(event) => setAltNickname(event.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="form-button">Sign Up</button>
            </form>
        </div>
    );
}

export default UserForm;