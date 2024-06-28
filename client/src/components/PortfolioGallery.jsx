import React from "react";
import Masonry from "react-masonry-css";
import I4 from "../assets/I4.png";
import I3 from "../assets/I3.png";
import I2 from "../assets/I2.png";
import I1 from "../assets/I1.png";

const PortfolioGallery = () => {
  const imagesArray = [
    {
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: I1,
      height: 500,
    },
    {
      alt: "Image2's alt text",
      caption: "Image2's description",
      src: I2,
      height: 300,
    },
    {
      alt: "Image3's alt text",
      caption: "Image3's description",
      src: I3,
      height: 500,
    },
    {
      alt: "Image4's alt text",
      caption: "Image4's description",
      src: I4,
      height: 500,
    },
    {
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: I1,
      height: 500,
    },
    {
      alt: "Image2's alt text",
      caption: "Image2's description",
      src: I2,
      height: 500,
    },
    {
      alt: "Image3's alt text",
      caption: "Image3's description",
      src: I3,
      height: 400,
    },
    {
      alt: "Image4's alt text",
      caption: "Image4's description",
      src: I4,
      height: 250,
    },
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="mb-[14vw] md:mb-[8vw] md:mt-[4vw] px-[8vw] md:px-[5vw] gap-[4vw] md:gap-[2vw] flex flex-col font-lato text-white md:items-center ">
      <h1 className="text-[6vw] md:text-[3vw] font-semibold text-center">
        Some of Our Latest Works
      </h1>
      <p className="md:w-[50vw] text-[3.5vw] md:text-[1.2vw] text-center font-light">
        Discover our most recent works, carefully chosen to enhance your
        experience, where creativity and inventiveness collide. Our latest works
        offer a renewed notion of creativity.
      </p>
      <div className="flex text-[4vw] md:text-[1.2vw] gap-[1vw] overflow-x-auto whitespace-nowrap -mr-[8vw]">
        <button className="cursor-pointer hover:text-[#97B100]">
          All Projects &ensp;/&ensp;
        </button>
        <button className="cursor-pointer hover:text-[#97B100]">
          Mobile Application &ensp;/&ensp;
        </button>
        <button className="cursor-pointer hover:text-[#97B100]">
          Website Development &ensp;/&ensp;
        </button>
        <button className="cursor-pointer hover:text-[#97B100]">
          UI/UX Designing &ensp;/&ensp;
        </button>
        <button className="cursor-pointer hover:text-[#97B100]">
          E-Commerce &ensp;/&ensp;
        </button>
        <button className="cursor-pointer hover:text-[#97B100]">Branding</button>
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
                style={{
                  height: `${image.height}px`,
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </Masonry>
      </div>
      <style jsx>{`
        @media (max-width: 700px) {
          .my-masonry-grid {
            display: flex;
            flex-direction: column;
          }
          .my-masonry-grid_column > div {
            margin-bottom: 16px; /* Adjust as needed */
          }
          .my-masonry-grid img {
            height: 300px; /* Set a consistent height for all images on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioGallery;
