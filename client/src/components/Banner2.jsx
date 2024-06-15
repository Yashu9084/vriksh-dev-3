import profile from "../assets/profile.png";
const Banner2 = () => {
  const text1 = "LAUNCHING YOUR SUCCESS STORY ";
  const text2 = "GROW YOUR BRAND WITH VRIKSH  ";
  const repeatedTexts1 = Array(100).fill(text1);
  const repeatedTexts2 = Array(100).fill(text2);
  return (
    <div className="relative marquee-container mb-[14vw] md:mb-0 md:py-12 h-[100vw] md:h-[600px] flex flex-col gap-36">
      <div className="marquee-content bg-transparent font-neue flex items-center">
        {repeatedTexts1.map((item, index) => (
          <span
            key={index}
            className="bg-transparent text-[20vw] md:text-[120px]"
          >
            {item}
          </span>
        ))}
      </div>
      <img
        className="absolute bottom-0 w-[80vw] md:w-[25vw] bg-transparent"
        src={profile}
        alt=""
      />
      <div className="marquee-content-reverse bg-transparent font-neue flex items-center">
        {repeatedTexts2.map((item, index) => (
          <span
            key={index}
            className="bg-transparent text-[20vw] md:text-[120px]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Banner2;
