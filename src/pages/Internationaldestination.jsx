
import "../styles/InternationalDestination.css"; // Ensure this CSS file exists

const destinations = [
  { 
    name: "Paris, France", 
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg"
  },
  { 
    name: "New York, USA", 
    image: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg"
  },
  { 
    name: "Tokyo, Japan", 
    image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg"
  },
  { 
    name: "London, UK", 
    image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"
  },
  { 
    name: "Sydney, Australia", 
    image: "https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg"
  },
  { 
    name: "Dubai, UAE", 
    image: "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg"
  },
  { 
    name: "Singapore", 
    image: "https://images.pexels.com/photos/1154189/pexels-photo-1154189.jpeg"
  },
  { 
    name: "Rome, Italy", 
    image: "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg"
  },
  { 
    name: "Barcelona, Spain", 
    image: "https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg"
  },
];

const InternationalDestination = () => {
  return (
    <div className="destination-wrapper">
      <h1 className="destination-title">International Destinations</h1>
      <div className="destination-container">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.image} alt={destination.name} className="destination-image" />
            <div className="overlay"></div>
            <div className="destination-details">
              <h2 className="destination-name">{destination.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternationalDestination;
