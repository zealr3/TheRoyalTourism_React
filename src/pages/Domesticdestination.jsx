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
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Discover Incredible India</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl">Explore the diverse beauty of Indias domestic treasures</p>
        </div>
      </div>

      {/* About India Section */}
      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-800">Discover the Soul of India!</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Immerse yourself in Indias diverse wonders—majestic temples, serene backwaters, vibrant festivals, and timeless heritage. Let
            us guide you through an unforgettable journey that celebrates the essence of this extraordinary land!
          </p>
        </div>
      </div>

      {/* Destination Cards */}
      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-purple-800">Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{destination.name}</h3>
                {/* <p className="text-gray-600 mb-4">{destination.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomesticDestination;