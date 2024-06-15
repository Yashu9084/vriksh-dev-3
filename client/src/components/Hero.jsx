import mouse from "../assets/mouse.png";
import video from "../assets/video.gif";
import React, { useEffect, useRef } from "react";
const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div id="hero" className="flex mb-[14vw] md:mb-0">
      <img
        src={video}
        alt=""
        className=" bg-[#010103] -ml-[24vw] md:-ml-[18vw]  mt-[8vw] w-[40vw] md:w-[30vw] -rotate-[40.41deg] object-contain"
      />
      <div className="bg-[#010103] pt-[5vw] w-full z-20">
        <div className="w-full pl-[3vw] text-[8vw] leading-[9vw]">
          <h1 className="font-neue text-white ">
            Vriksh <span className="text-[#D9F203]">Your guide</span>
          </h1>
          <div className="pl-[18.5vw] font-neue text-white">
            to thrive in the
          </div>
          <div className="pl-[5vw] font-neue text-[#D9F203]">
            Digital Landscape
          </div>
        </div>
        <div className="flex mt-[2vw] bg-transparent">
        <a className="cursor-pointer mx-auto" href="#about">
          <img
            className="w-[5vw] md:w-[4vw] "
            color="white"
            // width={50}
            // height={50}
            src={mouse}
            alt=""
          />
        </a>
        </div>
      </div>
      <img
        src={video}
        alt=""
        className="-mr-[20vw] md:-mr-[12vw] -mt-[5vw] w-[40vw] md:w-[30vw] -rotate-[78.24deg] object-contain"
      />
    </div>
  );
};

export default Hero;
