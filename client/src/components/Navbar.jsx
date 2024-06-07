import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full px-6 md:px-20 py-4 flex justify-between items-center bg-[#010103] text-white">
      <h2 className="font-peg font-extralight text-[28px] md:text-[40px]">Vriksh Software</h2>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="#97B100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className="hidden md:flex items-center">
        <ul className="flex flex-row items-center gap-6 md:gap-10 font-sen cursor-pointer">
          <li className="hover:text-[#97B100]">Home</li>
          <li className="hover:text-[#97B100]">Services</li>
          <li className="hover:text-[#97B100]">Our Portfolio</li>
          <li className="hover:text-[#97B100]">About Us</li>
          <li className="hover:text-[#97B100]">Contact Us</li>
        </ul>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-[#010103] text-white flex flex-col items-center justify-center z-50">
          <button onClick={toggleMenu} className="absolute top-4 right-4 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="#97B100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul className="w-full flex flex-col items-center font-sen cursor-pointer text-xl py-10">
            <li className="py-4 hover:bg-[#97B100] w-full text-center" onClick={toggleMenu}>Home</li>
            <li className="py-4 hover:bg-[#97B100] w-full text-center" onClick={toggleMenu}>Services</li>
            <li className="py-4 hover:bg-[#97B100] w-full text-center" onClick={toggleMenu}>Our Portfolio</li>
            <li className="py-4 hover:bg-[#97B100] w-full text-center" onClick={toggleMenu}>About Us</li>
            <li className="py-4 hover:bg-[#97B100] w-full text-center" onClick={toggleMenu}>Contact Us</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;

