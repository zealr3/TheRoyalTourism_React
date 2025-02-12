import 'react';
import '../styles/Footer.css'; // Import the Footer's CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} The Royal Tourism. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;