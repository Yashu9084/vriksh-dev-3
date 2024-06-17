import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const FaqCard = ({ ques, ans }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-[52vw] mb-[1vw]">
      <div
        onClick={toggleOpen}
        className={`${
          isOpen ? "bg-[#97B100]" : "bg-[#242222]"
        } transition-colors duration-500 flex justify-between items-center p-[0.8vw] text-white rounded-[0.6vw] cursor-pointer`}
      >
        <h1 className="bg-transparent text-[1.05vw]">{ques}</h1>
        {isOpen ? (
          <IoIosArrowUp className="bg-transparent size-[1.6vw] text-[#D9F203]" />
        ) : (
          <IoIosArrowDown className="bg-transparent size-[1.6vw] text-[#D9F203]" />
        )}
      </div>
      {isOpen && (
        <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: isOpen ? "200px" : "0" }}
        >
          <p className="p-[0.8vw] text-[#9C9FA6] rounded-b-[0.6vw] text-[0.9vw] leading-[1.3vw]">
            {ans}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqCard;
