import React from 'react';

const ArtFormCard = ({ artForm }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img 
        src={artForm.image} 
        alt={artForm.name} 
        className="w-full h-79 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-primary mb-1">{artForm.name}</h3>
        <p className="text-gray-600 italic mb-2">{artForm.region}</p>
        <p className="text-gray-700 mb-4">{artForm.description}</p>
        <button className="w-full bg-primary bg-green-200 hover:bg-green-600 text-black font-medium py-2 px-4 rounded transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ArtFormCard;