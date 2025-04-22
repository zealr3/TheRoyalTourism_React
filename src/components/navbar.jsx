import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Style.css";
import "../styles/Navbar.css";

const Navbar = ({ user, setUser }) => {
  console.log("Navbar rendering with user:", user);
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("user");
    setUser(null);
    console.log("User state after logout:", null);
  };

  return (
    <> <div className="navbar-expand-lg text-center navtitle" >
      call us to get best deals - 1234569870, 3214569870
    </div>
      <nav className="navbar">
        <div className="logo d-flex gap-2">
          <div>
            <img src="/assets/logo.svg" alt="" />
          </div>
          <h4 className="mt-2">The Royal Tourism</h4>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</Link></li>

          <li
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="dropdown-title">Destinations <i className="bi bi-chevron-down"></i> </span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/destinations/Domesticdestinations">Domestic</Link></li>
                <li><Link to="/destinations/InternationalDestination">International</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link></li>
          {/* <li><Link to="/Anyfestival" className={location.pathname === "/Anyfestival" ? "active" : ""}>Any Festival</Link></li> */}

          {user ? (
            <>
              <li
                className="dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span className="dropdown-title">{user.name} <i className="bi bi-chevron-down"></i> </span>
                {dropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><Link to="/destinations/Domesticdestinations">Profile</Link></li>
                    <li><Link  onClick={handleLogout} className="logout-button">Logout</Link></li>
                  </ul>
                )}
              </li>
            </>
          ) : (
            <>
              <li><Link to="/signin" className={location.pathname === "/signin" ? "active" : ""}>Sign In</Link></li>
              {/* <li><Link to="/signup" className={location.pathname === "/signup" ? "active" : ""}>Sign Up</Link></li> */}
            </>
          )}
        </ul>
      </nav></>
  );
};

// PropTypes validation
Navbar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  setUser: PropTypes.func.isRequired,
};

export default Navbar;