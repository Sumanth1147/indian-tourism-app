import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: '500+', label: 'Traditional Art Forms' },
    { value: '3000+', label: 'Cultural Heritage Sites' },
    { value: '29', label: 'UNESCO Sites' },
    { value: '1M+', label: 'Artisans Supported' }
  ];

  return (
    <section className="bg-green-200 text-black py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-4xl font-bold text-pink-600 mb-2">{stat.value}</h3>
            <p className="text-xl">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;