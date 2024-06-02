const Card = ({ icon, title, desc,index }) => {
  const cardStyles = ["top-16", "top-0", "top-16", "top-0"];
  return (
    <div className={`relative flex flex-col justify-between m-6 p-6 w-[300px] h-[282.89px] bg-[#242222] ${cardStyles[index]}`} >
      <div className=" text-white bg-transparent">
        <img
          width={50}
          height={50}
          className="bg-transparent"
          src={icon}
          alt=""
        />
      </div>
      <div className=" text-white bg-transparent">
        <h2 className="bg-transparent text-[#D9F203] font-neue text-2xl">
          {title}
        </h2>
        <p className="bg-transparent text-[#D9F203] font-extralight text-[12px]">
          Consectetur adipiscing elit
        </p>
      </div>
    </div>
  );
};

export default Card;
