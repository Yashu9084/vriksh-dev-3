import mouse from "../assets/mouse.png";
const Hero = () => {
  return (
    <div className="bg-[#010103] my-12 px-6 lg:my-24 lg:px-36 md:px-24 md:pb-24 w-full">
      <div className="w-full text-4xl sm:text-6xl md:text-7xl xl:text-[140px] 2xl:text-9xl lg:text-[98px] xl:pl-20 2xl:pl-24">
        <h1 className="font-neue text-white ">
          Welcome to <span className="text-[#D9F203]">Vriksh</span>
        </h1>
        <div className="pl-[110px] 2xl:pl-72 lg:pl-64 md:pl-48 xl:pl-[320px] font-neue text-white">
          Elevating your
        </div>
        <div className="pl-12 font-neue text-[#D9F203]">Digital Presence!</div>
      </div>
      <div className="flex justify-center mt-12 ">
        <img
          className="cursor-pointer"
          width={40}
          height={40}
          src={mouse}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
