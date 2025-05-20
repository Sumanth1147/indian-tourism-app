import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ArtFormCard from '../components/ArtFormCard';
import CulturalSpotCard from '../components/CulturalSpotCard';

const Home = () => {
  const featuredArtForms = [
  {
    id: 1,
    name: 'Warli Painting',
    region: 'Maharashtra',
    description: 'Tribal art form with simple geometric shapes',
    image: '../images/warli.jpg'
  },
  {
    id: 2,
    name: 'Bharatanatyam',
    region: 'Tamil Nadu',
    description: 'Classical dance form with intricate expressions',
    image: '../images/bharatanatyam.jpg'
  },
  {
    id: 3,
    name: 'Kathak',
    region: 'Uttar Pradesh',
    description: 'Classical dance known for storytelling through movement',
    image: '../images/kathak.jpg'
  },
  {
    id: 4,
    name: 'Madhubani Painting',
    region: 'Bihar',
    description: 'Folk art with vibrant colors and symbolic patterns',
    image: '../images/madhubani.jpg'
  },
  {
    id: 5,
    name: 'Mohiniyattam',
    region: 'Kerala',
    description: 'Graceful classical dance with subtle movements',
    image: '../images/mohiniyattam.jpg'
  },
  {
    id: 6,
    name: 'Pattachitra',
    region: 'Odisha',
    description: 'Traditional scroll painting with mythological themes',
    image: '../images/pattachitra.jpg'
  }
];


  const featuredSpots = [
  {
    id: 1,
    name: 'Khajuraho Temples',
    location: 'Madhya Pradesh',
    description: 'Famous for their nagara-style architecture and erotic sculptures',
    image: '../images/khajuraho.jpg',
    bestTimeToVisit: 'Oct-Mar',
    significance: 'UNESCO World Heritage Site'
  },
  {
    id: 2,
    name: 'Konark Sun Temple',
    location: 'Odisha',
    description: 'A 13th-century temple shaped like a giant chariot dedicated to the Sun God',
    image: '../images/konark.jpg',
    bestTimeToVisit: 'Oct-Feb',
    significance: 'UNESCO World Heritage Site'
  },
  {
    id: 3,
    name: 'Ajanta Caves',
    location: 'Maharashtra',
    description: 'Rock-cut Buddhist cave monuments famous for ancient paintings and sculptures',
    image: '../images/ajanta.jpg',
    bestTimeToVisit: 'Nov-Mar',
    significance: 'UNESCO World Heritage Site'
  },
  {
    id: 4,
    name: 'Hampi',
    location: 'Karnataka',
    description: 'Ruins of the Vijayanagara Empire known for grand temples and ancient markets',
    image: '../images/hampi.jpg',
    bestTimeToVisit: 'Oct-Feb',
    significance: 'UNESCO World Heritage Site'
  },
  {
    id: 5,
    name: 'Ellora Caves',
    location: 'Maharashtra',
    description: 'A monumental complex with Hindu, Buddhist, and Jain rock-cut temples and monasteries',
    image: '../images/ellora.jpg',
    bestTimeToVisit: 'Nov-Mar',
    significance: 'UNESCO World Heritage Site'
  },
  {
    id: 6,
    name: 'Mahabalipuram',
    location: 'Tamil Nadu',
    description: 'Famed for its group of sanctuaries carved out of rock during the Pallava dynasty',
    image: '../images/mahabalipuram.jpg',
    bestTimeToVisit: 'Nov-Feb',
    significance: 'UNESCO World Heritage Site'
  }
];


  return (
    <div className="pb-12">
      <HeroSection />
      <StatsSection />
      
      <section className="container mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold font-serif text-center mb-8">Featured Art Forms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtForms.map(artForm => (
            <ArtFormCard key={artForm.id} artForm={artForm} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold font-serif text-center mb-8">Featured Cultural Spots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSpots.map(spot => (
            <CulturalSpotCard key={spot.id} spot={spot} />
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif mb-6">Ready to Explore India's Cultural Heritage?</h2>
          <button className="bg-pink-600 hover:bg-green-200 text-dark font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
            Plan Your Cultural Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;