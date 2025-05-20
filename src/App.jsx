import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArtForms from './pages/ArtForms';
import CulturalSpots from './pages/CulturalSpots';
import TourismTrends from './pages/TourismTrends';
import ResponsibleTourism from './pages/ResponsibleTourism';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/art-forms" element={<ArtForms />} />
            <Route path="/cultural-spots" element={<CulturalSpots />} />
            {/* <Route path="/tourism-trends" element={<TourismTrends />} /> */}
            <Route path="/responsible-tourism" element={<ResponsibleTourism />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;