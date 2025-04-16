import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PackageDetails = () => {
  const { id } = useParams();
  const [tourDetails, setTourDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchTourDetails = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`http://localhost:5000/api/tours/details/${id}`);
      console.log('Tour details:', res.data);
      setTourDetails(res.data || []);
    } catch (err) {
      console.error('Fetch error:', err.response || err);
      setError(err.response?.data?.error || 'Failed to fetch tour details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTourDetails();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Package Details</h1>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-red-600 bg-red-100 p-3 rounded-md">{error}</p>
      ) : tourDetails.length === 0 ? (
        <p className="text-gray-500">No tour details found for this package.</p>
      ) : (
        <div className="w-full max-w-4xl space-y-8">
          {tourDetails.map((tour) => (
            <div key={tour.tid} className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{tour.tname}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-600"><strong>Duration:</strong> {tour.tday} days</p>
                  <p className="text-gray-600"><strong>Pickup:</strong> {tour.tpickup}</p>
                  <p className="text-gray-600"><strong>Overview:</strong> {tour.toverview}</p>
                  <p className="text-gray-600"><strong>Highlights:</strong> {tour.thighlights}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[tour.timg1, tour.timg2, tour.timg3, tour.timg4].map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Tour image ${idx + 1}`}
                      className="h-24 w-full object-cover rounded"
                      onError={(e) => (e.target.src = 'https://via.placeholder.com/96')}
                    />
                  ))}
                </div>
              </div>
              {tour.itineraries && tour.itineraries.length > 0 ? (
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">Itineraries</h3>
                  {tour.itineraries.map((itinerary) => (
                    <div key={itinerary.iid} className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-700">{itinerary.iname}</h4>
                      <div className="space-y-2">
                        {[1, 2, 3, 4, 5, 6, 7].map((day) => itinerary[`iday${day}`] && (
                          <p key={day} className="text-gray-600">
                            <strong>Day {day}:</strong> {itinerary[`iday${day}`]}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No itineraries available.</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PackageDetails;