import mouse from "../assets/mouse.png";
import video from "../assets/video.gif"
import React, { useEffect, useRef } from 'react';
const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div className="flex">
      <img src={video} alt="" className=" bg-[#010103] -ml-[24vw] md:-ml-[16vw] mt-[4vw] w-[40vw] md:w-[30vw] rotate-[30deg]"/>
      <div className="bg-[#010103] pt-[5vw] w-full z-20">
        <div className="w-full pl-[3vw] text-[8vw] leading-[9vw]">
          <h1 className="font-neue text-white ">
            Vriksh <span className="text-[#D9F203]">Your guide</span>
          </h1>
          <div className="pl-[18.5vw] font-neue text-white">to thrive in the</div>
          <div className="pl-[5vw] font-neue text-[#D9F203]">
            Digital Landscape
          </div>
        </div>
        <div className="flex mt-[2vw] bg-transparent">
          <img
            className="cursor-pointer mx-auto w-[5vw] md:w-[4vw]"
            color="white"
            // width={50}
            // height={50}
            src={mouse}
            alt=""
          />
        </div>
      </div>
      <img src={video} alt="" className="-mr-[11vw] mt-[vw] w-[30vw] -rotate-[deg]"/>
    </div>
  );
};

export default Hero;
