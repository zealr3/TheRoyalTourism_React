import "../styles/Footer.css"; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="text-center text-lg-start" style={{ backgroundColor: "#EEE8F6" }}>
      {/* Section: Social Media */}
      <section className="d-flex container justify-content-lg-between p-4">
        {/* Left: Contact Info */}
        <div className="ms-2 d-none d-lg-block">
          <i className="bi bi-headset main-text fs-3" style={{ fontWeight: 500 }}></i>
          <span style={{ color: "#05073D", fontWeight: 500 }}>
            Speak to our expert Travel Guide{" "}
            <span className="main-text">1-234-567-8901</span>
          </span>
        </div>

        {/* Right: Social Media Links */}
        <div className="d-flex mt-3">
          <span>Follow Us : &nbsp;</span>
          <a href="#" className="me-4">
            <i className="bi bi-facebook text-white text-center p-2 rounded-pill" style={iconStyle}></i>
          </a>
          <a href="#" className="me-4">
            <i className="bi bi-twitter text-white text-center p-2 rounded-pill" style={iconStyle}></i>
          </a>
          <a href="#" className="me-4">
            <i className="bi bi-instagram text-white text-center p-2 rounded-pill" style={iconStyle}></i>
          </a>
          <a href="#" className="me-4">
            <i className="bi bi-linkedin text-white text-center p-2 rounded-pill" style={iconStyle}></i>
          </a>
        </div>
      </section>

      <hr className="container" style={{ color: "#8697C3" }} />

      {/* Section: Links & Contact */}
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* About */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-capitalize main-text fw-bold mb-4">The Royal Tourism</h6>
              <p className="normal-text">
                Providing details about international & domestic packages, including famous foods,
                activities, and places.
              </p>
            </div>

            {/* Links */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-capitalize fw-bold mb-4 main-text">Links</h6>
              <p><a href="#!" className="normal-text">Home</a></p>
              <p><a href="#!" className="normal-text">About Us</a></p>
              <p><a href="#!" className="normal-text">Contact Us</a></p>
              <p><a href="#!" className="normal-text">Register</a></p>
            </div>

            {/* Destinations */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-capitalize fw-bold mb-4 main-text">Destinations</h6>
              <p><a href="#!" className="normal-text">Domestic</a></p>
              <p><a href="#!" className="normal-text">International</a></p>
            </div>

            {/* Contact Info */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-capitalize fw-bold mb-4 main-text">Contact</h6>
              <div className="d-flex gap-2 ">
              <img
                  src="/assets/Images/location.png"
                  style={{ width: 32, height: 34 }}
                  className="mt-3"
                  alt="guide"
                />
                <p className="normal-text">
                  2nd Floor, Tourism Plaza, Balayogi, Paryataka Bhavan, Begumpet, Hyderabad 500016.
                </p>
              </div>
              <div className="d-flex gap-2 mt-3">
              <img
                  src="/assets/Images/mail.png"
                  className=""
                  style={{ width: 32, height: 34 }}
                  alt="guide"
                />
                <p className="normal-text mt-1">contact@theroyaltourism.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="container" style={{ color: "#8697C3" }} />

      {/* Copyright */}
      <div className="text-center p-4">
        Copyrights © 2025 Reserved by{" "}
        <a href="#" className="fw-bold" style={{ color: "#8C387C" }}>
          The Royal Tourism.
        </a>
      </div>
    </footer>
  );
};

// Common Icon Style
const iconStyle = {
  backgroundColor: "#8C387C",
  paddingTop: "4px",
  // width: "35px",
  // height: "35px",
};

export default Footer;
