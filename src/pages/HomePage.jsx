import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Journey to Paradise</h1>
          <p>Uncover the worlds most beautiful destinations.</p>
          <button className="explore-btn">Explore</button>
        </div>
      </section>

      {/* Plan Your Trip Section */}
      <section className="plan-trip">
        <h2>Plan Your Trip With Us</h2>
        <p>Explore the world with our well-planned trips.</p>
        <div className="trip-highlights">
          <div className="highlight">
            <h3>Exclusive Trip</h3>
            <p>Tailored adventures with curated itineraries.</p>
          </div>
          <div className="highlight">
            <h3>Professional Guide</h3>
            <p>Travel worry-free with expert guides.</p>
          </div>
        </div>
      </section>

      {/* Recommended Places */}
      <section className="recommended">
        <h2>Explore India with Royal Tourism</h2>
        <div className="places">
          <div className="place">Goa</div>
          <div className="place">Kashmir</div>
          <div className="place">Rajasthan</div>
        </div>
      </section>

      {/* Cruise Section */}
      <section className="cruising">
        <h2>Its All About Cruising</h2>
        <div className="cruise-logos">
          <img src="msc-logo.png" alt="MSC Cruises" />
          <img src="cordelia-logo.png" alt="Cordelia Cruises" />
          <img src="costa-logo.png" alt="Costa" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
