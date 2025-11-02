import { useState } from "react";
import postLogin from "../api/post-login.js";
import { useAuth } from "../hooks/use-auth.js";
import { useNavigate } from "react-router-dom";
import "./Forms.css";

function LoginForm() {
    const navigate = useNavigate();
    const {auth, setAuth} = useAuth();
    const [loginError, setLoginError] = useState(null);

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const {id, value} = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
        // Clear error when user starts typing
        if (loginError) {
            setLoginError(null);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            postLogin(
                credentials.username,
                credentials.password)
                .then((response) => {
                    window.localStorage.setItem("token", response.token);
                    window.localStorage.setItem("username", response.username);
                    window.localStorage.setItem("nickname", response.nickname);
                    setAuth({
                        token: response.token,
                    });
                    navigate("/");
                })
                .catch((error) => {
                    console.log(error);
                    setLoginError(error.message || "Login failed. Please try again.");
                });
        }
    }

    return (
        <div className="form-container">
            <h2 className="form-title">Log In</h2>
            {loginError && (
                <div className="error-message" style={{
                    color: 'red', 
                    padding: '10px', 
                    margin: '10px 0', 
                    border: '1px solid red', 
                    borderRadius: '4px',
                    backgroundColor: '#ffe6e6'
                }}>
                    {loginError}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input
                        type="text"
                        id="username"
                        className="form-input"
                        placeholder="Enter username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        placeholder="Enter password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="form-button">Log In</button>
            </form>
        </div>
    );
}

export default LoginForm;