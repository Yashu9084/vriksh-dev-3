import { FaArrowRightLong } from "react-icons/fa6";
import Card from "../Card";
import data  from "../../../public/data/data.js";


const Service = () => {
  return (
    <div className="my-[8vw] px-[5vw] flex flex-col md:flex-row md:items-center ">
      <div className="w-[100%]">
        <h1 className="text-[#D9F203] font-neue text-[1.5vw]">
          Contact Us
        </h1>
        <h2 className="mt-4 md:mt-6 text-[#D9F203] font-neue tracking-wider text-[4vw] leading-none">
          Our service will make
          <br />
          Your product successful
        </h2>
        <h1 className="mt-4 md:mt-6 text-white font-sen text-[1vw]">
        Adipiscing elit, sed do eiusmod tempor incididunt ut labore et<br/>dolore magna aliqua. Ut enim ad minim.
        </h1>
        <button className="bg-[#D9F203] mt-6 md:mt-12 px-4 md:px-6 py-2 md:py-4 text-[1.8vw] flex items-center gap-[1.2vw] text-center text-[#637400] font-neue">Services
          <FaArrowRightLong  className="bg-transparent text-[1.5vw] text-[#637400]"/>
          </button>
      </div>
      <div className="flex flex-wrap">
        {
          data?.map((set,index)=>(
            <Card key={index} icon={set.icon} title={set.title} desc={set.description} index={index}/>
          ))
        }
      </div>
    </div>
  );
};

export default Service;
