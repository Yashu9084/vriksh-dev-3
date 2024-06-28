import React, { useState, useEffect, useRef } from "react";
import quoteData from "../../public/data/quoteData";

const Quote = () => {
  const [imgId, setImgId] = useState(0);
  const titleRefs = useRef([]);

  const selectedQuote = quoteData.find((data) => data.id === imgId);
  const imageUrl = selectedQuote ? selectedQuote.image : "";
  const title = selectedQuote ? selectedQuote.title : "";
  const desc = selectedQuote ? selectedQuote.description : "";
  const tags = selectedQuote ? selectedQuote.tags : "";

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -60% 0px", // Trigger when the top is at the top of the viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newImgId = parseInt(entry.target.getAttribute("data-id"));
          setImgId(newImgId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    titleRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (titleRefs.current) {
        titleRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <div className="px-[8vw] md:px-[7vw] flex gap-[4vw] md:flex-row font-lato scroll-smooth">
      <div className="flex flex-col pt-[8vw] gap-[2.5vw] text-[1.8vw] text-[#7C7C7C] w-[30%] cursor-pointer overflow-y-auto -z-8">
        {quoteData.map((data, index) => (
          <div
            onClick={() => setImgId(data.id)}
            ref={(el) => (titleRefs.current[index] = el)}
            data-id={data.id}
            className={`text-${imgId === data.id ? "white" : "[#7D7D7D]"}`}
            key={data.id}
          >
            {data.title}
          </div>
        ))}
      </div>
      <div className={`pt-[4vw] sticky top-0 h-[screen] z-10`}>
        <img className="w-[35vw] h-[45vw] object-cover" src={imageUrl} alt="" />
      </div>
      <div className={`flex flex-col text-white w-[50%] gap-[3vw] pt-[8vw] sticky top-0 h-[screen]`}>
        <h1 className="text-[#F1F1F1] text-[3vw] leading-[3vw]">{title}</h1>
        <p className="w-[100%] leading-[1.5vw] text-[#7B7B7B]">{desc}</p>
        <div className="grid grid-cols-2 gap-[0.6vw]">
          {tags?.map((tag, index) => (
            <div key={index} className="flex gap-[0.6vw]">
              <div>+</div>
              <div>{tag}</div>
            </div>
          ))}
        </div>
        <button className="bg-[#D9F203] p-[2vw] rounded-full w-[8vw] h-[8vw] text-black text-[1.4vw] font-neue flex items-center justify-center">
          Get free quote
        </button>
      </div>
    </div>
  );
};

export default Quote;
