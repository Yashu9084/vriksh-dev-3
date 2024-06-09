import React from "react";
import { FaFacebook,FaTwitter,FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="mt-[6vw] px-[8vw] md:px-[5vw] flex flex-col md:flex-row gap-[4vw] items-start mb-[6vw] md:mb-[3vw]">
        <div className="flex flex-col gap-[2vw]">
          {" "}
          {/* Added gap size here */}
          <h2 className="text-white font-peg font-extralight text-[8vw] md:text-[3vw]">
            Vriksh Software
          </h2>
          <p className="text-white text-[3.5vw] md:text-[0.8vw] md:w-[70%]">
            Creative-powered to fuel your growth goals. We build world-class
            digital products, software and branding.
          </p>
        </div>
        <div className="mt-[6vw] md:mt-0 flex gap-[20vw] md:gap-[10vw] text-white text-[2.6vw] md:text-[0.8vw]">
          <div className="flex flex-col gap-[4vw] md:gap-[0.5vw]">
            <h1 className="font-bold text-[3vw] md:text-[1.5vw]">Products</h1>
            <p className="text-[#E7E5EA]">Unify App</p>
            <p className="text-[#E7E5EA]">Page Builder</p> {/* Fixed typo */}
            <p className="text-[#E7E5EA]">Templates</p>
            <p className="text-[#E7E5EA]">Pricing</p>
          </div>
          <div className="flex flex-col gap-[4vw] md:gap-[0.5vw]">
            <h1 className="font-bold text-[3vw] md:text-[1.5vw]">Resources</h1>
            <p className="text-[#E7E5EA]">Unify App</p>
            <p className="text-[#E7E5EA]">Page Builder</p> {/* Fixed typo */}
            <p className="text-[#E7E5EA]">Templates</p>
            <p className="text-[#E7E5EA]">Pricing</p>
          </div>
          <div className="flex flex-col gap-[4vw] md:gap-[0.5vw]">
            <h1 className="font-bold text-[3vw] md:text-[1.5vw]">Support</h1>
            <p className="text-[#E7E5EA]">Unify App</p>
            <p className="text-[#E7E5EA]">Page Builder</p> {/* Fixed typo */}
            <p className="text-[#E7E5EA]">Templates</p>
            <p className="text-[#E7E5EA]">Pricing</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between bg-[#D9F203] px-[8vw] md:px-[5vw] py-[3vw] md:py-[0.4vw] text-[1.2vw] items-center">
        {" "}
        {/* Removed -mx-36 */}
        <div className="bg-transparent hidden md:block text-[#637400]">&copy; 2024 Vriksh Software</div>
        <div className="bg-transparent mx-auto md:mx-0 flex gap-[1.5vw] md:gap-[0.5vw]">
          <FaFacebook className="bg-transparent size-[5vw] md:size-[1.5vw] cursor-pointer" color="#97B100" size={20}  />
          <FaTwitter className="bg-transparent size-[5vw] md:size-[1.5vw] cursor-pointer" color="#97B100" size={20}  />
          <FaYoutube className="bg-transparent size-[5vw] md:size-[1.5vw] cursor-pointer" color="#97B100" size={20}  />
        </div>
      </div>
    </div>
  );
};

export default Footer;
