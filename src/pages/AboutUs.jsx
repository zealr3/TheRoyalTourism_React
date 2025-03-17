import "../styles/AboutUs.css"; // Import the CSS file
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
  

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <div className="about-header">
        <div className="about-header-overlay">
          <h1>About Us</h1>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-content">
          <div className="about-text-container">
            <h2 className="about-title">Welcome to The Royal Tourism</h2>
            <p className="about-text">
              At <strong>The Royal Tourism</strong>, we specialize in crafting unforgettable travel experiences. 
              Whether youre looking for a serene escape, a cultural adventure, or a luxurious getaway, we are committed 
              to making your journey seamless and full of cherished memories.
            </p>
          </div>
          <div className="about-image-container">
            <img 
              src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg" 
              alt="Travel Experience" 
              className="about-image"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-container">
          {[
            { name: "Harshil Vanparia", role: "UI/UX Designer", image: "https://i.pravatar.cc/150?img=46", linkedin: "#", twitter: "#", instagram: "#" },
            { name: "Zeal Raval", role: "Backend Developer", image: "https://i.pravatar.cc/150?img=14", linkedin: "#", twitter: "#", instagram: "#" },
            { name: "Dhaval Goswami", role: "Travel Consultant", image: "https://i.pravatar.cc/150?img=35", linkedin: "#", twitter: "#", instagram: "#" }
          ].map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} className="team-photo" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              {/* Social Media Icons */}
              <div className="team-social">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="social-icon linkedin" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="social-icon twitter" />
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="social-icon instagram" />
                </a>
              </div>
              </div>
          ))}
        </div>
      </div>
        {/* Why Choose Us */}
      <div className="why-choose">
        <h2 className="why-title">Why Choose The Royal Tourism?</h2>
        <div className="why-container">
          {[
            {
              title: "🌍 Ultimate Flexibility",
              desc: "Plan your trips your way with easy cancellation and custom travel plans.",
              image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
            },
            {
              title: "📸 Memorable Experiences",
              desc: "Discover breathtaking destinations and hidden gems with our expert guides.",
              image: "https://images.pexels.com/photos/19770758/pexels-photo-19770758/free-photo-of-hot-air-balloon-flying-over-cappadocia.jpeg",
            },
            {
              title: "🏆 Quality at Our Core",
              desc: "We offer premium services with top-rated hotels and transport.",
              image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
            },
            {
              title: "💰 Best Price Guarantee",
              desc: "Get the best travel deals with transparent pricing and no hidden costs.",
              image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
            },
            {
              title: "📞 24/7 Customer Support",
              desc: "Our support team is available anytime to assist you during your travels.",
              image: "https://images.pexels.com/photos/3943951/pexels-photo-3943951.jpeg",
            },
          ].map((item, index) => (
            <div key={index} className="why-item">
              <img src={item.image} alt={item.title} className="why-image" />
              <div className="why-content">
                <h3 className="why-title-small">{item.title}</h3>
                <p className="why-text">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
