import Branding from "./Branding";

const data = [
  {
    sno: "01",
    title: "VALUABLE EXPERTISE",
    desc: "We ensure that your website provides unparalleled experience to your users with minimum hassle through a fusion of creative ideation and technical skills. ",
  },
  {
    sno: "02",
    title: "BUDGET-FRIENDLY",
    desc: "We offer pocket-friendly solutions to a variety of clients, including small businesses and women entrepreneurs. Budget is based on the duration and scope of the work.  ",
  },
  {
    sno: "03",
    title: "SCALABLE SOLUTIONS",
    desc: "Adaptability and flexibility are needed to thrive in the ever-evolving Digital India. At Vriksh, we offer tailor-made solutions befitting your changing needs.",
  },
];

const Benefits = () => {
  return (
    <>
      <div id="benefits" className="mb-[14vw] md:my-[8vw] px-[8vw] md:px-[5vw]">
        <h3 className="text-[#D9F203] font-neue tracking-wider text-[2.8vw] md:text-[1.2vw]">
          Marketing Services
        </h3>
        <h2 className="mt-2 text-[#D9F203] font-neue tracking-wider text-[8vw] md:text-[3vw] leading-[9vw] md:leading-[3vw]">
          3 REASONS WHY VRIKSH
          <br />
          IS YOUR GO-TO WEB GUIDE
        </h2>
        <div className="mt-[6vw]">
          {data.map((item) => (
            <>
              <Branding sno={item.sno} title={item.title} desc={item.desc} />
              {item.sno !== "03" && (
                <div className="bg-[#D9F203] -mx-12 md:-mx-36 my-6 md:my-10 h-[0.5px]"></div>
              )}
            </>
          ))}

          <Branding />

          <Branding />
          {/* <div className="bg-[#D9F203] -mx-12 md:-mx-36 my-6 md:my-10 h-[0.5px]"></div> */}
          <Branding />
        </div>
      </div>
    </>
  );
};

export default Benefits;
