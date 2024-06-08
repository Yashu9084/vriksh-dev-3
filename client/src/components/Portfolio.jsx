import I4 from '../assets/I4.png'
import I3 from '../assets/I3.png'
import I2 from '../assets/I2.png'
import I1 from '../assets/I1.png'
const Portfolio = () => {
  return (
    <div className="w-full mt-[8vw] px-[3vw] py-[3vw] bg-[#D9F203] font-sen">
      <div className="w-full p-[3vw] bg-[#101010] flex flex-col gap-[15vw] md:flex-row text-white">
        <div className="bg-transparent flex flex-col gap-[1.5vw] justify-center">
          <h1 className="bg-transparent text-[3vw] leading-[1.5vw]">Our Portfolio</h1>
          <p className="bg-transparent text-[0.9vw] leading-[1.2vw] text-[#909090]">
            Nullam elit ligula,faucibus ut semper lobortis,<br/> consectetur sed ex.
            Integer nec erat et sapien<br/> viverraaliquam.Donecjustoerat
          </p>
          <div className="bg-transparent flex flex-col gap-[0.5vw] text-[1.2vw] leading-[2vw] mt-[2vw]">
          <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Mobile Application Development</h2>
          <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Mobile Application Development</h2>
          <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Mobile Application Development</h2>
          <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Mobile Application Development</h2>
          <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Mobile Application Development</h2>
          <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Mobile Application Development</h2>
          <h2 className="bg-transparent cursor-pointer hover:text-[#D9F203]">Mobile Application Development</h2>
          </div>
        </div>
        <div className="bg-transparent relative">
          <div className='flex gap-[1vw]'>
            <img className='w-[20vw]'  src={I4} alt=''/>
            <img className='w-[6vw]'  src={I2} alt=''/>
            <img className='w-[6vw]'  src={I1} alt=''/>
            <img className='w-[15vw]'  src={I3} alt=''/>
          </div>
          <div className='absolute w-[10vw] h-[10vw] flex flex-col gap-[2vw] pt-[2vw] px-[1.5vw] -bottom-[0vw] -left-[5vw] border border-[#D9F203] bg-[#101010]'>
              <h1 className='bg-transparent text-[1.2vw]'>Interactive Design</h1>
              <p className='bg-transparent text-[#575757] text-[1vw]'>Branding</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
