const Card = ({ icon, title, desc,index }) => {
  const cardStyles = ["top-16", "top-0", "top-16", "top-0"];
  return (
    <div className={`relative flex flex-col justify-between m-[1vw] px-[1vw] py-[1.6vw] w-[16vw] h-[16vw] bg-[#242222] ${cardStyles[index]}`} >
      <div className=" text-white bg-transparent w-[20%] h-[20%] md:w-[100%] md:h-[100%]">
        <img
          className="bg-transparent w-[3vw] h-[3vw]"
          src={icon}
          alt=""
        />
      </div>
      <div className=" text-white bg-transparent">
        <h2 className="bg-transparent text-[#97B100] font-neue text-[1.5vw]">
          {title}
        </h2>
        <p className="bg-transparent text-[#D9F203] font-extralight text-[0.8vw]">
          Consectetur adipiscing elit
        </p>
      </div>
    </div>
  );
};

export default Card;
