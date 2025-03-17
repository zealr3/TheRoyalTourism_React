import 'react';
import '../styles/Footer.css'; // Import the Footer's CSS file
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/destinations/Domesticdestinations">Explore Domestic</a></li>
            <li><a href="/destinations/InternationalDestination">Explore International</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@royaltourism.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Mumbai, India</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} The Royal Tourism. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
