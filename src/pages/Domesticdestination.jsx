import { useEffect, useState } from "react";
import "../styles/DomesticDestination.css";
import axios from "axios";

const DomesticDestination = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/destinations/domestic");
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

  const handleOpen = (destination) => {
    alert(`Opening details for ${destination.name}`);
  };

  if (loading) return <div className="domestic-loading">Loading...</div>;
  if (error) return <div className="domestic-error">{error}</div>;

  return (
    <>
      {/* Hero Section */}
      <div className="domestic-hero-section">
        <div className="domestic-hero-overlay"></div>
        <div className="domestic-hero-content">
          <h1>Discover Incredible India</h1>
          <p>Explore the diverse beauty of India’s domestic treasures</p>
        </div>
      </div>

      {/* Destination Cards */}
      <div className="domestic-destination-wrapper">
        <h2>Popular Domestic Destinations</h2>
        <div className="domestic-destination-container">
          {destinations.map(destination => (
            <div key={destination.did} className="domestic-destination-card">
              <img
                src={destination.image}
                alt={destination.name}
                className="domestic-destination-image"
                crossOrigin="anonymous"
              />
              <div className="domestic-destination-details">
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <button
                  className="domestic-open-btn"
                  onClick={() => handleOpen(destination)}
                >
                  Open
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DomesticDestination;
