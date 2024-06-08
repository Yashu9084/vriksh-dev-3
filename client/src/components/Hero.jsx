import mouse from "../assets/mouse.png";
const Hero = () => {
  return (
    <div className="bg-[#010103] px-6 pt-[5vw] pl-[20vw] w-full">
      <div className="w-full text-[8vw] leading-[9vw]">
        <h1 className="font-neue text-white ">
          Welcome to <span className="text-[#D9F203]">Vriksh</span>
        </h1>
        <div className="pl-[18.5vw] font-neue text-white">
          Elevating your
        </div>
        <div className="pl-[5vw] font-neue text-[#D9F203]">Digital Presence!</div>
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
  );
};

export default Hero;
