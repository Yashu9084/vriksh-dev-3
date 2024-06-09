import mouse from "../assets/mouse.png";
import video from "../assets/video.mp4"
const Hero = () => {
  return (
    <div className="flex">
      <video className="-ml-[24vw] rotate-[50deg] mt-[4vw] w-[44vw]" controls loop autoPlay>
        <source src={video} type="video/mp4" />
      </video>
      <div className="bg-[#010103] -ml-[1vw] pt-[5vw] w-full z-20">
        <div className="w-full text-[8vw] leading-[9vw]">
          <h1 className="font-neue text-white ">
            Welcome to <span className="text-[#D9F203]">Vriksh</span>
          </h1>
          <div className="pl-[18.5vw] font-neue text-white">Elevating your</div>
          <div className="pl-[5vw] font-neue text-[#D9F203]">
            Digital Presence!
          </div>
        </div>
        <div className="flex pl-[28vw] mt-[2vw] bg-transparent">
          <img
            className="cursor-pointer w-[5vw] md:w-[4vw]"
            color="white"
            // width={50}
            // height={50}
            src={mouse}
            alt=""
          />
        </div>
      </div>
      <video className="-mr-[22vw] -rotate-[50deg] -mt-[10vw] w-[44vw] z-10" controls loop autoPlay >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
