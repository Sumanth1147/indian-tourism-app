import React from 'react';
import CulturalSpotCard from '../components/CulturalSpotCard';

const CulturalSpots = () => {
  const culturalSpots = [
    {
      id: 1,
      name: 'Hampi',
      location: 'Karnataka',
      description: 'Ruins of the medieval Vijayanagara Empire',
      image: '../images/hampi.jpg',
      bestTimeToVisit: 'Oct-Feb',
      significance: 'UNESCO World Heritage Site'
    },
    {
      id: 2,
      name: 'Konark Sun Temple',
      location: 'Odisha',
      description: '13th-century temple dedicated to the sun god',
      image: '../images/konark.jpg',
      bestTimeToVisit: 'Oct-Mar',
      significance: 'UNESCO World Heritage Site'
    },
    {
      id: 3,
      name: 'Ajanta & Ellora Caves',
      location: 'Maharashtra',
      description: 'Ancient rock-cut cave monuments with Buddhist, Hindu and Jain art',
      image: '../images/ajanta.jpg',
      bestTimeToVisit: 'Jun-Mar',
      significance: 'UNESCO World Heritage Site'
    }
  ];

  const [regionFilter, setRegionFilter] = React.useState('');
  const [significanceFilter, setSignificanceFilter] = React.useState('');

  // Map region values to states for filtering
  const regionMap = {
    north: ['Jammu & Kashmir', 'Punjab', 'Himachal Pradesh', 'Uttarakhand', 'Delhi', 'Uttar Pradesh', 'Rajasthan', 'Haryana', 'Chandigarh'],
    south: ['Karnataka', 'Kerala', 'Tamil Nadu', 'Andhra Pradesh', 'Telangana'],
    east: ['Odisha', 'West Bengal', 'Bihar', 'Jharkhand', 'Assam', 'Sikkim', 'Arunachal Pradesh', 'Nagaland', 'Manipur', 'Meghalaya', 'Mizoram', 'Tripura'],
    west: ['Maharashtra', 'Gujarat', 'Goa', 'Rajasthan'],
  };

  const filteredSpots = culturalSpots.filter(spot => {
    // Region filter
    let regionMatch = true;
    if (regionFilter) {
      regionMatch = regionMap[regionFilter]?.includes(spot.location);
    }
    // Significance filter
    let significanceMatch = true;
    if (significanceFilter) {
      if (significanceFilter === 'unesco') {
        significanceMatch = spot.significance?.toLowerCase().includes('unesco');
      } else if (significanceFilter === 'protected') {
        significanceMatch = spot.significance?.toLowerCase().includes('asi');
      }
    }
    return regionMatch && significanceMatch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold font-serif text-center mb-8">Cultural Heritage Sites of India</h2>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <select
          className="flex-grow p-2 border border-gray-300 rounded"
          value={regionFilter}
          onChange={e => setRegionFilter(e.target.value)}
        >
          <option value="">Filter by Region</option>
          <option value="north">North India</option>
          <option value="south">South India</option>
          <option value="east">East India</option>
          <option value="west">West India</option>
        </select>
        <select
          className="flex-grow p-2 border border-gray-300 rounded"
          value={significanceFilter}
          onChange={e => setSignificanceFilter(e.target.value)}
        >
          <option value="">Filter by Significance</option>
          <option value="unesco">UNESCO Sites</option>
          <option value="protected">ASI Protected</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSpots.map(spot => (
          <CulturalSpotCard key={spot.id} spot={spot} />
        ))}
      </div>
    </div>
  );
};

export default CulturalSpots;