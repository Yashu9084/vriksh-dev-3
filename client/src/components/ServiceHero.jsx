import React, { useState } from "react";
import I4 from "../assets/I4.png";
import I3 from "../assets/I3.png";
const ServiceHero = () => {
    const [expandedImage, setExpandedImage] = useState(0);

    const handleMouseEnter = (index) => {
      setExpandedImage(index);
    };
  return (
    <div className="mb-[14vw] md:mb-[8vw] md:mt-[4vw] px-[8vw] md:px-[5vw] md:gap-[4vw] flex flex-col font-neue">
      <div className="flex flex-col md:flex-row gap-[4vw] md:gap-[15.6vw] md:items-end">
        <div className="flex flex-col gap-[2vw]">
          <h1 className="text-[#97B100] md:text-[2vw]">Lorem ipsum dolor</h1>
          <h1 className="text-[#D9F203] text-[8.7vw] leading-[8.7vw] md:text-[5vw] md:leading-[6vw]">
            Lorem ipsum dolor sit amet,
            <br />
            consectetuer adipiscing elit.
          </h1>
        </div>
        <div className="md:text-right text-[1.5vw] text-[#97B100] pb-6 hidden md:block">
        <h1>
          Lorem ipsum dolor sit amet, consectetuer adipiscing<br/>elit. Aenean
          commodo ligula eget dolor.Cum sociis<br/>natoque penatibus et magnis dis
          parturient montes,<br/>nascetur ridiculus mus
        </h1>
        </div>
        <div className="md:text-right text-[2.8vw] md:text-[1.5vw] text-[#97B100] pb-6 md:hidden">
        <h1>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.Cum sociis natoque penatibus et magnis dis
          parturient montes,nascetur ridiculus mus
        </h1>
        </div>
      </div>
      <div className="portfolio-section-1 bg-transparent">
            {[I4, I3].map((img, index) => (
              <img
                key={index}
                className={`portfolio-img-1 ${
                  expandedImage === index ? "expanded" : ""
                } object-cover cursor-pointer h-[30vw]`}
                src={img}
                alt={`Portfolio ${index}`}
                onMouseEnter={() => handleMouseEnter(index)}
              />
            ))}
          </div>
    </div>
  );
};

export default ServiceHero;
