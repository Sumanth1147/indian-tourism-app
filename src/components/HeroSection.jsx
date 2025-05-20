import React from 'react';

const HeroSection = () => {
  return (
    <div 
      className="relative h-96 flex items-center justify-center bg-center bg-no-repeat bg-cover"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../images/hero-bg.jpg')",
        backgroundSize: "cover",  
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <div className="text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Discover India's Cultural Heritage</h1>
        <p className="text-xl mb-6">Explore traditional art forms and promote responsible tourism</p>
        <button className="bg-pink-600 hover:bg-green-200 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;