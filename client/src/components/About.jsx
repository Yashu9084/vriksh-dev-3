import React from "react";
import about from "../assets/about.png";
import { FaArrowRightLong } from "react-icons/fa6";
const About = () => {
  return (
    <div className="w-[100%] my-[8vw] px-[5vw] flex flex-col lg:flex-row lg:items-center gap-[8vw]">
      <div>
        {/* <div className="w-[200px] h-[200px] md:w-[360px] md:h-[340px] lg:w-[519px] lg:h-[510px] xl:w-[659px] xl:h-[622px] border rounded-md border-[#D9F203]"></div>
          <div className="w-[200px] h-[200px] md:w-[360px] md:h-[340px] lg:w-[519px] lg:h-[520px] xl:w-[659px] xl:h-[656px] border rounded-md border-[#D9F203] absolute top-6 left-6 lg:top-10 bg-transparent"></div> */}
        <img className="w-[80vw]" src={about} alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-[#D9F203] font-neue tracking-wider text-[1.2vw]">
          CREATIVE APPROACH
        </h3>
        <div className="text-[#D9F203] font-neue tracking-wider text-[3.5vw] leading-[3.5vw]">
          WE ARE THE GO-GETTERS READY TO CRAZILY IDEATE AND EXPERIMENT
        </div>
        <div className="text-white font-sen text-[1.2vw]">
          Sed ut perspiciatis unde omnis iste natus error sit
          <br />
          voluptatem accusantium doloremque laudantium,
          <br />
          totam rem aperiam.
        </div>
        <div>
          <button className="mt-[1.2vw] bg-[#D9F203] px-[1.5vw] py-[1vw] text-[1.5vw] flex items-center gap-4 text-[#637400] font-neue">
            About Us
            <FaArrowRightLong
              className="bg-transparent text-[#637400] text-[1.5vw]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
