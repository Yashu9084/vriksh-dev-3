import React from "react";
import about from "../assets/about.png";
import { FaArrowRightLong } from "react-icons/fa6";
const About = () => {
  return (
    <div className="w-[100%] my-[8vw] px-[8vw] md:px-[5vw] flex flex-col lg:flex-row lg:items-center gap-[8vw]">
      <div>
        {/* <div className="w-[200px] h-[200px] md:w-[360px] md:h-[340px] lg:w-[519px] lg:h-[510px] xl:w-[659px] xl:h-[622px] border rounded-md border-[#D9F203]"></div>
          <div className="w-[200px] h-[200px] md:w-[360px] md:h-[340px] lg:w-[519px] lg:h-[520px] xl:w-[659px] xl:h-[656px] border rounded-md border-[#D9F203] absolute top-6 left-6 lg:top-10 bg-transparent"></div> */}
        <img className="md:w-[80vw] object-contain" src={about} alt="" />
      </div>
      <div className="flex flex-col gap-[2.2vw] md:gap-[1.5vw]">
        <h3 className="text-[#D9F203] font-neue tracking-wider text-[2.8vw] md:text-[1.2vw]">
          CREATIVE APPROACH
        </h3>
        <div className="text-[#D9F203] font-neue tracking-wider text-[7vw] leading-[9vw] md:text-[3.5vw] md:leading-[3.5vw]">
          WE ARE THE GO-GETTERS READY TO CRAZILY IDEATE AND EXPERIMENTs
        </div>
        <div className="text-white font-sen text-[3vw] md:text-[1.2vw]">
          Sed ut perspiciatis unde omnis iste natus error sit
          <br />
          voluptatem accusantium doloremque laudantium,
          <br />
          totam rem aperiam.
        </div>
        <div>
          <button className="mt-[1.2vw] bg-[#D9F203] px-[2.5vw] md:px-[1.5vw] py-[2vw] md:py-[1vw] text-[2.8vw] md:text-[1.5vw] flex items-center gap-[2vw] text-[#637400] font-neue">
            About Us
            <FaArrowRightLong
              className="bg-transparent text-[#637400] text-[2.8vw] md:text-[1.5vw]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
