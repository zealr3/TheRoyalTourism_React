import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="text-container">
            <h1>New Journey Awaits</h1>
            <p>Time is done, explore the world and create memories.</p>
            <button className="explore-btn">Explore</button>
          </div>
        </div>
      </section>

      {/* Plan With Us Section */}
      <section className="plan-with-us">
        <div className="plan-container">
          <div className="plan-text">
            <h2>Plan Your Dream Vacation</h2>
            <p>
              Let us take care of the details while you enjoy an unforgettable travel experience.
              Personalized itineraries, expert guides, and stress-free booking.
            </p>
            <button className="plan-btn">Start Planning</button>
          </div>
          <div className="plan-image">
            <img
              src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Travel Planning"
            />
          </div>
        </div>
      </section>

      {/* Explore Domestic Destinations */}
      <section className="explore-section explore-reverse">
        <div className="explore-container">
          <div className="explore-text">
            <h2>Explore Domestic Destinations</h2>
            <p>
              Discover the hidden gems of India, from the serene beaches of Goa to the royal forts of Rajasthan.
              Experience the cultural richness and breathtaking landscapes of your homeland.
            </p>
            <button className="explore-btn">View Destinations</button>
          </div>
          <div className="explore-image">
            <img
              src="https://images.pexels.com/photos/4428279/pexels-photo-4428279.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Domestic Travel"
            />
          </div>
        </div>
      </section>

      {/* Explore International Destinations */}
      <section className="explore-section">
        <div className="explore-container">
          <div className="explore-image">
            <img
              src="https://images.pexels.com/photos/10656992/pexels-photo-10656992.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="International Travel"
            />
          </div>
          <div className="explore-text">
            <h2>Explore International Destinations</h2>
            <p>
              Travel beyond borders and experience the worlds most iconic locations.
              From the romantic streets of Paris to the bustling city of Dubai, a world of adventure awaits!
            </p>
            <button className="explore-btn">View Destinations</button>
          </div>
        </div>
      </section>

      {/* Domestic Destinations */}
      <section className="destination-section">
        <div className="destination-text">
          <h2>Explore Domestic Destinations</h2>
          <p>Discover the beauty of India with our curated trips.</p>
        </div>
        <div className="destination-scroll">
          <div className="destination-card">
            <img src="https://images.pexels.com/photos/4428279/pexels-photo-4428279.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Goa" />
            <h4>Goa</h4>
          </div>
          <div className="destination-card">
            <img src="https://images.pexels.com/photos/3974036/pexels-photo-3974036.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Kashmir" />
            <h4>Kashmir</h4>
          </div>
          <div className="destination-card">
            <img src="https://images.pexels.com/photos/29231351/pexels-photo-29231351/free-photo-of-serene-view-of-amer-fort-gardens-in-jaipur.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Rajasthan" />
            <h4>Rajasthan</h4>
          </div>
        </div>
      </section>

      {/* International Destinations */}
      <section className="destination-section">
        <div className="destination-text">
          <h2>Explore International Destinations</h2>
          <p>Travel the world with our exclusive international tours.</p>
        </div>
        <div className="destination-scroll">
          <div className="destination-card">
            <img src="https://images.pexels.com/photos/10656992/pexels-photo-10656992.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Paris" />
            <h4>Paris</h4>
          </div>
          <div className="destination-card">
            <img src="https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&w=600" alt="London" />
            <h4>London</h4>
          </div>
          <div className="destination-card">
            <img src="https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Dubai" />
            <h4>Dubai</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
