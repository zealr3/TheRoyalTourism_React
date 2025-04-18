import '../styles/Style.css';

const Home = () => {
  // Image URLs for domestic destinations

  // Domestic places for slider
  const domesticPlaces = [
    'Amritsar', 'Andaman', 'coorg', 'Darjeling- Gangtok', 'Delhi', 'goa',
    'himachal pradesh', 'Jammu & Kashmir', 'kerala', 'Kodaikanal', 'ladakh',
    'Mysore', 'Ooty', 'Rajasthan', 'Shiridi', 'Tirupathi', 'Wayanad'
  ];

  // Image URLs for international destinations
  const internationalPlaces = [
    'Bali', 'Bangkok', 'Dubai', 'Europe', 'Malaysia', 'Maldives',
    'Singapore', 'Sri Lanka', 'Thailand', 'Vietnam'
  ];

  return (
    <div>
      {/* Hero Banner Section */}
      <div className="prod_title" >
        <div className="container">
          <div className="row-auto">
            <div className="col-end-8">
              <h2 className="text-white fs-2" style={{ fontWeight: 600 }}> Welcome to <br />The Royal Tourism!</h2>
              <h1 className="text-white"> Journey to Paradise</h1>
              <p className="mb-0 text-white">Uncover the world&apos;s most beautyful destinations and <br />create joyful memories with your loved ones.</p>
              <button className="banner_btn mt-3">Explore</button>
            </div>
          </div>
        </div>
      </div>

      
      {/* Plan Your Trip Section */}
      <div className="container mx-auto my-10 px-4" style={{paddingInline: "5rem"}} >
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Image */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <img
              src="/assets/Images/all.png"
              className="w-3/4 lg:w-full h-auto object-cover"
              alt="Plan your trip"
            />
          </div>
          {/* Text Content */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <h1 className="text-5xl font-[Freestyle Script] text-gray-800">Let’s Go Together</h1>
            <h1 className="text-4xl font-bold text-[#8C387C] mt-2">Plan Your Trip With Us</h1>
            <p className="text-gray-600 mt-4">
              Explore the world your way! With personalized plans, expert advice, and unbeatable deals,
              we’re here to make your trip memorable and stress-free. Let’s begin your journey now!
            </p>
            <div className="flex items-start mt-8">
              <img
                src="/assets/Images/map.svg"
                className="w-10 h-10 mr-4"
                alt="Map icon"
              />
              <div>
                <h4 className="text-[#8C387C] font-semibold text-xl">Exclusive Trip</h4>
                <p className="text-gray-600">
                  Tailored adventures with unique destinations, and premium experiences—your dream journey starts here!
                </p>
              </div>
            </div>
            <div className="flex items-start mt-6">
              <img
                src="/assets/Images/guide.svg"
                className="w-10 h-10 mr-4"
                alt="Guide icon"
              />
              <div>
                <h4 className="text-[#8C387C] font-semibold text-xl">Professional Guide</h4>
                <p className="text-gray-600">
                  Travel worry-free with expert guides offering insider tips and local knowledge for a seamless adventure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Quality Section */}
      <div className="container mx-auto px-4 my-8" style={{paddingInline: "5rem"}}>
        <h1 className="text-3xl md:text-4xl font-bold main-text text-center mb-6">
          Give them quality. That’s the best kind of advertising
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <div
              className="rounded-2xl h-64 bg-cover bg-center p-4 flex flex-col justify-between"
              style={{
                backgroundImage: "url('/assets/Images/internationl.png')"
              }}
            >
              <h2 className="text-2xl font-bold" style={{ color: '#D1E8FF' }}>
                Explore the World!
              </h2>
              <div>
                <h5 className="text-white text-lg py-3">
                  Starting at ₹10,999/- <br />
                  Unmissable International Deals.
                </h5>
                <button className="inter_btn font-bold py-2 px-6 rounded-full mb-3">
                  Explore Now
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div
              className="rounded-2xl h-64 bg-cover bg-center p-4 flex flex-col justify-between"
              style={{
                backgroundImage: "url('/assets/Images/domestic.png')"
              }}
            >
              <h2 className="text-2xl font-bold" style={{ color: '#C559B1' }}>
                Discover India!
              </h2>
              <div>
                <h5 className="text-lg py-3" style={{ color: '#8C387C' }}>
                  Starting at ₹4,999/- <br />
                  Best Domestic Getaways.
                </h5>
                <button className="domestic_btn font-bold py-2 px-6 rounded-full mb-3">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Explore India Section */}
      <div className="container mx-auto my-10 px-4" style={{paddingInline: "2rem"}}>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-7/12">
            <h1 style={{ fontFamily: 'Freestyle Script' }} className="text-4xl">
              Best Recommended Places of India
            </h1>
            <h1 className="text-3xl md:text-4xl font-bold main-text mt-2">
              Explore India with Royal Tourism
            </h1>
            <p className="mt-4 text-gray-600">
              Discover India&apos;s rich heritage and vibrant culture <br />
              with Royal Tourism – your gateway to <br />
              unforgettable experiences
            </p>
            <button className="mt-6 domestic_btn font-bold py-2 px-6 rounded-full flex items-center">
              View All
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          <div className="md:w-5/12">
            <div className="overflow-hidden">
              <div className="flex animate-slide whitespace-nowrap">
                {domesticPlaces.map((place, index) => (
                  <div key={index} className="flex-shrink-0 mx-2">
                    <img
                      src={`/assets/Images/Domestic/${place}.png`}
                      alt={place}
                      className="w-48 h-60 object-cover rounded-lg"
                    />
                  </div>
                ))}
                {domesticPlaces.map((place, index) => (
                  <div key={`dup-${index}`} className="flex-shrink-0 mx-2">
                    <img
                      src={`/Images/Domestic/${place}.png`}
                      alt={place}
                      className="w-48 h-60 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Explore International Section */}
      <div className="container mx-auto px-4 my-16" style={{paddingInline: "2rem"}}>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-7/12">
            <h1 style={{ fontFamily: 'Freestyle Script' }} className="text-4xl">
              Best International Places for you
            </h1>
            <h1 className="text-3xl md:text-4xl font-bold main-text">
              International tour with Royal Tourism
            </h1>
            <p className="mt-4 text-gray-600">
              Discover Worlds heritage and vibrant culture <br />
              with Royal Tourism – your gateway to <br />
              unforgettable experiences
            </p>
            <button className="mt-6 domestic_btn font-bold py-2 px-6 rounded-full flex items-center">
              View All
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          <div className="md:w-5/12">
            <div className="overflow-hidden">
              <div className="flex animate-slide whitespace-nowrap">
                {internationalPlaces.map((place, index) => (
                  <div key={index} className="flex-shrink-0 mx-2">
                    <img
                      src={`/assets/Images/International/${place}.png`}
                      alt={place}
                      className="w-48 h-60 object-cover rounded-lg"
                    />
                  </div>
                ))}
                {internationalPlaces.map((place, index) => (
                  <div key={`dup-${index}`} className="flex-shrink-0 mx-2">
                    <img
                      src={`/Images/International/${place}.png`}
                      alt={place}
                      className="w-48 h-60 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;