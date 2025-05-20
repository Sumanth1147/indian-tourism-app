import React from 'react';
import ArtFormCard from '../components/ArtFormCard';

const ArtForms = () => {
  const artForms = [
    {
      id: 1,
      name: 'Madhubani Painting',
      region: 'Bihar',
      description: 'Traditional painting style with geometric patterns',
      image: '../images/madhubani.jpg'
    },
    {
      id: 2,
      name: 'Kathakali',
      region: 'Kerala',
      description: 'Classical dance-drama with elaborate costumes',
      image: '../images/kathakali.jpg'
    },
    {
      id: 3,
      name: 'Pattachitra',
      region: 'Odisha',
      description: 'Cloth-based scroll painting with mythological narratives',
      image: '../images/pattachitra.jpg'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold font-serif text-center mb-8">Traditional Art Forms of India</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artForms.map(artForm => (
          <ArtFormCard key={artForm.id} artForm={artForm} />
        ))}
      </div>
    </div>
  );
};

export default ArtForms;