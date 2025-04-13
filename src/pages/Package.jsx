import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { destinationId } = useParams();
  const location = useLocation();

  const heroImage = location.state?.heroImage || "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg";
  const destinationName = location.state?.destinationName || "Destination";

  useEffect(() => {
    const fetchPackages = async () => {
      if (!destinationId) {
        setError("No destination ID provided");
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(`http://localhost:5000/api/packages/by-destination/${destinationId}`);
        setPackages(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching packages:", err);
        setError("Failed to load packages. Please try again.");
        setLoading(false);
      }
    };
    fetchPackages();
  }, [destinationId]);

  if (loading) return <div className="flex justify-center items-center h-64 text-xl font-medium">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-64 text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">{destinationName}</h1>
          <p className="text-xl text-center">Find your perfect getaway!</p>
        </div>
      </div>

      {/* Package Section */}
      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-purple-800">Available Packages</h2>
        
        {packages.length === 0 ? (
          <div className="text-center text-gray-600">No packages available for this destination.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map(pkg => (
              <div 
                key={pkg.pid} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={pkg.image || "/api/placeholder/400/300"}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{pkg.name}</h3>
                  <p className="text-gray-600 mb-2">{pkg.description}</p>
                  <p className="text-purple-800 font-semibold mb-2">Price: ₹{pkg.price}</p>
                  <p className="text-gray-600">Duration: {pkg.duration}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Packages;
