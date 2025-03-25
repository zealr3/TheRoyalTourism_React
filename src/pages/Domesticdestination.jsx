import { useEffect, useState } from "react";
import "../styles/DomesticDestination.css";
import axios from "axios";

const DomesticDestination = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/destinations/domestic');
        setDestinations(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching domestic destinations:", err);
        setError("Failed to load destinations. Please try again.");
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      {/* Hero Section */}
      <div className="hero-Section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Discover Incredible India</h1>
          <p>Explore the diverse beauty of India with us!</p>
          <button className="explore-btn">Start Your Journey</button>
        </div>
      </div>

      {/* Destination Cards */}
      <div className="destination-wrapper">
        <h2>Popular Domestic Destinations</h2>
        <div className="destination-container">
          {destinations.map(destination => (
            <div key={destination.did} className="destination-card">
              <img
                src={destination.image}
                alt={destination.name}
                className="destination-image"
                crossOrigin="anonymous"
              />
              <div className="destination-details">
                <h2>{destination.name}</h2>
                <p>{destination.description}</p>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DomesticDestination;
