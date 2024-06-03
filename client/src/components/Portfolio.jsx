import I4 from '../assets/I4.png'
import I3 from '../assets/I3.png'
import I2 from '../assets/I2.png'
import I1 from '../assets/I1.png'
const Portfolio = () => {
  return (
    <div className="w-full h-full my-12 md:my-24 px-4 sm:px-10 md:px-36 py-6 md:py-12 bg-[#D9F203] font-sen">
      <div className="w-full h-full p-6 md:p-12 bg-[#101010] flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-white">
        <div className="bg-transparent flex flex-col gap-4 sm:gap-6 md:gap-12">
          <h1 className="bg-transparent text-2xl md:text-5xl">Our Portfolio</h1>
          <p className="bg-transparent text-[10px] sm:text-sm">
            Nullam elit ligula,faucibus ut semper lobortis,<br/> consectetur sed ex.
            Integer nec erat et sapien<br/> viverraaliquam.Donecjustoerat
          </p>
          <div className="bg-transparent flex flex-col gap-2 text-[12px] sm:text-sm md:text-lg">
          <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Mobile Application Development</h2>
          <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Mobile Application Development</h2>
          <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Mobile Application Development</h2>
          <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Mobile Application Development</h2>
          <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Mobile Application Development</h2>
          <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Mobile Application Development</h2>
          </div>
        </div>
        <div className="bg-transparent relative sm:mt-4 md:mt-0">
          <div className='flex gap-4 w-[20%] md:w-full'>
            <img src={I4} alt=''/>
            <img src={I2} alt=''/>
            <img src={I1} alt=''/>
            <img src={I3} alt=''/>
          </div>
          <div className='absolute w-[80px] h-[70px] sm:w-[120px] sm:h-[100px] md:w-[196px] md:h-[186px] flex flex-col gap-2 md:gap-6 md:p-8 sm:p-4 p-2 -bottom-4 md:-bottom-16 -left-4 sm:-left-8 md:-left-16 border border-[#D9F203] bg-[#101010]'>
              <h1 className='bg-transparent text-[8px] sm:text-sm md:text-xl'>Interactive Design</h1>
              <p className='bg-transparent text-[#575757] text-[8px] sm:text-sm md:text-lg'>Branding</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
