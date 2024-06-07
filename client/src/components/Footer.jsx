import React from "react";
import { FaFacebook,FaTwitter,FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="mt-24 px-36 flex gap-24 items-start mb-12">
        <div className="flex flex-col gap-4">
          {" "}
          {/* Added gap size here */}
          <h2 className="text-white font-peg font-extralight text-[28px] md:text-[40px]">
            Vriksh Software
          </h2>
          <p className="text-white text-sm">
            Creative-powered to fuel your growth goals. We build world-class
            digital products, software and branding.
          </p>
        </div>
        <div className="flex gap-36 text-white">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Products</h1>
            <p className="text-[#E7E5EA]">Unify App</p>
            <p className="text-[#E7E5EA]">Page Builder</p> {/* Fixed typo */}
            <p className="text-[#E7E5EA]">Templates</p>
            <p className="text-[#E7E5EA]">Pricing</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Resources</h1>
            <p className="text-[#E7E5EA]">Unify App</p>
            <p className="text-[#E7E5EA]">Page Builder</p> {/* Fixed typo */}
            <p className="text-[#E7E5EA]">Templates</p>
            <p className="text-[#E7E5EA]">Pricing</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Support</h1>
            <p className="text-[#E7E5EA]">Unify App</p>
            <p className="text-[#E7E5EA]">Page Builder</p> {/* Fixed typo */}
            <p className="text-[#E7E5EA]">Templates</p>
            <p className="text-[#E7E5EA]">Pricing</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between bg-[#D9F203] px-36 py-2 text-[20px] items-center">
        {" "}
        {/* Removed -mx-36 */}
        <div className="bg-transparent text-[#637400]">&copy; 2024 Vriksh Software</div>
        <div className="bg-transparent flex gap-4">
          <FaFacebook className="bg-transparent" color="#97B100" size={20}  />
          <FaTwitter className="bg-transparent" color="#97B100" size={20}  />
          <FaYoutube className="bg-transparent" color="#97B100" size={20}  />
        </div>
      </div>
    </div>
  );
};

export default Footer;
