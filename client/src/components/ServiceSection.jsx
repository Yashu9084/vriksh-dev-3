import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import Card from "./Card.jsx";
import data from "../../public/data/data.js";

const ServiceSection = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/service");
  };
  return (
    <div
      id="service"
      className="my-[14vw] md:my-[8vw] px-[8vw] md:px-[5vw] flex flex-col md:flex-row md:items-center"
    >
      <div className="w-[100%]">
        <h1 className="text-[#D9F203] font-neue text-[2.8vw] md:text-[1.5vw]">
          All You Need
        </h1>
        <h2 className="mt-[2vw] md:mt-[1.5vw] text-[#D9F203] font-neue tracking-wider text-[8vw] md:text-[4vw] leading-[9vw] md:leading-none">
          OUR SERVICES LEAD YOU
          <br />
          TO SUCCESS
        </h2>
        <h1 className="mt-[3.5vw] md:mt-[1.2vw] text-white font-sen text-[2.8vw] md:text-[1vw]">
          With our diverse range of services, develop optimal
          <br />
          management techniques to enhance your website and reach
          <br /> out to your ideal audience.
        </h1>
        <button
          onClick={() => clickHandler()}
          className="mt-[1.2vw] bg-[#D9F203] px-[2.5vw] md:px-[1.5vw] py-[2vw] md:py-[1vw] text-[2.8vw] md:text-[1.5vw] flex items-center gap-[2vw] text-[#637400] font-neue transition-transform duration-300 ease-in-out hover:scale-110 rounded-md group"
        >
          Services
          <FaArrowRightLong className="bg-transparent text-[#637400] text-[2.8vw] md:text-[1.5vw] transition-transform duration-300 ease-in-out group-hover:scale-x-150" />
        </button>
      </div>
      <div className="md:w-1/2 mt-8">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          modules={[FreeMode, Pagination, Autoplay, Navigation]}
          className="pb-[2vw] pl-[2.5vw] "
        >
          <SwiperSlide>
            <div className="flex flex-wrap justify-center">
              {data?.slice(0, 4).map((set) => (
                <Card
                  key={set.id}
                  icon={set.icon}
                  title={set.title}
                  desc={set.description}
                  index={set.id}
                />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-wrap mb-20">
              {data?.slice(4, 7).map((set) => (
                <Card
                  key={set.id}
                  icon={set.icon}
                  title={set.title}
                  desc={set.description}
                  index={set.id}
                />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceSection;
