
const Branding = () => {
  return (
    <div className="flex flex-col font-neue">
      <div className="flex flex-col gap-2 text-2xl md:text-[2.5vw] md:flex-row md:gap-[20vw]">
        <div className="flex gap-8 md:gap-[10vw] items-center">
          <div className="text-[#637400] text-[4vw]">01</div>
          <pre className="text-[#D9F203] font-neue">Digital Design</pre>
        </div>
        <div className="font-sen w-[50%] text-white text-sm md:text-[1vw] leading-[2vw] text-left">
          Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem
          aperiam. Sed ut perspiciatis unde omnis iste natus.
        </div>
      </div>
    </div>
  );
};

export default Branding;
