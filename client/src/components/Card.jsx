const Card = ({ icon, title, desc,index }) => {
  const cardStyles = ["top-16", "top-0", "top-16", "top-0"];
  return (
    <div className={`relative flex flex-col justify-between m-4  p-4 w-[130px] h-[121.49px] md:w-[240px] md:h-[260.89px] bg-[#242222] ${cardStyles[index]}`} >
      <div className=" text-white bg-transparent w-[20%] h-[20%] md:w-[100%] md:h-[100%]">
        <img
          width={50}
          height={50}
          className="bg-transparent"
          src={icon}
          alt=""
        />
      </div>
      <div className=" text-white bg-transparent">
        <h2 className="bg-transparent text-[#D9F203] font-neue text-[11px] md:text-2xl">
          {title}
        </h2>
        <p className="bg-transparent text-[#D9F203] font-extralight text-[8px] md:text-sm">
          Consectetur adipiscing elit
        </p>
      </div>
    </div>
  );
};

export default Card;
