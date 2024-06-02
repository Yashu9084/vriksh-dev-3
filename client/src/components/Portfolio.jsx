import I4 from '../assets/I4.png'
import I3 from '../assets/I3.png'
import I2 from '../assets/I2.png'
import I1 from '../assets/I1.png'
const Portfolio = () => {
  return (
    <div className="w-full h-full my-24 px-36 py-12 bg-[#D9F203] font-sen">
      <div className="w-full p-12 bg-[#101010] flex items-center justify-between text-white">
        <div className="bg-transparent flex flex-col gap-12">
          <h1 className="bg-transparent text-5xl">Our Portfolio</h1>
          <p className="bg-transparent">
            Nullam elit ligula,faucibus ut semper lobortis,<br/> consectetur sed ex.
            Integer nec erat et sapien<br/> viverraaliquam.Donecjustoerat
          </p>
          <div className="bg-transparent flex flex-col gap-2 text-lg">
          <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Mobile Application Development</h2>
          <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Mobile Application Development</h2>
          <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Mobile Application Development</h2>
          <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Mobile Application Development</h2>
          <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Mobile Application Development</h2>
          <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Mobile Application Development</h2>
          </div>
        </div>
        <div className="bg-transparent relative">
          <div className='flex gap-4'>
            <img src={I4} alt=''/>
            <img src={I2} alt=''/>
            <img src={I1} alt=''/>
            <img src={I3} alt=''/>
          </div>
          <div className='absolute w-[196px] h-[186px] flex flex-col gap-6 p-8 -bottom-16 -left-16 border border-[#D9F203] bg-[#101010]'>
              <h1 className='bg-transparent text-xl'>Interactive Design</h1>
              <p className='bg-transparent text-[#575757] text-sm'>Branding</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
