import { FaArrowRightLong } from "react-icons/fa6";
import Card from "../Card";
import data  from "../../../public/data/data.js";


const Service = () => {
  return (
    <div className="my-24 px-6 sm:px-20 md:px-36 flex flex-col md:flex-row md:items-center ">
      <div className="w-[100%]">
        <pre className="text-[#D9F203] text-lg font-neue tracking-wider sm:text-xl">
          Contact Us
        </pre>
        <pre className="mt-4 md:mt-6 text-[#D9F203] font-neue tracking-wider text-3xl sm:text-[45px] leading-none">
          Our service will make
          <br />
          Your product successful
        </pre>
        <pre className="mt-4 md:mt-6 text-white font-sen text-[10px] md:text-sm">
        Adipiscing elit, sed do eiusmod tempor incididunt ut labore et<br/>dolore magna aliqua. Ut enim ad minim.
        </pre>
        <button className="bg-[#D9F203] mt-6 md:mt-12 px-4 md:px-6 py-2 md:py-4 flex items-center gap-4 text-center text-[#637400] font-neue">Services
          <FaArrowRightLong size={20} className="bg-transparent text-[#637400]"/>
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
