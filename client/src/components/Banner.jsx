const Banner = ({text}) => {
  // const text = "GROW.NURTURE.THRIVE";
  const repeatedTexts = Array(100).fill(text);
  return (
    <div className="marquee-container mb-[14vw] md:my-[8vw] h-[25vw] md:h-[15vw] ">
      <div className="marquee-content bg-transparent font-neue flex items-center">
        {repeatedTexts.map((item, index) => (
          <span
            key={index}
            className="bg-transparent text-[18vw] md:text-[15vw]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
