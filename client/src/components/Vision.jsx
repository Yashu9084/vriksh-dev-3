import React from "react";
import innovation from "../assets/innovation.png";
import quality from "../assets/quality.png";
import money from "../assets/money.png";
const Vision = () => {
  return (
    <div className="mb-[14vw] md:mb-[8vw] md:mt-[4vw] px-[8vw] py-[8vw] md:py-[5vw] md:px-[8vw] gap-[6vw] md:gap-[4vw] flex flex-col font-manrope text-white bg-[#242222]">
      <div className="flex flex-col bg-transparent">
        <h1 className="text-[#D9F203] bg-transparent text-[3vw] md:text-[1.5vw]">Why Choose Us?</h1>
        <h1 className="text-[6vw] md:text-[3.5vw] text-[#858585] bg-transparent font-semibold">
          <span className="text-[#D9F203] underline mr-[1vw] bg-transparent">
            VISION
          </span>
          MISSION
        </h1>
      </div>
      <div className="flex bg-transparent gap-[3vw] -mr-[8vw] md:mr-0 overflow-x-auto whitespace-nowrap  md:overflow-hidden md:whitespace-normal">
        <div className="flex flex-shrink-0 md:flex-none flex-col bg-black text-white gap-[3vw] md:gap-[1.6vw] w-[60vw] h-[40vw] md:w-[26vw] md:h-[20vw] p-[5vw] md:p-[2vw] rounded-[2.8vw] overflow-hidden md:overflow-auto">
          <img className="size-[8vw] md:size-[3.6vw]" src={innovation} alt="" />
          <h1 className="text-[4vw] md:text-[1.7vw] font-semibold">Innovation</h1>
          <p className=" whitespace-normal text-[2.5vw] md:text-[1vw]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-col bg-black text-white gap-[3vw] md:gap-[1.6vw] w-[60vw] h-[40vw] md:w-[26vw] md:h-[20vw] p-[5vw] md:p-[2vw] rounded-[2.8vw] overflow-hidden">
          <img className="size-[8vw] md:size-[3.6vw]" src={quality} alt="" />
          <h1 className="text-[4vw] md:text-[1.7vw] font-semibold">Quality-Focused</h1>
          <p className="whitespace-normal text-[2.5vw] md:text-[1vw]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-col bg-black text-white gap-[3vw] md:gap-[1.6vw] w-[60vw] h-[40vw] md:w-[26vw] md:h-[20vw] p-[5vw] md:p-[2vw] rounded-[2.8vw] overflow-hidden">
          <img className="size-[8vw] md:size-[3.6vw]" src={money} alt="" />
          <h1 className="text-[4vw] md:text-[1.7vw] font-semibold">Value For Money</h1>
          <p className="whitespace-normal text-[2.5vw] md:text-[1vw]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
