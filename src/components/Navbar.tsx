
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-academic-navy font-medium text-lg">
            <Link to="/">Dr. Academic</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/research">Research</NavLink>
            <NavLink to="/teaching">Teaching</NavLink>
            <NavLink to="/cv">CV</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div className="md:hidden">
            <button className="text-academic-navy focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ children, to }: { children: React.ReactNode; to: string }) => {
  return (
    <Link to={to} className="text-academic-slate hover:text-academic-blue transition-colors duration-200">
      {children}
    </Link>
  );
};

export default Navbar;
