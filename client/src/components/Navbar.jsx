import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full px-[2vw] md:px-[4vw] py-[3vh] flex justify-between items-center bg-[#010103] text-white sticky top-0 z-50 ">
      <h2 className="font-peg font-extralight text-[6vw] md:text-[3vw]">
        Vriksh Software
      </h2>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="#97B100"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="hidden md:flex items-center">
        <ul className="flex flex-row items-center gap-6 md:gap-10 font-sen cursor-pointer text-[1.2vw] z-50">
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="hover:text-[#97B100]"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="active"
              className="hover:text-[#97B100]"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              activeClassName="active"
              className="hover:text-[#97B100]"
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              activeClassName="active"
              className="hover:text-[#97B100]"
            >
              Our Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="active"
              className="hover:text-[#97B100]"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-[#97B100] text-white flex flex-col items-center justify-center h-[50vh] z-50">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 focus:outline-none bg-transparent"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="#97B100"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="w-full flex flex-col items-center font-sen cursor-pointer text-xl py-10 bg-transparent">
            <li className="py-4 hover:bg-[#010103] bg-transparent w-full text-center" onClick={toggleMenu}>
              <NavLink exact to="/" activeClassName="text-[#D9F203] underline" className="bg-transparent">
                Home
              </NavLink>
            </li>
            <li className="py-4 hover:bg-[#010103] bg-transparent w-full text-center" onClick={toggleMenu}>
              <NavLink to="/about" activeClassName="text-[#D9F203] underline" className="bg-transparent">
                About Us
              </NavLink>
            </li>
            <li className="py-4 hover:bg-[#010103] bg-transparent w-full text-center" onClick={toggleMenu}>
              <NavLink to="/service" activeClassName="text-[#D9F203] underline" className="bg-transparent">
                Service
              </NavLink>
            </li>
            <li className="py-4 hover:bg-[#010103] bg-transparent w-full text-center" onClick={toggleMenu}>
              <NavLink to="/portfolio" activeClassName="text-[#D9F203] underline" className="bg-transparent">
                Our Portfolio
              </NavLink>
            </li>
            <li className="py-4 hover:bg-[#010103] bg-transparent w-full text-center" onClick={toggleMenu}>
              <NavLink to="/contact" activeClassName="text-[#D9F203] underline" className="bg-transparent">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
