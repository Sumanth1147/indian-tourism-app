import React from 'react';

const ResponsibleTourism = () => {
  const tips = [
    "Respect local customs and traditions",
    "Purchase authentic handicrafts directly from artisans",
    "Avoid plastic and maintain cleanliness at heritage sites",
    "Visit during off-peak seasons to reduce overcrowding",
    "Use local guides to support the community"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold font-serif text-center mb-8">Promoting Responsible Tourism</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-bold font-serif mb-4 text-primary">How to be a Responsible Cultural Tourist</h3>
        <ul className="space-y-3">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <span className="text-secondary mr-2">✓</span>
              <span className="text-gray-700">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-2xl font-bold font-serif mb-4 text-primary">Government Initiatives</h3>
        <p className="text-gray-700">
          The Indian government has launched several programs to preserve cultural heritage while
          promoting sustainable tourism. These include the 'Adopt a Heritage' scheme and various
          craft cluster development programs. The Ministry of Tourism's 'Incredible India' campaign
          emphasizes responsible tourism practices that benefit local communities while protecting
          cultural assets.
        </p>
      </div>
    </div>
  );
};

export default ResponsibleTourism;