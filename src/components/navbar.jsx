import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "../styles/Navbar.css"; 

const Navbar = ({ user, setUser  }) => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logging out..."); // Debugging line
    localStorage.removeItem("user"); // Remove user from local storage
    setUser (null); // Clear user state
    console.log("User  state after logout:", null); // Debugging line
  };

  return (
    <nav className="navbar">
      <div className="logo">The Royal Tourism</div>
      <ul className="nav-links">
        <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
        <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</Link></li>
        
        <li 
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="dropdown-title">Destinations</span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/destinations/Domesticdestinations">Domestic</Link></li>
              <li><Link to="/destinations/InternationalDestination">International</Link></li>
            </ul>
          )}  
        </li>

        <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link></li>
        <li><Link to="/festival" className={location.pathname === "/festival" ? "active" : ""}>Any Festival</Link></li>

        {user ? (
          <>
            <li>Welcome, {user.name}!</li>
            <li>
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/signin" className={location.pathname === "/signin" ? "active" : ""}>Sign In</Link></li>
            <li><Link to="/signup" className={location.pathname === "/signup" ? "active" : ""}>Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
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