const Card = ({ icon, title, desc,index }) => {
  const cardStyles = ["top-16", "top-0", "top-16", "top-0","top-16","top-40 md:top-56","top-16"];
  return (
    <div className={`relative flex flex-col justify-between m-[1.2vw] md:m-[1vw] px-[3vw] md:px-[1vw] py-[5vw]  md:py-[1.6vw] w-[38vw] h-[38vw] md:w-[16vw] md:h-[16vw] bg-[#242222] ${cardStyles[index]}`} >
      <div className=" text-white bg-transparent w-[20%] h-[20%] md:w-[100%] md:h-[100%]">
        <img
          className="bg-transparent md:w-[3vw] md:h-[3vw]"
          src={icon}
          alt=""
        />
      </div>
      <div className=" text-white bg-transparent">
        <h2 className="bg-transparent text-[#97B100] font-neue text-[3.8vw] md:text-[1.5vw]">
          {title}
        </h2>
        <p className="bg-transparent text-[#D9F203] font-extralight text-[2.5vw] md:text-[0.8vw]">
          Consectetur adipiscing elit
        </p>
      </div>
    </div>
  );
};

export default Card;
