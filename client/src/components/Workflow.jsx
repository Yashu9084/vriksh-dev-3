import React from "react";

const Workflow = () => {
  return (
    <div className="flex flex-col mb-[8vw] md:flex-row text-white px-[8vw] md:px-[5vw] gap-[4vw] md:gap-[10vw] scroll-smooth">
      <div className="flex-1 pt-[15vw] sticky top-0 h-screen z-10">
        <h2 className="text-[#D9F203] font-neue text-[3vw] md:text-[1.2vw] mb-[1vw] md:mb-[0.5vw]">
          Our Workflow
        </h2>
        <pre className="text-[8vw] md:text-[4vw] leading-[9vw] md:leading-[3.8vw] mb-2 text-[#D9F203] font-neue">
          This is how we approach
          <br />
          every single project
        </pre>
        <p className="text-[2.5vw] md:text-[1vw] mb-[4vw] text-[#CCCCCC]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste
          natus error sit voluptatem accusantium doloremque laudantium.
        </p>
      </div>
      <div className="flex-2 flex flex-col py-[1vw] md:py-[6vw] -z-8">
        <div className="relative flex items-start gap-[1vw] md:gap-[2vw] mb-5">
          <div className="w-[6vw] h-[6vw] md:w-12 md:h-12 bg-[#242222] p-[4.5vw] md:p-[1.5vw] rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue">Introduction</h3>
            <p className="text-[3vw] md:text-[0.9vw] text-[#CCCCCC] md:w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute top-[13vw] md:top-[3.6vw] -z-1 left-[4.2vw] md:left-[1.4vw] w-[0.1vw] md:w-[0.1vw] bg-[#D9F203] h-[28vw] md:h-[10vw]"></div>
        </div>
        {/* Repeat similar structure for other steps */}
        <div className="relative flex items-start gap-[1vw] md:gap-[2vw] mb-5">
          <div className="w-[6vw] h-[6vw] md:w-12 md:h-12 bg-[#242222] p-[4.5vw] md:p-[1.5vw] rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue">Strategy & Intake</h3>
            <p className="text-[3vw] md:text-[0.9vw] text-[#CCCCCC] md:w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute top-[13vw] md:top-[3.6vw] -z-1 left-[4.2vw] md:left-[1.4vw] w-[0.1vw] md:w-[0.1vw] bg-[#D9F203] h-[28vw] md:h-[10vw]"></div>
        </div>
        <div className="relative flex items-start gap-[1vw] md:gap-[2vw] mb-5">
          <div className="w-[6vw] h-[6vw] md:w-12 md:h-12 bg-[#242222] p-[4.5vw] md:p-[1.5vw] rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue">Meeting</h3>
            <p className="text-[3vw] md:text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute top-[13vw] md:top-[3.6vw] -z-1 left-[4.2vw] md:left-[1.4vw] w-[0.1vw] md:w-[0.1vw] bg-[#D9F203] h-[28vw] md:h-[10vw]"></div>
        </div>
        <div className="relative flex items-start gap-[1vw] md:gap-[2vw] mb-5">
          <div className="w-[6vw] h-[6vw] md:w-12 md:h-12 bg-[#242222] p-[4.5vw] md:p-[1.5vw] rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue">Goals and KPI</h3>
            <p className="text-[3vw] md:text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute top-[13vw] md:top-[3.6vw] -z-1 left-[4.2vw] md:left-[1.4vw] w-[0.1vw] md:w-[0.1vw] bg-[#D9F203] h-[28vw] md:h-[10vw]"></div>
        </div>
        <div className="relative flex items-start gap-[1vw] md:gap-[2vw] mb-5">
          <div className="w-[6vw] h-[6vw] md:w-12 md:h-12 bg-[#242222] p-[4.5vw] md:p-[1.5vw] rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue">Scope of work</h3>
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue"></h3>
            <p className="text-[3vw] md:text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute top-[13vw] md:top-[3.6vw] -z-1 left-[4.2vw] md:left-[1.4vw] w-[0.1vw] md:w-[0.1vw] bg-[#D9F203] h-[28vw] md:h-[10vw]"></div>
        </div>
        <div className="relative flex items-start gap-[1vw] md:gap-[2vw] mb-5">
          <div className="w-[6vw] h-[6vw] md:w-12 md:h-12 bg-[#242222] p-[4.5vw] md:p-[1.5vw] rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue">AD Types</h3>
            <p className="text-[3vw] md:text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute top-[13vw] md:top-[3.6vw] -z-1 left-[4.2vw] md:left-[1.4vw] w-[0.1vw] md:w-[0.1vw] bg-[#D9F203] h-[28vw] md:h-[10vw]"></div>
        </div>
        <div className="relative flex items-start gap-[1vw] md:gap-[2vw] mb-5">
          <div className="w-[6vw] h-[6vw] md:w-12 md:h-12 bg-[#242222] p-[4.5vw] md:p-[1.5vw] rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue">Budget Outline</h3>
            <p className="text-[3vw] md:text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute top-[13vw] md:top-[3.6vw] -z-1 left-[4.2vw] md:left-[1.4vw] w-[0.1vw] md:w-[0.1vw] bg-[#D9F203] h-[28vw] md:h-[10vw]"></div>
        </div>
        <div className="relative flex items-start gap-[1vw] md:gap-[2vw] mb-5">
          <div className="w-[6vw] h-[6vw] md:w-12 md:h-12 bg-[#242222] p-[4.5vw] md:p-[1.5vw] rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue">Introduction</h3>
            <p className="text-[3vw] md:text-[0.9vw] text-[#CCCCCC] md:w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute top-[13vw] md:top-[3.6vw] -z-1 left-[4.2vw] md:left-[1.4vw] w-[0.1vw] md:w-[0.1vw] bg-[#D9F203] h-[28vw] md:h-[10vw]"></div>
        </div>
        {/* Repeat similar structure for other steps */}
        <div className="relative flex items-start gap-[1vw] md:gap-[2vw] mb-5">
          <div className="w-[6vw] h-[6vw] md:w-12 md:h-12 bg-[#242222] p-[4.5vw] md:p-[1.5vw] rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue">Strategy & Intake</h3>
            <p className="text-[3vw] md:text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute top-[13vw] md:top-[3.6vw] -z-1 left-[4.2vw] md:left-[1.4vw] w-[0.1vw] md:w-[0.1vw] bg-[#D9F203] h-[28vw] md:h-[10vw]"></div>
        </div>
        <div className="relative flex items-start gap-[1vw] md:gap-[2vw] mb-5">
          <div className="w-[6vw] h-[6vw] md:w-12 md:h-12 bg-[#242222] p-[4.5vw] md:p-[1.5vw] rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue">Meeting</h3>
            <p className="text-[3vw] md:text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute top-[13vw] md:top-[3.6vw] -z-1 left-[4.2vw] md:left-[1.4vw] w-[0.1vw] md:w-[0.1vw] bg-[#D9F203] h-[28vw] md:h-[10vw]"></div>
        </div>
        <div className="relative flex items-start gap-[1vw] md:gap-[2vw] mb-5">
          <div className="w-[6vw] h-[6vw] md:w-12 md:h-12 bg-[#242222] p-[4.5vw] md:p-[1.5vw] rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue">Goals and KPI</h3>
            <p className="text-[3vw] md:text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute top-[13vw] md:top-[3.6vw] -z-1 left-[4.2vw] md:left-[1.4vw] w-[0.1vw] md:w-[0.1vw] bg-[#D9F203] h-[28vw] md:h-[10vw]"></div>
        </div>
        <div className="relative flex items-start gap-[1vw] md:gap-[2vw] mb-5">
          <div className="w-[6vw] h-[6vw] md:w-12 md:h-12 bg-[#242222] p-[4.5vw] md:p-[1.5vw] rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue">Scope of work</h3>
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue"></h3>
            <p className="text-[3vw] md:text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute top-[13vw] md:top-[3.6vw] -z-1 left-[4.2vw] md:left-[1.4vw] w-[0.1vw] md:w-[0.1vw] bg-[#D9F203] h-[28vw] md:h-[10vw]"></div>
        </div>
        <div className="relative flex items-start gap-[1vw] md:gap-[2vw] mb-5">
          <div className="w-[6vw] h-[6vw] md:w-12 md:h-12 bg-[#242222] p-[4.5vw] md:p-[1.5vw] rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue">AD Types</h3>
            <p className="text-[3vw] md:text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute top-[13vw] md:top-[3.6vw] -z-1 left-[4.2vw] md:left-[1.4vw] w-[0.1vw] md:w-[0.1vw] bg-[#D9F203] h-[28vw] md:h-[10vw]"></div>
        </div>
        <div className="relative flex items-start gap-[1vw] md:gap-[2vw] mb-5">
          <div className="w-[6vw] h-[6vw] md:w-12 md:h-12 bg-[#242222] p-[4.5vw] md:p-[1.5vw] rounded-full flex items-center justify-center text-2xl mr-5 md:mr-10 my-2"></div>
          <div className="my-2">
            <h3 className="text-[5vw] md:text-[2.5vw] mb-2 font-neue">Budget Outline</h3>
            <p className="text-[3vw] md:text-[0.9vw] text-[#CCCCCC] md:w-[75%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
