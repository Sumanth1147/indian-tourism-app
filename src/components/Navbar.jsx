import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/art-forms', label: 'Art Forms' },
    { to: '/cultural-spots', label: 'Cultural Spots' },
    // { to: '/tourism-trends', label: 'Tourism Trends' },
    { to: '/responsible-tourism', label: 'Responsible Tourism' },
  ];

  return (
    <nav className="bg-green-200 text-black shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold font-serif">
          India Cultural Tourism
        </Link>
        <ul className="flex space-x-6">
          {navLinks.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <li
                key={to}
                className={`transition duration-300 py-[7px] px-[15px] rounded-md ${
                  isActive ? 'bg-green-400 text-secondary' : 'hover:bg-green-400 hover:text-secondary'
                }`}
              >
                <Link
                  to={to}
                  className={`transition duration-300 ${
                    isActive ? 'text-secondary' : 'hover:text-secondary'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;