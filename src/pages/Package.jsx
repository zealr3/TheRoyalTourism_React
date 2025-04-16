import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation, Link } from "react-router-dom";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [foods, setFoods] = useState([]);
  const [activities, setActivities] = useState([]);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { destinationId } = useParams();
  const location = useLocation();

  const heroImage = location.state?.heroImage || "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg";
  const destinationName = location.state?.destinationName || "Destination";

  useEffect(() => {
    const fetchData = async () => {
      if (!destinationId) {
        setError("No destination ID provided");
        setLoading(false);
        return;
      }
      try {
        console.log(`Fetching packages for destinationId: ${destinationId}`);
        const packageResponse = await axios.get(`http://localhost:5000/api/packages/by-destination/${destinationId}`);
        console.log('Packages fetched:', packageResponse.data);
        setPackages(packageResponse.data);

        const foodResponse = await axios.get(`http://localhost:5000/api/foods?did=${destinationId}`);
        setFoods(foodResponse.data || []);

        const activityResponse = await axios.get(`http://localhost:5000/api/activities?did=${destinationId}`);
        setActivities(activityResponse.data || []);

        const placeResponse = await axios.get(`http://localhost:5000/api/places?did=${destinationId}`);
        setPlaces(placeResponse.data || []);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err.response?.data || err.message);
        setError(`Failed to load data: ${err.response?.data?.error || err.message}`);
        setLoading(false);
      }
    };
    fetchData();
  }, [destinationId]);

  if (loading) return <div className="flex justify-center items-center h-64 text-xl font-medium">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-64 text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
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

      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-purple-800">Available Packages</h2>
        
        {packages.length === 0 ? (
          <div className="text-center text-gray-600">No packages available for this destination.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map(pkg => (
              <div 
                key={pkg.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={pkg.image || "https://via.placeholder.com/400x300"}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/400x300")}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{pkg.name}</h3>
                  <p className="text-gray-600 mb-2">{pkg.description.substring(0, 100)}...</p>
                  <p className="text-purple-800 font-semibold mb-4">Price: ₹{pkg.price}</p>
                  <Link
                    to={`/packages/${pkg.id}`}
                    className="inline-block bg-purple-800 text-white py-2 px-4 rounded-lg hover:bg-purple-900 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-purple-800">Local Cuisine</h2>
        
        {foods.length === 0 ? (
          <div className="text-center text-gray-600">No foods available for this destination.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foods.map(food => (
              <div 
                key={food.fid} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={food.fimg || "https://via.placeholder.com/400x300"}
                    alt={food.fdetail}
                    className="w-full h-full object-cover"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/400x300")}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{food.fdetail}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-purple-800">Activities</h2>
        
        {activities.length === 0 ? (
          <div className="text-center text-gray-600">No activities available for this destination.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map(activity => (
              <div 
                key={activity.aid} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={activity.aimg || "https://via.placeholder.com/400x300"}
                    alt={activity.aactivity}
                    className="w-full h-full object-cover"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/400x300")}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{activity.aactivity}</h3>
                  <p className="text-gray-600 mb-2">{activity.adetail.substring(0, 100)}...</p>
                  <p className="text-gray-600 mb-2">Location: {activity.alocation}</p>
                  <p className="text-gray-600">Best Time: {activity.best_time}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-purple-800">Places to Visit</h2>
        
        {places.length === 0 ? (
          <div className="text-center text-gray-600">No places available for this destination.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {places.map(place => (
              <div 
                key={place.pl_id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={place.pl_img || "https://via.placeholder.com/400x300"}
                    alt="Place"
                    className="w-full h-full object-cover"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/400x300")}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{place.pl_location}</h3>
                  <p className="text-gray-600 mb-2">{place.pl_detail.substring(0, 100)}...</p>
                  <p className="text-gray-600">Best Time: {place.pl_best_time}</p>
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