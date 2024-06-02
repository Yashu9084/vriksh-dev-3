import React from "react";
import about from "../assets/about.png";
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
const About = () => {
  return (
    <div className="my-24 px-36 flex">
      <div>
        <div className="relative">
          <div className="w-[529px] h-[511px] border rounded-md border-[#D9F203]"></div>
          <div className="w-[529px] h-[511px] border rounded-md border-[#D9F203] absolute top-12 left-12 bg-transparent"></div>
          <img
            height={480}
            width={480}
            className="absolute top-16 left-12"
            src={about}
            alt=""
          />
        </div>
      </div>
      <div className="mt-24 pl-24">
        <div>
          <h3 className="text-[#D9F203] font-neue tracking-wider text-xl">
            CREATIVE APPROACH
          </h3>
          <h2 className="mt-12 text-[#D9F203] font-neue tracking-wider text-5xl">
            We are the Digital, Ready for crazy ideas and experiments
          </h2>
          <h3 className="mt-6 text-white font-sen">
            Sed ut perspiciatis unde omnis iste natus error sit<br/> voluptatem
            accusantium doloremque laudantium,<br/> totam rem aperiam.
          </h3>
          <button className="bg-[#D9F203] mt-16 px-6 py-4 flex items-center gap-4 text-center text-[#637400] font-neue">About Us
          <FaArrowRightLong size={20} className="bg-transparent text-[#637400]"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
