import faqs from "../../public/data/faq";
import FaqCard from "./FaqCard";
import { MdPhone } from "react-icons/md";
const Faq = () => {
  return (
    <div className="my-[14vw] md:my-[8vw] px-[8vw] md:px-[7vw] flex flex-col md:flex-row gap-[4vw]">
      <div className="flex flex-col font-manrope text-white md:w-[80%]">
        <h1 className="hidden md:block">FAQ&#8217;s</h1>
        <h1 className="text-[6vw] text-center md:text-left md:text-[4vw] text-[#D9F203] font-bold">
          Frequently asked question
        </h1>
        <div className="flex flex-col gap-[2vw] mt-[3vw]">
          {faqs?.map((faq, index) => {
            return <FaqCard ques={faq.ques} ans={faq.ans} key={index} />;
          })}
        </div>
      </div>
      <div className="flex flex-col mx-auto w-[80vw] h-[58vw] md:w-[24vw] md:h-[19vw] mt-[6vw] md:mt-[11vw] gap-[3vw] md:gap-[1.5vw] p-[6vw] md:p-[1.4vw] bg-[#242222] rounded-[6vw] md:rounded-[2vw]">
        <h1 className="text-white bg-transparent text-[4.5vw] md:text-[1.6vw]">You still have a questions</h1>
        <p className="text-[#9C9FA6] text-[3vw] md:text-[1vw] bg-transparent">
          dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor
          incididunt.
        </p>
        <div className="flex p-[2.5vw] md:p-[0.5vw] gap-[2vw] md:gap-[0.6vw] rounded-[4vw] md:rounded-[1vw] items-center">
        <MdPhone className="bg-[#D9F203] rounded-full size-[5vw] md:size-[1.4vw] p-[1vw] md:p-[0.2vw] text-white font-bold" />
        <p className="text-white">Phone: <span className="text-[#9C9FA6]">(+0) 123 456 789</span></p>
        </div>
        <div className="flex p-[2.5vw] md:p-[0.5vw] gap-[2vw] md:gap-[0.6vw] rounded-[4vw] md:rounded-[1vw] items-center">
        <MdPhone className="bg-[#D9F203] rounded-full size-[5vw] md:size-[1.4vw] p-[1vw] md:p-[0.2vw] text-white font-bold" />
        <p className="text-white">Email: <span className="text-[#9C9FA6]">info@domainname.com</span></p>
        </div>

      </div>
    </div>
  );
};

export default Faq;
