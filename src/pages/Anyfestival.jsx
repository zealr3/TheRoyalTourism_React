import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const AnyFestivalPage = () => {
  const { festivalName } = useParams();
  const [festival, setFestival] = useState(null); 
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFestivalData = async () => {
      try {
        const festivalResponse = await axios.get(`http://localhost:5000/api/festivals/${festivalName}`);
        setFestival(festivalResponse.data);

        const destinationsResponse = await axios.get(`http://localhost:5000/api/festivals/${festivalName}/destinations`);
        setDestinations(destinationsResponse.data);
      } catch (err) {
        console.error("Error fetching festival data:", err);
        setFestival({ name: festivalName, subtitle: "Experience the joy of this festival!" });
      } finally {
        setLoading(false);
      }
    };

    fetchFestivalData();
  }, [festivalName]);

  if (loading)
    return <div className="flex justify-center items-center h-64 text-xl font-medium">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Celebrate <span className="text-yellow-400">{festival.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl">{festival.subtitle}</p>
          <Link to={`/book-${festivalName}-tour`} className="mt-4">
            {/* <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg shadow-md transition">
              Book a Tour
            </button> */}
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-800">Celebrate Traditions with Us!</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Experience the magic of {festival.name}. From cultural performances to breathtaking locations,
            immerse yourself in the beauty of this grand festival.
          </p>
        </div>
      </div>

      {/* Destinations Section */}
      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-purple-800">
          Top Destinations for {festival.name}
        </h2>
        {destinations.length === 0 ? (
          <div className="text-center text-gray-600">No destinations found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={`http://localhost:5000/uploads/${destination.image}`}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/400x300?text=No+Image")}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnyFestivalPage;
