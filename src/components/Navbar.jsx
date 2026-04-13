import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        <Link to="/" className="text-xl font-bold tracking-wide">
          FOSSEE Workshops
        </Link>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/workshops" className="hover:text-yellow-300">Workshops</Link>
          <Link to="/book" className="hover:text-yellow-300">Book</Link>
          <Link to="/login" className="hover:text-yellow-300">Login</Link>
          <Link to="/register" className="bg-yellow-400 text-blue-900 px-3 py-1 rounded hover:bg-yellow-300">Register</Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-900 px-4 pb-4 flex flex-col gap-3 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-300 py-1" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/workshops" className="hover:text-yellow-300 py-1" onClick={() => setIsOpen(false)}>Workshops</Link>
          <Link to="/book" className="hover:text-yellow-300 py-1" onClick={() => setIsOpen(false)}>Book</Link>
          <Link to="/login" className="hover:text-yellow-300 py-1" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/register" className="bg-yellow-400 text-blue-900 px-3 py-2 rounded text-center" onClick={() => setIsOpen(false)}>Register</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
