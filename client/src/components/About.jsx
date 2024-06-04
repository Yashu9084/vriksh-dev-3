import React from "react";
import about from "../assets/about.png";
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
const About = () => {
  return (
    <div className="my-16 md:my-24 px-6 sm:px-20 lg:px-36 flex flex-col  lg:flex-row lg:justify-between">
      <div >
        <div className="relative w-[91%] md:w-[96%]">
          <div className="w-[200px] h-[200px] md:w-[360px] md:h-[340px] lg:w-[519px] lg:h-[510px] border rounded-md border-[#D9F203]"></div>
          <div className="w-[200px] h-[200px] md:w-[360px] md:h-[340px] lg:w-[519px] lg:h-[520px] border rounded-md border-[#D9F203] absolute top-6 left-6 lg:top-10 bg-transparent"></div>
          <img
            // height={450}
            width={495}
            className="absolute top-7 left-6 lg:top-12 lg:left-6"
            src={about}
            alt=""
          />
        </div>
      </div>
      <div className="mt-12 ">
        <div className="flex flex-col gap-4">
          <h3 className="text-[#D9F203] font-neue tracking-wider text-lg">
            CREATIVE APPROACH
          </h3>
          <pre className="text-[#D9F203] font-neue tracking-wider text-3xl sm:text-5xl md:text-6xl lg:text-5xl">
            We are the Digital, Ready for<br/>crazy ideas and experiments
          </pre>
          <pre className="text-white font-sen text-sm sm:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptatem
            accusantium doloremque laudantium,<br/>totam rem aperiam.
          </pre>
        </div>
          <button className="mt-4 bg-[#D9F203] px-4 py-2 flex items-center gap-4 text-center text-[#637400] font-neue">About Us
          <FaArrowRightLong size={20} className="bg-transparent text-[#637400]"/>
          </button>
      </div>  
    </div>
  );
};

export default About;
