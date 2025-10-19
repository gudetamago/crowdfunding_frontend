import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/use-auth.js";
// import { useNavigate } from "react-router-dom";

import "./NavBar.css";

function NavBar() {

  // const navigate = useNavigate();
  const {auth, setAuth} = useAuth();

  // Check if user is logged in - this is a simpler way than the above
  // const hasToken = window.localStorage.getItem('token');

  // Logout function
  const handleLogout = () => {
      // Remove token from localStorage
      window.localStorage.removeItem('token');
      setAuth({ token: null });

      // Optional: Redirect to home page after logout
      // navigate('/');

      // Optional: Reload the page to reset any cached state
      // window.location.reload();
  };

  return (
    <div>
      <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>

            {auth.token ? (
                <li>
                    <Link to="/" onClick={handleLogout}>
                        Log Out
                    </Link>
                </li>
                ) : (
                <li>
                    <Link to="/login">Log In</Link>
                </li>
            )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;