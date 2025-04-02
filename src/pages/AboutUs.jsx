import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Us
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Welcome to The Royal Tourism
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At <strong>The Royal Tourism</strong>, we specialize in crafting
              unforgettable travel experiences. Whether youre looking for a
              serene escape, a cultural adventure, or a luxurious getaway, we
              are committed to making your journey seamless and full of cherished
              memories.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg"
              alt="Travel Experience"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 px-4 bg-gray-100">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Meet Our Team
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Harshil Vanparia",
              role: "UI/UX Designer",
              image: "https://images.pexels.com/photos/3187677/pexels-photo-3187677.jpeg",
              linkedin: "#",
              twitter: "#",
              instagram: "#",
            },
            {
              name: "Zeal Raval",
              role: "Backend Developer",
              image: "https://images.pexels.com/photos/1839564/pexels-photo-1839564.jpeg",
              linkedin: "#",
              twitter: "#",
              instagram: "#",
            },
            {
              name: "Dhaval Goswami",
              role: "Travel Consultant",
              image: "https://images.pexels.com/photos/1797090/pexels-photo-1797090.jpeg",
              linkedin: "#",
              twitter: "#",
              instagram: "#",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              {/* Social Media Icons */}
              <div className="flex justify-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800 transition-colors" />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-2xl text-blue-400 hover:text-blue-600 transition-colors" />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl text-pink-500 hover:text-pink-700 transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 px-4 bg-white">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-purple-800 mb-12">
          Why Choose The Royal Tourism?
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Side: Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg"
              alt="Travel Group"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>

          {/* Right Side: Three Points */}
          <div className="md:w-1/2 flex flex-col gap-6">
            {[
              {
                icon: "⚙️",
                title: "Ultimate Flexibility",
                desc: "You're in control, with easy cancellation and payment options to satisfy any plan or budget.",
              },
              {
                icon: "🏞️",
                title: "Memorable Experiences",
                desc: "Browse and book tours and activities so incredible, you'll want to tell your friends.",
              },
              {
                icon: "🤝",
                title: "Quality at Our Core",
                desc: "High quality standards. Lots of positive reviews.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;