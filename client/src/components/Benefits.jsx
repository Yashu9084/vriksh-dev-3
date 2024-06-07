import Branding from "./Branding";

const Benefits = () => {
  return (
    <>
      <div className="my-[8vw] px-[5vw]">
        <h3 className="text-[#D9F203] font-neue tracking-wider text-[1.2vw]">
          Marketing Services
        </h3>
        <h2 className="mt-2 text-[#D9F203] font-neue tracking-wider text-[3vw] leading-[3vw]">
          The biggest benefits of
          <br />
          working with us
        </h2>
        <div className="mt-[6vw]">
        <Branding />
        <div className="bg-[#D9F203] -mx-12 md:-mx-36 my-6 md:my-10 h-[0.5px]"></div>
        <Branding />
        <div className="bg-[#D9F203] -mx-12 md:-mx-36 my-6 md:my-10 h-[0.5px]"></div>
        <Branding />
        </div>
      </div>
    </>
  );
};

export default Benefits;
