import faqs from "../../public/data/faq";
import FaqCard from "./FaqCard";
import { MdPhone } from "react-icons/md";
const Faq = () => {
  return (
    <div className="my-[14vw] md:my-[8vw] px-[8vw] md:px-[7vw] flex gap-[4vw]">
      <div className="flex flex-col font-manrope text-white w-[80%]">
        <h1>FAQ&#8217;s</h1>
        <h1 className="text-[4vw] text-[#D9F203] font-bold">
          Frequently asked question
        </h1>
        <div className="flex flex-col gap-[2vw] mt-[3vw]">
          {faqs?.map((faq, index) => {
            return <FaqCard ques={faq.ques} ans={faq.ans} key={index} />;
          })}
        </div>
      </div>
      <div className="flex flex-col w-[24vw] h-[19vw] mt-[11vw] gap-[1.5vw] p-[1.4vw] bg-[#242222] rounded-[2vw]">
        <h1 className="text-white bg-transparent text-[1.6vw]">You still have a questions</h1>
        <p className="text-[#9C9FA6] bg-transparent">
          dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor
          incididunt.
        </p>
        <div className="flex p-[0.5vw] gap-[0.6vw] rounded-[1vw] items-center">
        <MdPhone className="bg-[#D9F203] rounded-full size-[1.4vw] p-[0.2vw] text-white font-bold" />
        <p className="text-white">Phone: <span className="text-[#9C9FA6]">(+0) 123 456 789</span></p>
        </div>
        <div className="flex p-[0.5vw] gap-[0.6vw] rounded-[1vw] items-center">
        <MdPhone className="bg-[#D9F203] rounded-full size-[1.4vw] p-[0.2vw] text-white font-bold" />
        <p className="text-white">Email: <span className="text-[#9C9FA6]">info@domainname.com</span></p>
        </div>

      </div>
    </div>
  );
};

export default Faq;
