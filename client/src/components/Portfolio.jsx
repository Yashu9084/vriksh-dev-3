import React, { useState } from 'react';
import I4 from '../assets/I4.png';
import I3 from '../assets/I3.png';
import I2 from '../assets/I2.png';
import I1 from '../assets/I1.png';

const Portfolio = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleMouseEnter = (index) => {
    setExpandedImage(index);
  };

  return (
    <div className="w-full mt-[8vw] px-[6vw] md:px-[3vw] py-[3vw] bg-[#D9F203] font-sen">
      <div className="w-full p-[3vw] bg-[#101010] flex flex-col gap-[vw] md:flex-row text-white">
        <div className="md:w-[40%] bg-transparent flex flex-col gap-[1.5vw] justify-center">
          <h1 className="bg-transparent  text-[6vw] md:text-[3vw] leading-[4vw] md:leading-[1.5vw]">Our Portfolio</h1>
          <p className="bg-transparent  text-[2.5vw] md:text-[0.9vw] leading-[3vw] md:leading-[1.2vw] text-[#909090]">
            Nullam elit ligula, faucibus ut semper lobortis, consectetur sed ex.
            Integer nec erat et sapien viverra aliquam. Donec justo erat.
          </p>
          <div className="bg-transparent flex flex-col gap-[1vw] md:gap-[0.5vw] text-[2.5vw] md:text-[1.2vw] leading-[4vw] md:leading-[2vw] mt-[2vw]">
            <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Mobile Application Development</h2>
            <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Web Development</h2>
            <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">UI/UX Design</h2>
            <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Digital Marketing</h2>
            <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Branding</h2>
            <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">SEO Optimization</h2>
            <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Content Creation</h2>
          </div>
        </div>
        <div className="bg-transparent relative">
          <div className='portfolio-section bg-transparent'>
            {[I4, I2, I1, I3, I3].map((img, index) => (
              <img
                key={index}
                className={`portfolio-img ${expandedImage === index ? 'expanded' : ''} object-cover`}
                src={img}
                alt={`Portfolio ${index}`}
                onMouseEnter={() => handleMouseEnter(index)}
              />
            ))}
          </div>
          <div className={`portfolio-info ${expandedImage !== null ? 'expanded' : ''}`}>
            <h1 className='bg-transparent text-[1.2vw]'>Interactive Design</h1>
            <p className='bg-transparent text-[#575757] text-[1vw]'>Branding</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
