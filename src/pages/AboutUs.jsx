import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div
        className="relative h-[33rem] bg-cover bg-fixed bg-center flex items-end p-10"
        style={{ backgroundImage: "url('/assets/Images/about_bg.png')" }}
      >
        <div className="container mx-auto flex justify-between items-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
          <div className="flex items-center">
            <Link to="/" className="text-white hover:text-white no-underline mr-2">
              Home
            </Link>
            <svg className="w-4 h-4 text-white mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white underline">About Us</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 px-4" style={{ backgroundColor: "#EEE8F6" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold main-text">The Royal Tourism</h1>
            <h6 className="text-gray-600 mt-2">What we provide</h6>
            <p className="text-gray-600 mt-4">
              At The Royal Tourism, we specialize in offering exceptional travel experiences to both domestic <br />
              and international destinations. Our diverse range of curated packages includes detailed <br />
              itineraries with clear inclusions and exclusions, ensuring every traveler enjoys a seamless <br />
              journey. Whether you’re exploring the beauty of local landmarks or discovering the wonders of <br />
              foreign lands, our goal is to provide a comfortable and luxurious vacation experience.
            </p>
            <p className="text-gray-600 mt-4">
              We also offer exclusive packages centered around special festivals and cultural celebrations, <br />
              giving travelers a unique opportunity to experience local traditions. Every journey is crafted with <br />
              attention to detail, ensuring that you receive a personalized and enriching experience. From <br />
              stunning visuals to comprehensive information, we aim to make your trip unforgettable.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/assets/Images/about_img.png"
              alt="About Royal Tourism"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold main-text text-center mb-4">
          Our Team
        </h1>
        <h4 className="text-center text-gray-600 mb-12">
          One site{" "}
          <span className=" text-white px-4 py-1 rounded-full text-sm" style={{ backgroundColor: "#8C387C" }}>
            100+
          </span>{" "}
          most popular experience you’ll remember
        </h4>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Harshil Vanparia",
              role: "UI Designer",
              image: "/assets/Images/acura-tlx-type-s.jpg",
            },
            {
              name: "Zeal Raval",
              role: "Backend Dev",
              image: "/assets/Images/lotus-evija-fittipaldi.jpg",
            },
            {
              name: "Dhaval Goswami",
              role: "-",
              image: "/assets/Images/lotus-evija-fittipaldi.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div
                className="w-32 h-32 mx-auto mt-6 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <div className="p-6 text-center bg-[#F5F6FB] mt-4">
                <h5 className="text-xl font-semibold main-text">
                  {member.name}
                </h5>
                <p className="text-gray-600 my-3">{member.role}</p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-white  p-2 rounded-full" style={{ backgroundColor: "#8C387C" }}>
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-white  p-2 rounded-full" style={{ backgroundColor: "#8C387C" }}>
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-white  p-2 rounded-full" style={{ backgroundColor: "#8C387C" }}>
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-white  p-2 rounded-full" style={{ backgroundColor: "#8C387C" }}>
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 px-4" style={{ backgroundColor: "#F3EAF3" }}>
        <div className="max-w-6x2 mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="/assets/Images/why_choose.png"
              alt="Why Choose Us"
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2" style={{minWidth:"842px"}}>
            <h2 className=" md:text-4xl font-bold main-text text-center mb-10">
              Why Choose The Royal Tourism
            </h2>
            <div className="grid md:grid-cols-3 flex-1 gap-3 " style={{transform: "translateX(-200px)"}}>
              {[
                {
                  icon: "/assets/Images/ultimate.png",
                  title: "Ultimate flexibility",
                  desc: "You're in control, with easy cancellation and payment options to satisfy any plan or budget.",
                },
                {
                  icon: "/assets/Images/memorable.png",
                  title: "Memorable experiences",
                  desc: "Browse and book tours and activities so incredible, you'll want to tell your friends.",
                },
                {
                  icon: "/assets/Images/quility.png",
                  title: "Quality at our core",
                  desc: "High quality standards. Lots of positive reviews. Happy customer feedback.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-lg text-center"
                >
                  <img src={item.icon} alt={item.title} className="w-12 h-12 mx-auto mb-2" />
                  <h6 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h6>
                  <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;