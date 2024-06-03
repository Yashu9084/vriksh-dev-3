import mouse from '../assets/mouse.png'
const Hero = () => {
  return (
    <div className="bg-[#010103] my-24 px-12 lg:px-36 md:px-24 w-full">
      <div className="w-full text-5xl sm:text-6xl md:text-7xl 2xl:text-9xl lg:text-[98px] text-center">
        <h1 className="font-neue text-white ">
          Welcome to <span className="text-[#D9F203]">Vriksh</span>
        </h1>
        <div className="pl-40 2xl:pl-80 lg:pl-64 md:pl-48 font-neue text-white">Elevating your</div>
        <div className="pl-12 font-neue text-[#D9F203]">Digital Presence!</div>
      </div>
      <div className='flex justify-center mt-12 '>
        <img className='cursor-pointer' width={40} height={40} src={mouse} alt=''/>
      </div>
    </div>
  );
};

export default Hero;
