const ReviewCard = ({ profile, name, designation, description }) => {
    return (
      <div className="w-[400px] h-[300px] flex-shrink-0 flex flex-col justify-between m-2 p-6 bg-[#242222] border border-[#D9F203] rounded-md">
        <div className="flex flex-col text-white bg-transparent">
          <img className="bg-transparent mb-2" width={40} src={profile} alt="" />
          <h1 className="bg-transparent text-lg">{name}</h1>
          <p className="bg-transparent text-[14px] text-[#8D8D8D]">{designation}</p>
        </div>
        <div className="bg-transparent">
          <p className="text-white bg-transparent text-sm font-sen">{description}</p>
        </div>
      </div>
    );
  };
  
  export default ReviewCard;
  