import React from "react";
import { FaFacebook,FaTwitter,FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="mt-[6vw] px-[5vw] flex gap-[4vw] items-start mb-[3vw]">
        <div className="flex flex-col gap-4">
          {" "}
          {/* Added gap size here */}
          <h2 className="text-white font-peg font-extralight text-[3vw]">
            Vriksh Software
          </h2>
          <p className="text-white text-[0.8vw] w-[70%]">
            Creative-powered to fuel your growth goals. We build world-class
            digital products, software and branding.
          </p>
        </div>
        <div className="flex gap-[10vw] text-white text-[1.2vw]">
          <div className="flex flex-col gap-[0.5vw]">
            <h1 className="font-bold text-[1.5vw]">Products</h1>
            <p className="text-[#E7E5EA]">Unify App</p>
            <p className="text-[#E7E5EA]">Page Builder</p> {/* Fixed typo */}
            <p className="text-[#E7E5EA]">Templates</p>
            <p className="text-[#E7E5EA]">Pricing</p>
          </div>
          <div className="flex flex-col gap-[0.5vw]">
            <h1 className="font-bold text-[1.5vw]">Resources</h1>
            <p className="text-[#E7E5EA]">Unify App</p>
            <p className="text-[#E7E5EA]">Page Builder</p> {/* Fixed typo */}
            <p className="text-[#E7E5EA]">Templates</p>
            <p className="text-[#E7E5EA]">Pricing</p>
          </div>
          <div className="flex flex-col gap-[0.5vw]">
            <h1 className="font-bold text-[1.5vw]">Support</h1>
            <p className="text-[#E7E5EA]">Unify App</p>
            <p className="text-[#E7E5EA]">Page Builder</p> {/* Fixed typo */}
            <p className="text-[#E7E5EA]">Templates</p>
            <p className="text-[#E7E5EA]">Pricing</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between bg-[#D9F203] px-[5vw] py-[0.4vw] text-[1.2vw] items-center">
        {" "}
        {/* Removed -mx-36 */}
        <div className="bg-transparent  text-[#637400]">&copy; 2024 Vriksh Software</div>
        <div className="bg-transparent flex gap-[0.5vw]">
          <FaFacebook className="bg-transparent size-[1.5vw]" color="#97B100" size={20}  />
          <FaTwitter className="bg-transparent size-[1.5vw]" color="#97B100" size={20}  />
          <FaYoutube className="bg-transparent size-[1.5vw]" color="#97B100" size={20}  />
        </div>
      </div>
    </div>
  );
};

export default Footer;
