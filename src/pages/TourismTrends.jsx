import React from 'react';
import { Bar } from 'react-chartjs-2';

const TourismTrends = () => {
  // const data = {
  //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  //   datasets: [
  //     {
  //       label: 'Tourist Visits to Cultural Sites',
  //       data: [12000, 19000, 30000, 50000, 20000, 15000, 25000, 30000, 40000, 60000, 80000, 95000],
  //       backgroundColor: 'rgba(75, 192, 192, 0.6)',
  //     },
  //   ],
  // };

  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top',
  //     },
  //   },
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  // };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold font-serif text-center mb-8">Tourism Trends at Cultural Hotspots</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        {/* <div className="h-96">
          <Bar data={data} options={options} />
        </div> */}
      </div>
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-2xl font-bold font-serif mb-4">Analysis</h3>
        <p className="text-gray-700">
          The data shows peak tourism during October to December, coinciding with festival season.
          Summer months see a dip due to high temperatures. This information can help in planning
          cultural events and managing resources more effectively.
        </p>
      </div>
    </div>
  );
};

export default TourismTrends;