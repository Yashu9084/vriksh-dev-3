import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Card from "../Card";
import data from "../../../public/data/data.js";

const Service = () => {
  return (
    <div className="my-[8vw] px-[8vw] md:px-[5vw] flex flex-col md:flex-row md:items-center">
      <div className="w-[100%]">
        <h1 className="text-[#D9F203] font-neue text-[2.8vw] md:text-[1.5vw]">
          Contact Us
        </h1>
        <h2 className="mt-[2vw] md:mt-[2.5vw] text-[#D9F203] font-neue tracking-wider text-[8vw] md:text-[4vw] leading-[9vw] md:leading-none">
          Our service will make
          <br />
          Your product successful
        </h2>
        <h1 className="mt-[3.5vw] md:mt-[2.5vw] text-white font-sen text-[2.8vw] md:text-[1vw]">
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          <br />
          dolore magna aliqua. Ut enim ad minim.
        </h1>
        <button className="mt-[4vw] bg-[#D9F203] px-[2.5vw] md:px-[1.5vw] py-[2vw] md:py-[1vw] text-[2.8vw] md:text-[1.5vw] flex items-center gap-[2vw] text-[#637400] font-neue">
          Services
          <FaArrowRightLong className="bg-transparent text-[#637400] text-[2.8vw] md:text-[1.5vw]" />
        </button>
      </div>
      <div className="md:w-1/2 mt-8">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="pb-[2vw] pl-[2.5vw] "
        >
          <SwiperSlide>
            <div className="flex flex-wrap justify-center">
              {data?.map((set, index) => (
                <Card
                  key={index}
                  icon={set.icon}
                  title={set.title}
                  desc={set.description}
                  index={index}
                />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-wrap mb-20">
              {data?.map((set, index) => (
                <Card
                  key={index}
                  icon={set.icon}
                  title={set.title}
                  desc={set.description}
                  index={index}
                />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Service;
