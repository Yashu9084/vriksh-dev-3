import React from "react";

const Footer = () => {
  return (
    <div className="my-24 px-36 flex gap-24 items-start">
      <div className="flex flex-col gap-">
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
          <p className="text-[#E7E5EA]">Page Buil</p>
          <p className="text-[#E7E5EA]">Templates</p>
          <p className="text-[#E7E5EA]">Pricing</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Resources</h1>
          <p className="text-[#E7E5EA]">Unify App</p>
          <p className="text-[#E7E5EA]">Page Buil</p>
          <p className="text-[#E7E5EA]">Templates</p>
          <p className="text-[#E7E5EA]">Pricing</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Support</h1>
          <p className="text-[#E7E5EA]">Unify App</p>
          <p className="text-[#E7E5EA]">Page Buil</p>
          <p className="text-[#E7E5EA]">Templates</p>
          <p className="text-[#E7E5EA]">Pricing</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
