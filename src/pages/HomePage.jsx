const Home = () => {
  // Image URLs for domestic destinations
  const domesticDestinations = [
    { name: "Amritsar", url: "https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg" },
    { name: "Andaman", url: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg" },
    { name: "Coorg", url: "https://images.pexels.com/photos/5208363/pexels-photo-5208363.jpeg" },
  ];

  // Image URLs for international destinations
  const internationalDestinations = [
    { name: "Bali", url: "https://images.pexels.com/photos/1802255/pexels-photo-1802255.jpeg" },
    { name: "Bangkok", url: "https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg" },
    { name: "Dubai", url: "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg" },
  ];

  return (
    <div>
      {/* Hero Banner Section */}
      <div className="w-full bg-cover bg-fixed bg-center h-screen flex items-center" 
           style={{backgroundImage: "url('https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg')"}}>
        <div className="container mx-auto px-4">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-6/12">
            <h2 className="text-white text-3xl md:text-4xl font-bold">Welcome to <br />The Royal Tourism!</h2>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold">Journey to Paradise</h1>
            <p className="text-white mt-2">Uncover the worlds most beautiful destinations and <br />create joyful memories with your loved ones.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mt-3">Explore</button>
          </div>
        </div>
      </div>

      {/* Plan Your Trip Section */}
      <div className="container mx-auto px-4 my-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img src="https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg" className="w-full rounded-lg" alt="Travel Planning" />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h1 className="text-3xl italic font-light">Lets Go Together</h1>
            <h1 className="text-4xl font-bold text-blue-600">Plan Your Trip With Us</h1>
            <p className="mt-2 text-gray-700">
              Explore the world your way! With personalized plans, expert advice, and unbeatable deals,
              were here to make your trip memorable and stress-free. Lets begin your journey now!
            </p>

            <div className="flex mt-8 mb-6">
              <div className="mr-4 mt-1">
                <img src="https://cdn-icons-png.flaticon.com/512/3778/3778146.png" className="w-12 h-12" alt="Map" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-600 mb-1">Exclusive Trip</h4>
                <p className="text-gray-700">
                  Tailored adventures with unique destinations, and premium
                  experiences—your dream journey starts here!
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 mt-1">
                <img src="https://cdn-icons-png.flaticon.com/512/1995/1995450.png" className="w-12 h-12" alt="Guide" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-600 mb-1">Professional Guide</h4>
                <p className="text-gray-700">
                  Travel worry-free with expert guides offering insider tips and local knowledge
                  for a seamless adventure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Section */}
      <div className="container mx-auto px-4 my-16">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-8">
          Give them quality. Thats the best kind of advertising
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <div className="rounded-xl h-64 bg-cover bg-center p-6 flex flex-col justify-between"
                 style={{backgroundImage: "url('https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg')"}}>
              <h2 className="text-2xl font-bold text-blue-100">Explore the World!</h2>
              <div>
                <h5 className="text-white text-xl mb-4">
                  Starting at ₹10,999/- <br />
                  Unmissable International Deals.
                </h5>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="rounded-xl h-64 bg-cover bg-center p-6 flex flex-col justify-between"
                 style={{backgroundImage: "url('https://images.pexels.com/photos/1482193/pexels-photo-1482193.jpeg')"}}>
              <h2 className="text-2xl font-bold text-pink-200">Discover India!</h2>
              <div>
                <h5 className="text-purple-800 text-xl mb-4">
                  Starting at ₹4,999/- <br />
                  Best Domestic Getaways.
                </h5>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore India Section */}
      <div className="container mx-auto px-4 my-16">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-7/12 mb-8 md:mb-0">
            <h1 className="text-3xl italic font-light">Best Recommended Places of India</h1>
            <h1 className="text-4xl font-bold text-blue-600">Explore India with Royal Tourism</h1>
            <p className="mt-2 text-gray-700">
              Discover Indias rich heritage and vibrant culture <br /> with Royal Tourism – your gateway
              to <br /> unforgettable experiences.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full mt-4 flex items-center">
              View All 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          <div className="w-full md:w-5/12 overflow-hidden">
            <div className="flex overflow-x-auto pb-4 space-x-4">
              {domesticDestinations.map((destination, index) => (
                <div key={index} className="flex-shrink-0">
                  <img src={destination.url} alt={destination.name} className="w-32 h-32 object-cover rounded-lg" />
                  <p className="text-center mt-1 text-sm">{destination.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Explore International Section */}
      <div className="container mx-auto px-4 my-16">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-7/12 mb-8 md:mb-0">
            <h1 className="text-3xl italic font-light">Best International Places for you</h1>
            <h1 className="text-4xl font-bold text-blue-600">
              International tour with Royal Tourism
            </h1>
            <p className="mt-2 text-gray-700">
              Discover Worlds heritage and vibrant culture <br /> with Royal Tourism – your
              gateway to <br /> unforgettable experiences.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full mt-4 flex items-center">
              View All 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          <div className="w-full md:w-5/12 overflow-hidden">
            <div className="flex overflow-x-auto pb-4 space-x-4">
              {internationalDestinations.map((destination, index) => (
                <div key={index} className="flex-shrink-0">
                  <img src={destination.url} alt={destination.name} className="w-32 h-32 object-cover rounded-lg" />
                  <p className="text-center mt-1 text-sm">{destination.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;