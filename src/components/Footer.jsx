import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold font-serif mb-4 text-secondary">India Cultural Tourism</h3>
          <p className="text-gray-300">Preserving heritage, promoting responsible tourism</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4 text-secondary">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-300 hover:text-white transition duration-300">Home</a></li>
            <li><a href="/art-forms" className="text-gray-300 hover:text-white transition duration-300">Art Forms</a></li>
            <li><a href="/cultural-spots" className="text-gray-300 hover:text-white transition duration-300">Cultural Spots</a></li>
            <li><a href="/responsible-tourism" className="text-gray-300 hover:text-white transition duration-300">Responsible Tourism</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4 text-secondary">Contact</h4>
          <p className="text-gray-300 mb-2">Email: info@indiaculturaltourism.com</p>
          <p className="text-gray-300 mb-4">Phone: +91 9876543210</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white text-xl transition duration-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} India Cultural Tourism. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;