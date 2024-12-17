import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 flex justify-between items-center p-4  text-white shadow-lg">
     
      <div className="logo text-2xl font-bold"></div>

      {/* Menu hamburger pour petits écrans */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center space-y-1 w-8 h-8"
        >
          <span className="w-full h-1 bg-white"></span>
          <span className="w-full h-1 bg-white"></span>
          <span className="w-full h-1 bg-white"></span>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transform transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`bg-gray-800 p-6 rounded-lg space-y-4 text-center w-60 transform transition-all duration-300 ${
            isOpen ? 'scale-100' : 'scale-95'
          }`}
          onClick={(e) => e.stopPropagation()} 
        >
          <ul className="space-y-2 flex justify-center items-center flex-col">
            <li className=''>
              <NavLink className="block no-underline text-cyan-300 py-2 hover:text-gray-400" to="/">Home</NavLink>
            </li>
            <li className="md:bg-black">
              <NavLink className=" block no-underline py-2 text-cyan-300 hover:text-gray-400" to="/about">A propos</NavLink>
            </li>
            <li>
              <NavLink className="block no-underline text-cyan-300 py-2 hover:text-gray-400" to="/reservations">Reservation</NavLink>
            </li>
            <li>
              <NavLink className="block no-underline text-cyan-300 py-2 hover:text-gray-400" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Menu principal pour écrans larges */}
      <nav className="hidden lg:flex items-center space-x-8">
        <ul className="flex space-x-8 text-lg">
          <li>
            <NavLink className="hover:text-gray-300" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="hover:text-gray-300" to="/about">A propos</NavLink>
          </li>
          <li>
            <NavLink className="hover:text-gray-300" to="/reservation">Reservation</NavLink>
          </li>
          <li>
            <NavLink className="hover:text-gray-300" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
