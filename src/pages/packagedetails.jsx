// src/components/PackageDetails.js
import { useState, useEffect } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PackageDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate(); // Added for back navigation
  const [tourDetails, setTourDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const packageData = location.state?.pkg || {};

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        console.log(`Fetching tours for package_id: ${id}`); // Debug log
        const response = await axios.get(`http://localhost:5000/api/tours/details/${id}`);
        console.log('Tour details response:', response.data); // Debug log
        setTourDetails(response.data || []);
        setLoading(false);
      } catch (err) {
        const errorMessage = err.response?.data?.message || err.message;
        console.error('Fetch tour details error:', {
          message: errorMessage,
          status: err.response?.status,
          data: err.response?.data,
        });
        setError(errorMessage || 'Failed to load tour details');
        setLoading(false);
      }
    };
    fetchTourDetails();
  }, [id]);

  // Function to navigate back
  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  if (loading) return <div className="flex justify-center items-center h-64 text-xl font-medium">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-64 text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="flex items-center text-purple-800 hover:text-purple-900 mb-6 transition-colors duration-200"
          aria-label="Go back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {/* Package Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">{packageData.name || 'Package Details'}</h1>
          <p className="text-lg text-gray-600 mb-4">{packageData.description}</p>
          <p className="text-2xl font-semibold text-purple-800">Price: ₹{packageData.price}</p>
        </div>

        {/* Tours Section */}
        {tourDetails.length === 0 ? (
          <div className="text-center text-gray-600 py-8">
            No tour details available for this package.
            {localStorage.getItem('token') && (
              <Link to="/admin/tours" className="text-purple-800 underline hover:text-purple-900">
                Add a tour for this package
              </Link>
            )}
          </div>
        ) : (
          tourDetails.map((tour) => (
            <div key={tour.tid} className="bg-white rounded-lg shadow-lg p-6 mb-12">
              {/* Tour Header */}
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{tour.tname}</h2>

              {/* Images Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[tour.timg1, tour.timg2, tour.timg3, tour.timg4].map((img, index) => (
                  img && (
                    <img
                      key={index}
                      src={img}
                      alt={`Tour image ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                      onError={(e) => (e.target.src = 'https://via.placeholder.com/400x300')}
                    />
                  )
                ))}
              </div>

              {/* Overview Section */}
              <div className="bg-gray-100 rounded-lg p-6 mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h3>
                <p className="text-gray-700 leading-relaxed">{tour.toverview}</p>
              </div>

              {/* Other Details */}
              <div className="space-y-4 mb-8">
                <p className="text-gray-600">
                  <strong className="font-medium">Duration:</strong> {tour.tday} days
                </p>
                <p className="text-gray-600">
                  <strong className="font-medium">Pickup Location:</strong> {tour.tpickup}
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Highlights</h3>
                  <p className="text-gray-700">{tour.thighlights}</p>
                </div>
              </div>

              {/* Itinerary Section */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Itinerary</h3>
                {tour.itineraries && tour.itineraries.length > 0 ? (
                  <div className="space-y-6">
                    {tour.itineraries.map((itinerary) => (
                      <div key={itinerary.iid} className="border-l-4 border-purple-800 pl-4">
                        <h4 className="text-lg font-medium text-gray-800 mb-2">{itinerary.iname}</h4>
                        {['iday1', 'iday2', 'iday3', 'iday4', 'iday5', 'iday6', 'iday7'].map((day, index) => (
                          itinerary[day] && (
                            <p key={day} className="text-gray-600 mb-2">
                              <strong>Day {index + 1}:</strong> {itinerary[day]}
                            </p>
                          )
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">No itinerary available for this tour.</p>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PackageDetails;