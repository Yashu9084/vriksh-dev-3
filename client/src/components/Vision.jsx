import React, { useState } from "react";
import innovation from "../assets/innovation.png";
import quality from "../assets/quality.png";
import money from "../assets/money.png";
const Vision = () => {
  const [color, setColor] = useState(true);
  const clickHandler = () => {
    setColor(false);
  };
  const style1 = "text-[#D9F203] underline";
  const style2 = "text-[#858585]";
  return (
    <div className="mb-[14vw] md:mb-[8vw] md:mt-[4vw] px-[8vw] py-[8vw] md:py-[5vw] md:px-[8vw] gap-[6vw] md:gap-[4vw] flex flex-col font-manrope text-white bg-[#242222]">
      <div className="flex flex-col bg-transparent">
        <h1 className="text-[#D9F203] bg-transparent text-[3vw] md:text-[1.5vw]">
          Why Choose Us?
        </h1>
        <h1 className="text-[6vw] md:text-[3.5vw] text-[#858585] bg-transparent font-semibold">
          <span
            onClick={() => setColor(true)}
            className={`${
              color ? style1 : style2
            } mr-[1vw] bg-transparent cursor-pointer transition-all duration-300`}
          >
            VISION
          </span>
          <span
            onClick={clickHandler}
            className={`${
              color ? style2 : style1
            } bg-transparent cursor-pointer transition-all duration-300`}
          >
            MISSION
          </span>
        </h1>
      </div>
      {color ? (
        <div className="flex bg-transparent -mr-[8vw] md:mr-0 overflow-x-auto whitespace-nowrap  md:overflow-hidden md:whitespace-normal">
          <div className="flex flex-shrink-0 md:flex-none flex-col bg-black text-white gap-[3vw] md:gap-[1.6vw] w-[60vw] h-[40vw] md:w-[26vw] md:h-[20vw] p-[5vw] md:p-[2vw] rounded-[2.8vw] overflow-hidden md:overflow-auto cursor-pointer hover:scale-105 transition-all duration-300 m-[1vw]">
            <img
              className="size-[8vw] md:size-[3.6vw]"
              src={innovation}
              alt=""
            />
            <h1 className="text-[4vw] md:text-[1.7vw] font-semibold">
              CUSTOM-BUILT PROJECTS
            </h1>
            <p className=" whitespace-normal text-[2.5vw] md:text-[1vw]">
              Providing scalable options to establish digital presence  
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col bg-black text-white gap-[3vw] md:gap-[1.6vw] w-[60vw] h-[40vw] md:w-[26vw] md:h-[20vw] p-[5vw] md:p-[2vw] rounded-[2.8vw] overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 m-[1vw]">
            <img className="size-[8vw] md:size-[3.6vw]" src={quality} alt="" />
            <h1 className="text-[4vw] md:text-[1.7vw] font-semibold">
              END-TO-END SOLUTIONS
            </h1>
            <p className="whitespace-normal text-[2.5vw] md:text-[1vw]">
              Undergoing brainstorming to execution to reduce workload
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col bg-black text-white gap-[3vw] md:gap-[1.6vw] w-[60vw] h-[40vw] md:w-[26vw] md:h-[20vw] p-[5vw] md:p-[2vw] rounded-[2.8vw] overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 m-[1vw]">
            <img className="size-[8vw] md:size-[3.6vw]" src={money} alt="" />
            <h1 className="text-[4vw] md:text-[1.7vw] font-semibold">
              VALUE FOR RUPEE
            </h1>
            <p className="whitespace-normal text-[2.5vw] md:text-[1vw]">
              Get credible, high-quality solutions at affordable prices
            </p>
          </div>
        </div>
      ) : (
        <div className="flex bg-transparent -mr-[8vw] md:mr-0 overflow-x-auto whitespace-nowrap  md:overflow-hidden md:whitespace-normal">
          <div className="flex flex-shrink-0 md:flex-none flex-col bg-black text-white gap-[3vw] md:gap-[1.6vw] w-[60vw] h-[40vw] md:w-[26vw] md:h-[20vw] p-[5vw] md:p-[2vw] rounded-[2.8vw] overflow-hidden md:overflow-auto cursor-pointer hover:scale-105 transition-all duration-300 m-[1vw]">
            <img
              className="size-[8vw] md:size-[3.6vw]"
              src={innovation}
              alt=""
            />
            <h1 className="text-[4vw] md:text-[1.7vw] font-semibold">
              INNOVATIVE
            </h1>
            <p className=" whitespace-normal text-[2.5vw] md:text-[1vw]">
            Combining technical skill with creativity
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col bg-black text-white gap-[3vw] md:gap-[1.6vw] w-[60vw] h-[40vw] md:w-[26vw] md:h-[20vw] p-[5vw] md:p-[2vw] rounded-[2.8vw] overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 m-[1vw]">
            <img className="size-[8vw] md:size-[3.6vw]" src={quality} alt="" />
            <h1 className="text-[4vw] md:text-[1.7vw] font-semibold">
              CONSUMER CONNECT
            </h1>
            <p className="whitespace-normal text-[2.5vw] md:text-[1vw]">
              Build strong/secure/well-built relations with target audience
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col bg-black text-white gap-[3vw] md:gap-[1.6vw] w-[60vw] h-[40vw] md:w-[26vw] md:h-[20vw] p-[5vw] md:p-[2vw] rounded-[2.8vw] overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 m-[1vw]">
            <img className="size-[8vw] md:size-[3.6vw]" src={money} alt="" />
            <h1 className="text-[4vw] md:text-[1.7vw] font-semibold">
              ACCESSIBLE
            </h1>
            <p className="whitespace-normal text-[2.5vw] md:text-[1vw]">
              Flexible options for small businesses
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vision;
