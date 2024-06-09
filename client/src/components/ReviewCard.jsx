const ReviewCard = ({ profile, name, designation, description }) => {
    return (
      <div className="w-[50vw] md:w-[25vw] flex-shrink-0 flex flex-col justify-between m-[1vw] md:m-[0.4vw] p-[2.5vw] md:p-[0.8vw] bg-[#242222] rounded-lg">
        <div className="flex flex-col text-white bg-transparent">
          <img className="bg-transparent mb-[1.5vw] md:mb-[0.4vw] w-[6vw] md:w-[2.5vw]" src={profile} alt="" />
          <h1 className="bg-transparent text-[3vw] md:text-[1.4vw]">{name}</h1>
          <p className="bg-transparent text-[2vw] md:text-[0.8vw] text-[#8D8D8D]">{designation}</p>
        </div>
        <div className="bg-transparent">
          <p className="text-white mt-[4vw] bg-transparent text-[1.7vw] md:text-[0.7vw] font-sen">{description}</p>
        </div>
      </div>
    );
  };
  
  export default ReviewCard;
  