import mouse from '../assets/mouse.png'
const Hero = () => {
  return (
    <div className="bg-[#010103]">
      <div className="mt-20 px-80 text-9xl">
        <h1 className="font-neue text-white ">
          Welcome to <span className="text-[#D9F203]">Vriksh</span>
        </h1>
        <h1 className="pl-64 font-neue  text-white">Elevating your</h1>
        <h1 className="pl-12 font-neue text-[#D9F203]">Digital Presence!</h1>
      </div>
      <div className='flex justify-center mt-12 '>
        <img className='cursor-pointer' width={40} height={40} src={mouse} alt=''/>
      </div>
    </div>
  );
};

export default Hero;
