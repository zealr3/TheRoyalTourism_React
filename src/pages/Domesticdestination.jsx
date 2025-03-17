
import "../styles/DomesticDestination.css"; // Make sure this path is correct

/**
 * Array of domestic destinations in India
 */
const destinations = [
  {
    name: "Jaipur, Rajasthan",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg",
    description: "Experience the Pink City's royal heritage and vibrant culture"
  },
  {
    name: "Goa",
    image: "https://images.pexels.com/photos/4428285/pexels-photo-4428285.jpeg",
    description: "Relax on pristine beaches and enjoy the coastal paradise"
  },
  {
    name: "Manali, Himachal Pradesh",
    image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg",
    description: "Adventure in the snow-capped mountains and lush valleys"
  },
  {
    name: "Kerala",
    image: "https://images.pexels.com/photos/1462189/pexels-photo-1462189.jpeg",
    description: "Explore the serene backwaters and rich cultural traditions"
  },
  {
    name: "Agra, Uttar Pradesh",
    image: "https://images.pexels.com/photos/11335615/pexels-photo-11335615.jpeg",
    description: "Witness the iconic Taj Mahal and Mughal architecture"
  },
  {
    name: "Mumbai, Maharashtra",
    image: "https://images.pexels.com/photos/3995834/pexels-photo-3995834.jpeg",
    description: "Experience the vibrant city life and coastal attractions"
  },
  {
    name: "Kolkata, West Bengal",
    image: "https://images.pexels.com/photos/6207811/pexels-photo-6207811.jpeg",
    description: "Discover cultural heritage and delicious Bengali cuisine"
  },
  {
    name: "Shimla, Himachal Pradesh",
    image: "https://images.pexels.com/photos/594182/pexels-photo-594182.jpeg",
    description: "Enjoy the colonial charm and panoramic mountain views"
  },
  {
    name: "Udaipur, Rajasthan",
    image: "https://images.pexels.com/photos/5315894/pexels-photo-5315894.jpeg",
    description: "Explore the romantic lake city and magnificent palaces"
  },
];

/**
 * DomesticDestination Component
 * Displays a hero section and grid of domestic Indian destinations
 */
const DomesticDestination = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Discover Incredible India</h1>
          <p>From majestic mountains to pristine beaches, explore the diverse beauty of India</p>
          <button className="explore-btn">Start Your Journey</button>
        </div>
      </div>

      {/* Destinations Grid Section */}
      <div className="destination-wrapper">
        <div className="section-header">
          <h2 className="destination-title">Popular Domestic Destinations</h2>
          <p className="section-description">Handpicked destinations to make your vacation memorable</p>
        </div>
        
        <div className="destination-container">
          {destinations.map((destination, index) => (
            <div key={index} className="destination-card">
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="destination-image" 
              />
              {/* We keep the overlay div in the structure but it's hidden with CSS */}
              <div className="overlay"></div>
              <div className="destination-details">
                <h2 className="destination-name">{destination.name}</h2>
                <p className="destination-description">{destination.description}</p>
                <button className="view-details-btn">Explore</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DomesticDestination;