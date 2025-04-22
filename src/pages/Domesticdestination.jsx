import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DomesticDestination = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/destinations/domestic");
        setDestinations(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching domestic destinations:", err);
        setError("Failed to load destinations. Please try again.");
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const handleOpen = (destination) => {
    navigate(`/destination/${destination.did}/packages`);
    // Add your navigation logic here to open the next page
  };

  if (loading) return <div className="flex justify-center items-center h-64 text-xl font-medium">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-64 text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div
        className="h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/Images/domestic_banner.png')", backgroundAttachment: "fixed" }}
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="w-full md:w-8/12 lg:w-8/12 xl:w-8/12 sm:w-full">
            <h1 className="text-white text-4x1 md:text-5xl font-bold mb-4">
            Discover the Soul of India
            </h1>
            <p className="text-white text-xl md:text-2xl">
            Immerse yourself in India’s diverse wonders majestic temples, serene<br /> backwaters, vibrant festivals, and timeless heritage. Let
            </p>
          </div>
        </div>
      </div>

      {/* About India Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="p-4 m-3 mt-5 shadow-lg rounded-lg">
          <h4 className="text-3xl font-bold mb-6 text-[#8C387C] ">Discover the Soul of India</h4>
          <p className="text-lg text-gray-700  ">
            Immerse yourself in India’s diverse wonders—majestic temples, serene backwaters, vibrant festivals, and timeless heritage. Let us guide you through an unforgettable journey that celebrates the essence of this extraordinary land!
          </p>
        </div>
      </section>

      {/* Destination Cards */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#8C387C]">Domestic Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {destinations.map(destination => (
            <div
              key={destination.did}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleOpen(destination)}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={destination.image || "/api/placeholder/400/300"}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{destination.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DomesticDestination;