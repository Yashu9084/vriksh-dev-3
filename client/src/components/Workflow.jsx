import React from "react";

const Workflow = () => {
  return (
    <div className="flex h-screen bg-black text-white overflow-hidden mb-[8vw]">
      <div className="flex-1 sticky top-0 h-screen px-[5vw] mt-[10vw]">
        <h2 className="text-[#D9F203] font-neue text-[1.2vw] mb-[0.5vw]">Our Workflow</h2>
        <pre className="text-[4vw] leading-[3.8vw] mb-2 text-[#D9F203] font-neue">
          This is how we approach<br />every single project
        </pre>
        <p className="text-[1vw] text-[#CCCCCC]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
      </div>
      <div className="flex-2 flex flex-col py-5 overflow-y-auto h-screen px-[5vw]">
        <div className="relative flex items-start gap-[2vw] mb-5">
          <div className="w-12 h-12 bg-[#242222] p-2 rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[2.5vw] mb-2 font-neue">Introduction</h3>
            <p className="text-[0.9vw] text-[#CCCCCC] md:w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute top-16 -z-1 left-6 w-[1px] bg-[#D9F203] h-28 md:h-24"></div>
        </div>
        {/* Repeat similar structure for other steps */}
        <div className="relative flex items-start gap-[2vw] mb-5">
          <div className="w-12 h-12 bg-[#242222] p-2 rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[2.5vw] mb-2 font-neue">Strategy & Intake</h3>
            <p className="text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute top-16 -z-1 left-6 w-[1px] bg-[#D9F203] h-28 md:h-24"></div>
        </div>
        <div className="relative flex items-start gap-[2vw] mb-5">
          <div className="w-12 h-12 bg-[#242222] p-2 rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[2.5vw] mb-2 font-neue">Meeting</h3>
            <p className="text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute top-16 -z-1 left-6 w-[1px] bg-[#D9F203] h-28 md:h-24"></div>
        </div>
        <div className="relative flex items-start gap-[2vw] mb-5">
          <div className="w-12 h-12 bg-[#242222] p-2 rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[2.5vw] mb-2 font-neue">Goals and KPI</h3>
            <p className="text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute top-16 -z-1 left-6 w-[1px] bg-[#D9F203] h-28 md:h-24"></div>
        </div>
        <div className="relative flex items-start gap-[2vw] mb-5">
          <div className="w-12 h-12 bg-[#242222] p-2 rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[2.5vw] mb-2 font-neue">Scope of work</h3>
            <h3 className="text-[2.5vw] mb-2 font-neue"></h3>
            <p className="text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute top-16 -z-1 left-6 w-[1px] bg-[#D9F203] h-28 md:h-24"></div>
        </div>
        <div className="relative flex items-start gap-[2vw] mb-5">
          <div className="w-12 h-12 bg-[#242222] p-2 rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[2.5vw] mb-2 font-neue">AD Types</h3>
            <p className="text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute top-16 -z-1 left-6 w-[1px] bg-[#D9F203] h-28 md:h-24"></div>
        </div>
        <div className="relative flex items-start gap-[2vw] mb-5">
          <div className="w-12 h-12 bg-[#242222] p-2 rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[2.5vw] mb-2 font-neue">Budget Outline</h3>
            <p className="text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
