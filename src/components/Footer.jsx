
const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-[#EEE8F6]" style={{paddingInline: "5rem"}}>
      {/* Section: Social Media */}
      <section className="flex flex-col lg:flex-row container mx-auto justify-between p-4">
        {/* Left: Contact Info */}
        <div className="ml-2 hidden lg:flex items-center">
          <i className="bi bi-headset text-[#8C387C] text-3xl font-medium mr-2"></i>
          <span className="text-[#05073D] font-medium">
            Speak to our expert Travel Guide{" "}
            <span className="text-[#8C387C]">1-234-567-8901</span>
          </span>
        </div>

        {/* Right: Social Media Links */}
        <div className="flex items-center mt-3 justify-center lg:justify-end">
          <span className="mr-2">Follow Us :</span>
          <a href="#" className="mr-4">
            <i className="bi bi-facebook text-white text-center p-2 rounded-full bg-[#8C387C] w-9 h-9 flex items-center justify-center"></i>
          </a>
          <a href="#" className="mr-4">
            <i className="bi bi-twitter text-white text-center p-2 rounded-full bg-[#8C387C] w-9 h-9 flex items-center justify-center"></i>
          </a>
          <a href="#" className="mr-4">
            <i className="bi bi-instagram text-white text-center p-2 rounded-full bg-[#8C387C] w-9 h-9 flex items-center justify-center"></i>
          </a>
          <a href="#" className="mr-4">
            <i className="bi bi-linkedin text-white text-center p-2 rounded-full bg-[#8C387C] w-9 h-9 flex items-center justify-center"></i>
          </a>
        </div>
      </section>

      <hr className="container mx-auto border-[#8697C3]" />

      {/* Section: Links & Contact */}
      <section>
        <div className="container mx-auto text-center md:text-left mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
            {/* About */}
            <div className="mb-4 mx-auto">
              <h6 className="capitalize text-[#8C387C] font-bold mb-4">The Royal Tourism</h6>
              <p className="text-gray-600">
                Providing details about international & domestic packages, including famous foods,
                activities, and places.
              </p>
            </div>

            {/* Links */}
            <div className="mb-4 mx-auto">
              <h6 className="capitalize font-bold mb-4 text-[#8C387C]">Links</h6>
              <p><a href="Home" className="text-gray-600 hover:underline">Home</a></p>
              <p><a href="AboutUs" className="text-gray-600 hover:underline">About Us</a></p>
              <p><a href="Contact" className="text-gray-600 hover:underline">Contact Us</a></p>
              <p><a href="SignUp" className="text-gray-600 hover:underline">Register</a></p>
            </div>

            {/* Destinations */}
            <div className="mb-4 mx-auto">
              <h6 className="capitalize font-bold mb-4 text-[#8C387C]">Destinations</h6>
              <p><a href="/destinations/Domesticdestinations" className="text-gray-600 hover:underline">Domestic</a></p>
              <p><a href="/destinations/InternationalDestination" className="text-gray-600 hover:underline">International</a></p>
            </div>

            {/* Contact Info */}
            <div className="mb-4 mx-auto">
              <h6 className="capitalize font-bold mb-4 text-[#8C387C]">Contact</h6>
              <div className="flex gap-2">
                <img
                  src="/assets/Images/location.png"
                  className="mt-3 w-8 h-[34px]"
                  alt="location"
                />
                <p className="text-gray-600">
                  2nd Floor, Tourism Plaza, Balayogi, Paryataka Bhavan, Begumpet, Hyderabad 500016.
                </p>
              </div>
              <div className="flex gap-2 mt-3">
                <img
                  src="/assets/Images/mail.png"
                  className="w-8 h-[34px]"
                  alt="mail"
                />
                <p className="text-gray-600 mt-1">contact@theroyaltourism.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="container mx-auto border-[#8697C3]" />

      {/* Copyright */}
      <div className="text-center p-4">
        Copyrights © 2025 Reserved by{" "}
        <a href="#" className="font-bold text-[#8C387C] hover:underline">
          The Royal Tourism.
        </a>
      </div>
    </footer>
  );
};

export default Footer;