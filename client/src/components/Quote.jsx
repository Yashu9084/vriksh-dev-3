import React, { useState } from "react";
import quoteData from "../../public/data/quoteData";
const Quote = () => {
  const [imgId, setImgId] = useState(0);
  const selectedQuote = quoteData.find((data) => data.id === imgId);
  const imageUrl = selectedQuote ? selectedQuote.image : "";
  const title = selectedQuote ? selectedQuote.title : "";
  const desc = selectedQuote ? selectedQuote.description : "";
  const tags = selectedQuote ? selectedQuote.tags : "";
  const handleClick = (id) => {
    setImgId(id);
  };
  return (
    <div className="my-[14vw] md:my-[8vw] px-[8vw] md:px-[7vw] flex flex-col gap-[4vw] md:flex-row md:items-center font-lato">
      <div className="flex flex-col gap-[2.5vw] text-[1.8vw]  text-[#7C7C7C] w-[30%] cursor-pointer">
        {quoteData?.map((data) => {
          return (
            <div
              className={`text-${imgId === data.id ? "white" : "[#7D7D7D]"}`}
              onClick={() => handleClick(data.id)}
              key={data.id}
            >
              {data.title}
            </div>
          );
        })}
      </div>
      <div>
        <img className="w-[35vw] h-[40vw] object-cover" src={imageUrl} alt="" />
      </div>
      <div className="flex flex-col text-white w-[50%] gap-[3vw] -mt-[3vw]">
        <h1 className={`text-[#F1F1F1] text-[3vw] leading-[3vw]`}>{title}</h1>
        <p className="w-[100%] leading-[1.5vw] text-[#7B7B7B]">{desc}</p>
        <div className="grid grid-cols-2 gap-[0.6vw]">
          {tags?.map((tag, index) => {
            return (
              <div key={index} className="flex gap-[0.6vw]">
                <div>+</div>
                <div>{tag}</div>
              </div>
            );
          })}
        </div>
        <button className="bg-[#D9F203] p-[2vw] rounded-full w-[8vw] h-[8vw] text-black text-[1.4vw] font-neue flex items-center justify-center">
          Get free quote
        </button>
      </div>
    </div>
  );
};

export default Quote;
