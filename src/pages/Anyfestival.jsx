import { useState, useEffect } from "react";
import "../styles/AnyFestival.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios"; // Assuming you're using axios for API calls

const AnyFestivalPage = () => {
  const { festivalName } = useParams();
  const [festival, setFestival] = useState(null);
  const [destinations, setDestinations] = useState([]);
  const [error, setError] = useState("");

  // Fetch festival and destination data from the backend
  useEffect(() => {
    const fetchFestivalData = async () => {
      try {
        // Fetch festival details
        const festivalResponse = await axios.get(`http://localhost:5000/api/festivals/${festivalName}`);
        setFestival(festivalResponse.data);

        // Fetch destinations for the festival
        const destinationsResponse = await axios.get(`http://localhost:5000/api/festivals/${festivalName}/destinations`);
        setDestinations(destinationsResponse.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load festival data. Please try again later.");
        setFestival({ name: "Festival Not Found", subtitle: "" });
        setDestinations([]);
      }
    };

    fetchFestivalData();
  }, [festivalName]);

  if (!festival) {
    return <div>Loading...</div>;
  }

  return (
    <div className="festival-page">
      {/* Hero Section */}
      <section className="festival-hero">
        <div className="hero-header">
          <div className="hero-header-overlay">
            <div className="hero-content">
              <h1 className="hero-title">
                Celebrate <span>{festival.name}</span>
              </h1>
              <p className="hero-subtitle">{festival.subtitle}</p>
              <Link to={`/book-${festivalName}-tour`}>
                <button className="explore-btn">Book a Tour</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="festival-destinations">
        <div className="section-container">
          <h2 className="section-title">Top Destinations for {festival.name}</h2>
          {error && <p className="error-message">{error}</p>}
          {destinations.length > 0 ? (
            <div className="destination-cards">
              {destinations.map((destination) => (
                <div className="destination-card" key={destination.id}>
                  {/* Assuming destination.image is a filename */}
                  <img
                    src={`http://localhost:5000/uploads/${destination.image}`}
                    alt={destination.name}
                    className="destination-image"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/300x200?text=No+Image")}
                  />
                  <div className="card-content">
                    <h3>{destination.name}</h3>
                    <p>{destination.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No destinations found for {festival.name}.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default AnyFestivalPage;