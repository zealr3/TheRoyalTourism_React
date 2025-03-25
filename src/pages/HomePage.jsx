import "../styles/HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home">
      {/* Hero Section - Full Screen */}
      <section className="hero">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
        <div className="hero-header">
        <div className="hero-header-overlay">
        
        <div className="hero-content">
          <div className="text-container">
            <h1 className="hero-title">Welcome to <br /><span>The Royal Tourism!</span></h1>
            <p className="hero-subtitle">Uncover the worlds most beautiful destinations and create joyful memories with your loved ones.</p>
            {/* <button className="explore-btn">EXPLORE</button> */}
            </div>
            </div>
            </div>
            </div>
      </section>

      {/* Plan With Us Section */}
      <section className="plan-with-us">
        <div className="section-container">
          <div className="image-grid">
            <div className="grid-image grid-image-1"></div>
            <div className="grid-image grid-image-2"></div>
            <div className="grid-image grid-image-3"></div>
          </div>
          <div className="plan-content">
            <h3 className="section-subtitle">Lets Go Together</h3>
            <h2 className="section-title">Plan Your Trip With us</h2>
            <p className="section-description">
              Explore the world your way! With personalized plans, expert advice, and
              attention to every detail, we make your trip memorable and stress-free.
              Lets begin your journey now!
            </p>
            
            <div className="features">
              <div className="feature">
                <div className="feature-icon exclusive-icon"></div>
                <div className="feature-content">
                  <h4>Exclusive Trip</h4>
                  <p>Tailored adventures with unique destinations, curated itineraries, and premium experiences your dream journey deserves.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon guide-icon"></div>
                <div className="feature-content">
                  <h4>Professional Guide</h4>
                  <p>Travel worry-free with expert guides offering insider tips and local knowledge for a seamless adventure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Quality Statement */}
<section className="quality-statement">
  <div className="quality-container">
    <h2>Give them quality. Thats the best kind of advertising</h2>
    <p className="quality-quote-author">- Milton S. Hershey</p>
    <div className="quality-description">
      <p>At Royal Tourism, we believe that exceptional quality speaks for itself. Our commitment to excellence ensures that every journey becomes a cherished memory.</p>
      <p>From personalized itineraries to handpicked accommodations, we focus on the details that transform ordinary travel into extraordinary experiences.</p>
    </div>
    <div className="quality-highlights">
      <div className="quality-stat">
        <span className="stat-number">98%</span>
        <span className="stat-label">Customer Satisfaction</span>
      </div>
      <div className="quality-stat">
        <span className="stat-number">15+</span>
        <span className="stat-label">Years of Excellence</span>
      </div>
      <div className="quality-stat">
        <span className="stat-number">50+</span>
        <span className="stat-label">Destinations</span>
      </div>
    </div>
  </div>
</section>
      
      {/* Destinations Showcase */}
<section className="destinations-showcase">
  <div className="section-container">
    <div className="destination-card international">
      <img 
        src="https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg" 
        alt="International destinations" 
        className="destination-bg-image"
      />
      <div className="card-content">
        <div className="card-tag">International</div>
        <h3>Explore the World!</h3>
        <p>Starting at ₹10,999/-<br />Unmissable International Deals.</p>
        <ul className="destination-features">
          <li>3+ Countries</li>
          <li>4-Star Hotels</li>
          <li>Guided Tours</li>
        </ul>
        <button className="explore-now-btn">Explore Now</button>
      </div>
    </div>
    
    <div className="destination-card domestic">
      <img 
        src="https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg" 
        alt="Domestic destinations" 
        className="destination-bg-image"
      />
      <div className="card-content">
        <div className="card-tag">Domestic</div>
        <h3>Discover India!</h3>
        <p>Starting at ₹4,999/-<br />Best Domestic Getaways.</p>
        <ul className="destination-features">
          <li>5+ States</li>
          <li>Local Experiences</li>
          <li>Cultural Tours</li>
        </ul>
        <button className="explore-now-btn">Explore Now</button>
      </div>
    </div>
  </div>
</section>
      {/* Domestic Destinations */}
      <section className="featured-destinations">
        <div className="section-container">
          <div className="destination-intro">
            <h3 className="subtitle">Best Recommended Places of India</h3>
            <h2 className="title">Explore India with Royal Tourism</h2>
            <p className="description">
              Discover Indias rich heritage and vibrant culture with Royal Tourism – your gateway to unforgettable experiences.
            </p>
            <Link to="/Destinations/domesticdestinations">
            <button className="view-all-btn">View All</button>
            </Link>
          </div>
          
          <div className="destination-cards">
            <div className="destination-card">
              <img src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg" alt="Kerala" />
              <div className="card-overlay">
                <h4>Kerala</h4>
                <p>Gods Own Symphony</p>
              </div>
            </div>
            
            <div className="destination-card">
              <img src="https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg" alt="Jammu & Kashmir" />
              <div className="card-overlay">
                <h4>Jammu & Kashmir</h4>
                <p>Crown of India</p>
              </div>
            </div>
            
            <div className="destination-card">
              <img src="https://images.pexels.com/photos/4254555/pexels-photo-4254555.jpeg" alt="Himachal Pradesh" />
              <div className="card-overlay">
                <h4>Himachal Pradesh</h4>
                <p>Adventure Paradise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Destinations */}
      
      <section className="featured-destinations international-section">
        
        <div className="section-container">
          <div className="destination-intro">
            <h3 className="subtitle">Best International Places for you</h3>
            <h2 className="title">International tour with Royal Tourism</h2>
            <p className="description">
              Discover worlds rich heritage and vibrant culture with Royal Tourism – your gateway to unforgettable experiences.
            </p>
            <Link to="/Destinations/Internationaldestination">
            <button className="view-all-btn">View All</button>
            </Link>
          </div>
          
          <div className="destination-cards">
            <div className="destination-card">
              <img src="https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg" alt="Dubai" />
              <div className="card-overlay">
                <h4>Dubai</h4>
                <p>City of Gold</p>
              </div>
            </div>
            
            <div className="destination-card">
              <img src="https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg" alt="Singapore" />
              <div className="card-overlay">
                <h4>Singapore</h4>
                <p>Where Innovation Meets Nature</p>
              </div>
            </div>
            
            <div className="destination-card">
              <img src="https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg" alt="Maldives" />
              <div className="card-overlay">
                <h4>Maldives</h4>
                <p>Paradise on Earth</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;