import profile from '../assets/profile.png'
const Banner2 = () => {
    return (
        <div className="relative marquee-container md:py-12 h-[100vw] md:h-[600px] flex flex-col gap-36">
          <div className="marquee-content bg-transparent font-neue flex items-center">
            <span className="bg-transparent text-[20vw] md:text-[120px]">Creating your success story      </span>
            <span className="bg-transparent text-[20vw] md:text-[120px]">Creating your success story      </span>
            <span className="bg-transparent text-[20vw] md:text-[120px]">Creating your success story      </span>
            <span className="bg-transparent text-[20vw] md:text-[120px]">Creating your success story      </span>
            <span className="bg-transparent text-[20vw] md:text-[120px]">Creating your success story      </span>
            <span className="bg-transparent text-[20vw] md:text-[120px]">Creating your success story      </span>
            <span className="bg-transparent text-[20vw] md:text-[120px]">Creating your success story      </span>
            <span className="bg-transparent text-[20vw] md:text-[120px]">Creating your success story      </span>
            <span className="bg-transparent text-[20vw] md:text-[120px]">Creating your success story      </span>
          </div>
          <img className='absolute bottom-0 w-[80vw] md:w-[25vw] bg-transparent' src={profile} alt=''/>
          <div className="marquee-content-reverse bg-transparent font-neue flex items-center">
            <span className="bg-transparent text-[20vw] md:text-[120px]">Creating your success story      </span>
            <span className="bg-transparent text-[20vw] md:text-[120px]">Creating your success story      </span>
            <span className="bg-transparent text-[20vw] md:text-[120px]">Creating your success story      </span>
            <span className="bg-transparent text-[20vw] md:text-[120px]">Creating your success story      </span>
            <span className="bg-transparent text-[20vw] md:text-[120px]">Creating your success story      </span>
            <span className="bg-transparent text-[20vw] md:text-[120px]">Creating your success story      </span>
            <span className="bg-transparent text-[20vw] md:text-[120px]">Creating your success story      </span>
            <span className="bg-transparent text-[20vw] md:text-[120px]">Creating your success story      </span>
            <span className="bg-transparent text-[20vw] md:text-[120px]">Creating your success story      </span>
          </div>
        </div>
      
    );
  };
  
  export default Banner2;
  