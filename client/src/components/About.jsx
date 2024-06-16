import React from "react";
import about from "../assets/about.png";
import { FaArrowRightLong } from "react-icons/fa6";
const About = () => {
  return (
    <div
      id="about"
      className="w-[100%] mb-[25vw] md:my-[8vw] px-[8vw] md:px-[5vw] flex flex-col lg:flex-row lg:items-center gap-[8vw]"
    >
      <div>
        {/* <div className="w-[200px] h-[200px] md:w-[360px] md:h-[340px] lg:w-[519px] lg:h-[510px] xl:w-[659px] xl:h-[622px] border rounded-md border-[#D9F203]"></div>
          <div className="w-[200px] h-[200px] md:w-[360px] md:h-[340px] lg:w-[519px] lg:h-[520px] xl:w-[659px] xl:h-[656px] border rounded-md border-[#D9F203] absolute top-6 left-6 lg:top-10 bg-transparent"></div> */}
        <img className="md:w-[80vw] object-contain" src={about} alt="" />
      </div>
      <div className="flex flex-col gap-[2.2vw] md:gap-[1.5vw]">
        <h3 className="text-[#D9F203] font-neue tracking-wider text-[2.8vw] md:text-[1.2vw]">
          CREATIVE APPROACH
        </h3>
        <pre className="text-[#D9F203] font-neue tracking-wider text-[7vw] leading-[9vw] md:text-[3.5vw] md:leading-[3.5vw]">
          WE ARE THE DIGITAL PROBLEM-<br/>
          SOLVERS PROVIDING OUT-OF-THE<br/>
          BOX SOLUTIONS
        </pre>
        <div className="text-white font-sen text-[3vw] md:text-[1.2vw]">
          Vriksh is a digital agency, which serves as an one-stop<br/> platform
          to build up your brand’s web presence
          <br />
          and enhance user engagement.
        </div>
        <div>
          <button className="mt-[1.2vw] bg-[#D9F203] px-[2.5vw] md:px-[1.5vw] py-[2vw] md:py-[1vw] text-[2.8vw] md:text-[1.5vw] flex items-center gap-[2vw] text-[#637400] font-neue transition-transform duration-300 ease-in-out hover:scale-110 rounded-md group">
            About Us
            <FaArrowRightLong className="bg-transparent text-[#637400] text-[2.8vw] md:text-[1.5vw] transition-transform duration-300 ease-in-out group-hover:scale-x-150" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
