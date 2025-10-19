import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./NavBar.css";

function NavBar() {

  const navigate = useNavigate();

  // Check if user is logged in
  const hasToken = window.localStorage.getItem('token');

  // Logout function
  const handleLogout = () => {
      // Remove token from localStorage
      window.localStorage.removeItem('token');

      // Optional: Redirect to home page after logout
      navigate('/');

      // Optional: Reload the page to reset any cached state
      window.location.reload();
  };

  return (
    <div>
      <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>

            {/* Show Login link only if user is not logged in */}
            {!hasToken && (<li><Link to="/login">Log In</Link></li>)}

            {/* Show Logout link only if user is logged in */}
            {hasToken && (
                <li><button onClick={handleLogout} className="logout-btn">
                    Log Out
                </button></li>
            )}


        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;