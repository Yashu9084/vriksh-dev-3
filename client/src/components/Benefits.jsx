import Branding from "./Branding";

const Benefits = () => {
  return (
    <>
      <div className="my-24 px-36">
        <h3 className="text-[#D9F203] font-neue tracking-wider text-xl">
          Marketing Services
        </h3>
        <h2 className="mt-6 text-[#D9F203] font-neue tracking-wider text-5xl">
          The biggest benefits of
          <br />
          working with us
        </h2>
        <div className="mt-24">
        <Branding />
        <div className="bg-[#D9F203] my-10 h-[0.5px]"></div>
        <Branding />
        <div className="bg-[#D9F203] my-10 h-[0.5px]"></div>
        <Branding />
        </div>
      </div>
    </>
  );
};

export default Benefits;
