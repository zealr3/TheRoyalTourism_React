import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="logo">
        The Royal Tourism
      </div>
      <ul className="nav-links">
        <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
        <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>AboutUs</Link></li>
        <li><Link to="/destinations" className={location.pathname === "/destinations" ? "active" : ""}>Destinations</Link></li>
        <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link></li>
        <li><Link to="/festival" className={location.pathname === "/festival" ? "active" : ""}>Any Festival</Link></li>
        <li><Link to="/signin" className={location.pathname === "/signin" ? "active" : ""}>Sign In</Link></li>
        <li><Link to="/signup" className={location.pathname === "/signup" ? "active" : ""}>Sign Up</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
