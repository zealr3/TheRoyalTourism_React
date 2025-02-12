import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        The Royal Tourism
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        {/* Add other links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
