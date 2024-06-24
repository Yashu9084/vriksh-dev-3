import React from "react";
import about from "../assets/about.png";
const Founders = () => {
  return (
    <div className="mb-[14vw] md:mb-[8vw] md:mt-[4vw] px-[8vw] md:px-[5vw] md:gap-[4vw] flex font-lato text-white items-center">
      <img className="size-[40vw]" src={about} alt="" />
      <div className="flex flex-col gap-[4vw]">
        <h1 className="text-[3vw]">About the Founders</h1>
        <p className="text-[#7B7B7B] text-[1vw]">
          This is the second workshop of the Ux design methodology.Givenall
          theconclusionsdrawn in the personae workshop, we will project
          ourselves towards the production of ideal user journeys. In other
          words: how each persona can achieve their goal. we will pr This is the
          second workshop of the Ux design methodology.Given
          <br />
          <br />
          all the conclusions drawn in the personae workshop, we will project
          ourselves towards the production of ideal user journeys. In other
          words: how each persona can achieve their goal. we will project
          ourselves towards the production of ideal user journeys.oject
          ourselves towards the production of ideal user journeys.
        </p>
        <button className="bg-[#D9F203] p-[2vw] rounded-full w-[8vw] h-[8vw] text-black text-[1.4vw] font-neue flex items-center justify-center">
          Get free quote
        </button>
      </div>
    </div>
  );
};

export default Founders;
