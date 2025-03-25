import { useEffect, useState } from "react";
import "../styles/InternationalDestination.css";
import axios from "axios";

const InternationalDestination = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/destinations/international"
        );
        setDestinations(response.data);
      } catch (err) {
        console.error("Error fetching international destinations:", err);
        setError("❌ Failed to load destinations. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Explore the World 🌍</h1>
          <p>Discover stunning international destinations with us!</p>
        </div>
      </div>

      {/* Destination List */}
      <div className="destination-wrapper">
        {destinations.length === 0 ? (
          <div className="no-data">No destinations available.</div>
        ) : (
          <div className="destination-container">
            {destinations.map((destination) => (
              <div key={destination.did} className="destination-card">
                <div className="image-wrapper">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="destination-image"
                  />
                </div>
                <div className="destination-details">
                  <h2>{destination.name}</h2>
                  <p>{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InternationalDestination;
