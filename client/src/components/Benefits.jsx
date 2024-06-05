import Branding from "./Branding";

const Benefits = () => {
  return (
    <>
      <div className="my-12 md:my-24 px-6 md:px-36 md:py-24">
        <h3 className="text-[#D9F203] font-neue tracking-wider text-sm md:text-xl">
          Marketing Services
        </h3>
        <pre className="mt-2 text-[#D9F203] font-neue tracking-wider text-3xl md:text-5xl">
          The biggest benefits of
          <br />
          working with us
        </pre>
        <div className="mt-12 md:mt-24">
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
