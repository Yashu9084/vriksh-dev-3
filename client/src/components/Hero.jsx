import mouse from "../assets/mouse.png";
const Hero = () => {
  return (
    <div className="bg-[#010103] px-6 pt-[5vw] text-center w-full">
      <div className="w-full text-[8vw] leading-[8vw]">
        <h1 className="font-neue text-white ">
          Welcome to <span className="text-[#D9F203]">Vriksh</span>
        </h1>
        <div className="pl-[20vw] font-neue text-white">
          Elevating your
        </div>
        <div className="pl-12 font-neue text-[#D9F203]">Digital Presence!</div>
      </div>
      <div className="flex justify-center mt-[1vw] bg-transparent">
        <img
          className="cursor-pointer w-[4vw]"
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
