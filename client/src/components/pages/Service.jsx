import { FaArrowRightLong } from "react-icons/fa6";
import Card from "../Card";
import data  from "../../../public/data/data.js";


const Service = () => {
  return (
    <div className="w-full my-48 px-36 flex items-center ">
      <div className="w-[80%]">
        <h3 className="text-[#D9F203] font-neue tracking-wider text-xl">
          All you need
        </h3>
        <h2 className="mt-6 text-[#D9F203] font-neue tracking-wider text-5xl">
          Our service will make
          <br />
          Your product successful
        </h2>
        <h3 className="mt-6 text-white font-sen">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br/>eiusmod tempor incididunt.
        </h3>
        <button className="bg-[#D9F203] mt-12 px-6 py-4 flex items-center gap-4 text-center text-[#637400] font-neue">Services
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
