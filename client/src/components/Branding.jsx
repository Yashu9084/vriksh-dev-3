const Branding = ({ sno, title, desc }) => {
  return (
    <div className="flex flex-col font-neue">
      <div className="flex flex-col gap-[3.5vw] text-2xl md:text-[2.5vw] md:flex-row md:justify-between md:items-center">
        <div className="flex gap-[6vw] md:gap-[10vw] items-center">
          <div className="text-[#637400] text-[10vw] md:text-[4vw]">{sno}</div>
          <pre className="text-[#D9F203] font-neue">{title}</pre>
        </div>
        <div className="font-sen md:w-[50%] text-white text-[2.5vw] md:text-[1vw] leading-[4vw] md:leading-[2vw] text-left">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default Branding;
