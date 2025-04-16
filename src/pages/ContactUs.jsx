import { Link } from "react-router-dom";

const ContactUs = () => {
  const locations = [
    {
      name: "Hyderabad",
      address: "2nd Floor, Tourism Plaza, Balayogi Paryataka Bhavan, Begumpet, Hyderabad 500016",
      email: "kolhapur@theroyaltourism.in",
      phone: "+91 7997008007",
    },
    {
      name: "Goa",
      address: "56/A2, Calangute, Candoilm Main Road, Gauravaddo, Calangute, Goa - 403515",
      email: "goa@theroyaltourism.in",
      phone: "+91 8977008007",
    },
    {
      name: "Maharashtra",
      address: "1st Floor, Shahupuri C Wing, Stearling Tower, Kolhapur, Maharashtra - 416003",
      email: "kolhapur@theroyaltourism.in",
      phone: "+91 7997008007",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Banner Section */}
      <div
        className="relative h-[33rem] bg-cover bg-fixed bg-center flex items-end p-10"
        style={{ backgroundImage: "url('/assets/Images/about_bg.png')" }}
      >
        <div className="container mx-auto flex justify-between items-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
          <div className="flex items-center">
            <Link to="/" className="text-white hover:text-white no-underline mr-2">
              Home
            </Link>
            <svg className="w-4 h-4 text-white mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white underline">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Let's Talk Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold main-text mb-4">
              Let’s Talk Our Expert Travel Guides
            </h2>
            <p className="text-gray-600 mb-6">
              Our dedicated support team is always ready to assist you with any questions or issues,
              offering prompt and personalized solutions to meet your needs.
            </p>
            <div>
              <h4 className="text-xl font-semibold main-text mb-3">Expert Team member</h4>
              <div className="flex gap-2">
                <img
                  src="/assets/Images/acura-tlx-type-s.jpg"
                  alt="team1"
                  className="w-12 h-12 rounded-full"
                  loading="lazy"
                />
                <img
                  src="/assets/Images/lotus-evija-fittipaldi.jpg"
                  alt="team2"
                  className="w-12 h-12 rounded-full"
                  loading="lazy"
                />
                <img
                  src="/assets/Images/lotus-evija-fittipaldi.jpg"
                  alt="team3"
                  className="w-12 h-12 rounded-full"
                  loading="lazy"
                />
                <img
                  src="https://theroyaltourism.in/frontend/images/contact/add.svg"
                  alt="add"
                  className="w-12 h-12"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold main-text mb-3">{location.name}</h4>
                  <ul className="list-none p-0 m-0">
                    <li className="flex items-start mb-2">
                      <img
                        src="https://theroyaltourism.in/frontend/images/contact/location-icon.svg"
                        alt="location"
                        className="w-5 h-5 mr-2 mt-1"
                        loading="lazy"
                      />
                      <span className="text-gray-600">{location.address}</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <img
                        src="https://theroyaltourism.in/frontend/images/contact/email.svg"
                        alt="email"
                        className="w-5 h-5 mr-2"
                        loading="lazy"
                      />
                      <span className="text-gray-600">{location.email}</span>
                    </li>
                    <li className="flex items-center">
                      <img
                        src="https://theroyaltourism.in/frontend/images/contact/call.svg"
                        alt="phone"
                        className="w-5 h-5 mr-2"
                        loading="lazy"
                      />
                      <span className="text-gray-600">{location.phone}</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-7/12">
            <h2 className="text-3xl md:text-4xl font-bold main-text mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-6">
              Your email address will not be published. Required fields are marked *
            </p>
            <form action="https://theroyaltourism.in/inquiry" method="POST" className="space-y-4">
              <input type="hidden" name="_token" value="lTpV9r5Mkl1RXCz4b61qqD4v29RUedMMVoR7bZzH" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">Full Name*</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Phone Number*</label>
                  <input
                    type="text"
                    name="phone_number"
                    placeholder="Phone"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email Address*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Your Message</label>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full p-3 border border-gray-300 rounded-lg h-32"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white px-6 py-2 rounded-full  flex items-center"
                style={{backgroundColor:"#8C387C"}}
              >
                Send Message
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
          <div className="md:w-5/12">
            <img
              src="https://theroyaltourism.in/frontend/images/contact/right.png"
              alt="Contact"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="py-6 px-6">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d230.76029867042232!2d70.79888132944777!3d22.271747120526854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbb9b96aba6d%3A0x1e26de56f20becfb!2sD%20Mart!5e0!3m2!1sen!2sin!4v1743584164370!5m2!1sen!2sin"
          className="w-full h-[450px] rounded-lg border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;