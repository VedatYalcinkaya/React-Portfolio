import React from 'react';
import logo from '../assets/images/VYlogoRed.png';

function Navbar() {
  return (
    <nav className="bg-secondary bg-opacity-70 shadow-md">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="relative flex h-50 items-center justify-between">
          <div className="flex items-center space-x-4">
            <img className="custom-logo my-4" src={logo} alt="Vedat Yalçınkaya Logo" />
            <div className="flex flex-col text-center">
              <span className="text-2xl font-josefin font-bold text-third">VEDAT YALÇINKAYA</span>
              <span className="text-2xl font-josefin font-bold text-third">PORTFOLIO</span>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex sm:space-x-10">
                <a href="#home" className="text-2xl text-primary-700 font-josefin font-bold hover:text-primary hover:scale-150 hover:transform-gpu transition-transform duration-300 ease-in-out">Home</a>
                <a href="#about" className="text-2xl text-primary-700 font-josefin font-bold hover:text-primary hover:scale-150 hover:transform-gpu transition-transform duration-300 ease-in-out">About</a>
                <a href="#projects" className="text-2xl text-primary-700 font-josefin font-bold hover:text-primary hover:scale-150 hover:transform-gpu transition-transform duration-300 ease-in-out">Projects</a>
                <a href="#skills" className="text-2xl text-primary-700 font-josefin font-bold hover:text-primary hover:scale-150 hover:transform-gpu transition-transform duration-300 ease-in-out">Skills</a>
                <a href="#contact" className="text-2xl text-primary-700 font-josefin font-bold hover:text-primary hover:scale-150 hover:transform-gpu transition-transform duration-300 ease-in-out">Contact</a>

            </div>
          </div>
        </div>
      </div>
    </nav>

);
}

export default Navbar;