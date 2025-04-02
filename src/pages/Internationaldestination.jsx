import { useEffect, useState } from "react";
import axios from "axios";

const InternationalDestination = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/destinations/international"
        );
        setDestinations(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching international destinations:", err);
        setError("Failed to load destinations. Please try again.");
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const handleOpen = (destination) => {
    alert(`Opening details for ${destination.name}`);
    // Add your navigation logic here, e.g.:
    // window.open(`/destination/${destination.did}`, "_blank");
  };

  if (loading) return (
    <div className="flex justify-center items-center h-64 text-xl font-medium">
      Loading...
    </div>
  );
  if (error) return (
    <div className="flex justify-center items-center h-64 text-red-600">
      {error}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Explore the World 🌍
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl">
            Discover stunning international destinations with us!
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-800">
            Journey Beyond Borders!
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Embark on an adventure across continents—experience breathtaking landscapes, 
            vibrant cultures, and iconic landmarks. Let us take you to the worlds most 
            captivating destinations!
          </p>
        </div>
      </div>

      {/* Destination Cards */}
      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-purple-800">
          International Destinations
        </h2>
        {destinations.length === 0 ? (
          <div className="text-center text-gray-600">
            No destinations available.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
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
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {destination.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InternationalDestination;