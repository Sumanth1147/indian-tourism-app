import React from 'react';

const CulturalSpotCard = ({ spot }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img 
        src={spot.image} 
        alt={spot.name} 
        className="w-full h-79 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-primary mb-1">{spot.name}</h3>
        <p className="text-gray-600 italic mb-2">{spot.location}</p>
        <p className="text-gray-700 mb-4">{spot.description}</p>
        <div className="flex justify-between mb-4">
          <span className="bg-secondary text-dark text-sm font-medium py-1 px-2 rounded">
            {spot.bestTimeToVisit}
          </span>
          <span className="bg-primary text-white text-sm font-medium py-1 px-2 rounded">
            {spot.significance}
          </span>
        </div>
        <button className="w-full bg-primary hover:bg-primaryDark text-white font-medium py-2 px-4 rounded transition duration-300">
          Explore
        </button>
      </div>
    </div>
  );
};

export default CulturalSpotCard;