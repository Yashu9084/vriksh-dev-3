import React, { useState } from "react";
import I4 from "../assets/I4.png";
import I3 from "../assets/I3.png";
import I2 from "../assets/I2.png";
import I1 from "../assets/I1.png";

const PortfolioSection = () => {
  const [expandedImage, setExpandedImage] = useState(0);

  const handleMouseEnter = (index) => {
    setExpandedImage(index);
  };

  return (
    <div
      id="portfolio"
      className="w-full mb-[14pw] md:mt-[8vw] px-[6vw] md:px-[3vw] py-[6vw] md:py-[3vw] bg-[#D9F203] font-sen"
    >
      <div className="w-full p-[6vw] md:p-[3vw] bg-[#101010] flex flex-col gap-[vw] md:flex-row text-white">
        <div className="md:w-[40%] bg-transparent flex flex-col gap-[3vw] md:ap-[1.5vw] justify-center">
          <h1 className="bg-transparent  text-[8vw] md:text-[3vw] leading-[8vw] md:leading-[1.5vw]">
            Our Portfolio
          </h1>
          <p className="bg-transparent text-[3.5vw] md:text-[0.9vw] leading-[6vw] md:leading-[1.2vw] text-[#909090] md:w-[70%]">
            Here are our previous projects. Each has been carried out with a
            potent fusion of creativity, digital expertise and marketing
            insights, ensuring the utmost client satisfaction.
          </p>
          <div className="bg-transparent flex flex-col gap-[4vw] md:gap-[0.5vw] text-[3.5vw] md:text-[1.2vw] leading-[4vw] md:leading-[2vw] mt-[2vw]">
            <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">
              Mobile Application Development
            </h2>
            <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">
              Web Development
            </h2>
            <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">
              UI/UX Design
            </h2>
            <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">
              Digital Marketing
            </h2>
            <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">
              Branding
            </h2>
            <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">
              SEO Optimization
            </h2>
            <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">
              Content Creation
            </h2>
          </div>
        </div>
        <div className="bg-transparent relative flex-1">
          <div className="portfolio-section bg-transparent">
            {[I4, I2, I1, I3, I3].map((img, index) => (
              <img
                key={index}
                className={`portfolio-img ${
                  expandedImage === index ? "expanded" : ""
                } object-cover cursor-pointer`}
                src={img}
                alt={`Portfolio ${index}`}
                onMouseEnter={() => handleMouseEnter(index)}
              />
            ))}
          </div>
          <div
            className={`portfolio-info ${
              expandedImage !== null ? "expanded" : ""
            }`}
          >
            <h1 className="bg-transparent text-[1.2vw]">Interactive Design</h1>
            <p className="bg-transparent text-[#575757] text-[1vw]">Branding</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
