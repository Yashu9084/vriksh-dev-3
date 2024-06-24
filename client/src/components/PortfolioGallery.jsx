import React from "react";
import Masonry from "react-masonry-css";
import I4 from "../assets/I4.png";
import I3 from "../assets/I3.png";
import I2 from "../assets/I2.png";
import I1 from "../assets/I1.png";

const PortfolioGallery = () => {
  const imagesArray = [
    { alt: "Image1's alt text", caption: "Image1's description", src: I1, height: 500 },
    { alt: "Image2's alt text", caption: "Image2's description", src: I2, height: 300 },
    { alt: "Image3's alt text", caption: "Image3's description", src: I3, height: 500 },
    { alt: "Image4's alt text", caption: "Image4's description", src: I4, height: 500 },
    { alt: "Image1's alt text", caption: "Image1's description", src: I1, height: 500 },
    { alt: "Image2's alt text", caption: "Image2's description", src: I2, height: 500 },
    { alt: "Image3's alt text", caption: "Image3's description", src: I3, height: 400 },
    { alt: "Image4's alt text", caption: "Image4's description", src: I4, height: 250 },
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="mb-[14vw] md:mb-[8vw] md:mt-[4vw] px-[8vw] md:px-[5vw] md:gap-[2vw] flex flex-col font-lato text-white items-center">
      <h1 className="text-[3vw] font-semibold">Some of Our Latest Works</h1>
      <p className="w-[50vw] text-center">
        Discover our most recent works, carefully chosen to enhance your
        experience, where creativity and inventiveness collide. Our latest works
        offer a renewed notion of creativity.
      </p>
      <div className="flex text-[1.2vw] gap-[1vw]">
        <div className="cursor-pointer hover:text-[#97B100]">All Projects &ensp;/</div>
        <div className="cursor-pointer hover:text-[#97B100]">Mobile Application &ensp;/</div>
        <div className="cursor-pointer hover:text-[#97B100]">Website Development &ensp;/</div>
        <div className="cursor-pointer hover:text-[#97B100]">UI/UX Designing &ensp;/</div>
        <div className="cursor-pointer hover:text-[#97B100]">E-Commerce &ensp;/</div>
        <div className="cursor-pointer hover:text-[#97B100]">Branding </div>
      </div>
      <div className="w-full mt-8">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {imagesArray.map((image, index) => (
            <div key={index} className="mb-4">
              <img
                src={image.src}
                alt={image.alt}
                style={{ height: `${image.height}px`, width: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default PortfolioGallery;
