import "../styles/ContactUs.css";

const locations = [
  { name: "Kerala", email: "kerala@gmail.com", phone: "+91 1234567890" },
  { name: "Goa", email: "goa@gmail.com", phone: "+91 1234567890" },
  { name: "Dubai", email: "dubai@gmail.com", phone: "+91 1234567890" },
];

const ContactUs = () => {
  return (
    <div className="contact-page">
      <section className="hero">
        <div className="hero-overlay">
          <h1>Contact Us</h1>
          <p>Wed love to hear from you! Reach out to our expert travel guides.</p>
        </div>
      </section>

      <section className="contact-info">
        <h2>Lets Talk With Our Expert Travel Guides</h2>
        <div className="info-cards">
          {locations.map((location, index) => (
            <div className="card" key={index}>
              <h3>{location.name}</h3>
              <p>Contact our guide for amazing experiences.</p>
              <p>Email: <strong>{location.email}</strong></p>
              <p>Phone: <strong>{location.phone}</strong></p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-form">
        <h2>Get In Touch</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Phone Number" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="map">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      
    </div>
  );
};

export default ContactUs;
