import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import DarkModeToggler from './DarkModeToggler';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Experience', path: '/experience' },
    { label: 'Education', path: '/education' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left: Logo / Name */}
        <Link to="/" className="text-lg font-semibold text-gray-900 dark:text-white hover:underline">
          Saransh
        </Link>

        {/* Right: Desktop nav with animated active tab */}
        <div className="hidden md:flex relative items-center space-x-6 text-gray-800 dark:text-gray-200">
          {navLinks.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <div key={label} className="relative">
                <Link
                  to={path}
                  className={`relative px-3 py-1 z-10 transition-colors duration-200 ${
                    isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'
                  }`}
                >
                  {label}
                </Link>

                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-blue-100/50 dark:bg-blue-500/10 rounded-md"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile: Hamburger icon */}
        <div className="md:hidden relative w-6 h-6 cursor-pointer">
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="w-6 h-6 active:scale-95 transition-transform duration-150"
          >
            <HiMenu
              className={`absolute top-0 left-0 w-6 h-6 transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              } text-gray-700 dark:text-white`}
            />
            <HiX
              className={`absolute top-0 left-0 w-6 h-6 transition-opacity duration-300 ${
                menuOpen ? 'opacity-100' : 'opacity-0'
              } text-gray-700 dark:text-white`}
            />
          </div>
        </div>
      </div>

      {/* Mobile: Dropdown menu */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4 space-y-3 text-gray-800 dark:text-gray-200">
          {navLinks.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`block hover:underline transition-colors ${
                location.pathname === path ? 'text-blue-600 font-semibold underline' : ''
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Mobile-only dark mode toggle */}
          <div className="pt-2">
            <DarkModeToggler />
          </div>
        </div>
      </div>
    </nav>
  );
}
