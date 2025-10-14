import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/campaign">Campaign</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;