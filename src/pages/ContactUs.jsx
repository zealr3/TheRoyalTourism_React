const locations = [
  { name: "Kerala", email: "kerala@gmail.com", phone: "+91 1234567890", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
  { name: "Goa", email: "goa@gmail.com", phone: "+91 1234567890", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
  { name: "Dubai", email: "dubai@gmail.com", phone: "+91 1234567890", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
];

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[300px]" style={{ backgroundImage: "url('https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl">We'd love to hear from you! Reach out to our expert travel guides.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">Let's Talk With Our Expert Travel Guides</h2>
          <p className="text-gray-600 mb-8">Our dedicated support team is always ready to assist you with any questions.</p>

          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">{location.name}</h3>
                <p className="text-gray-600 mb-4">{location.description}</p>
                <p className="text-gray-800 mb-2">📧 {location.email}</p>
                <p className="text-gray-800">📞 {location.phone}</p>
              </div>
            ))}
          </div>

          {/* Contact Form & Image */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md md:w-1/2">
              <h2 className="text-3xl font-bold text-purple-800 mb-4">Get In Touch</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg" required />
                  <input type="text" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>
                <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg mb-4" required />
                <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg h-32 mb-4" required></textarea>
                <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700">Send Message</button>
              </form>
            </div>

            {/* Full Image */}
            <div className="md:w-1/2">
              <img src="/assets/right (1).png" alt="Tourism" className="w-full h-[500px] object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
        <div className="max-w-12xl mx-auto">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            className="w-full h-96 rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
    </div>
  );
};

export default ContactUs;
