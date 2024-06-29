import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const FaqCard = ({ ques, ans }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className="md:w-[52vw] mb-[1vw]">
      <div
        onClick={toggleOpen}
        className={`${
          isOpen ? "bg-[#97B100]" : "bg-[#242222]"
        } transition-colors duration-500 ease-in-out flex justify-between items-center p-[3vw] md:p-[0.8vw] text-white rounded-[4vw] md:rounded-[0.6vw] cursor-pointer`}
      >
        <h1 className="bg-transparent text-[3.5vw] md:text-[1.35vw]">{ques}</h1>
        {isOpen ? (
          <IoIosArrowUp className="bg-transparent size-[6vw] md:size-[1.6vw] text-[#D9F203]" />
        ) : (
          <IoIosArrowDown className="bg-transparent size-[6vw] md:size-[1.6vw] text-[#D9F203]" />
        )}
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] ease-linear duration-300"
        style={{ maxHeight: height }}
      >
        <p className="p-[2vw] md:p-[0.8vw] text-[#9C9FA6] rounded-b-[4vw] md:rounded-b-[0.6vw] text-[3.5vw] leading-[5vw] md:text-[0.9vw] md:leading-[1.3vw]">
          {ans}
        </p>
      </div>
    </div>
  );
};

export default FaqCard;
