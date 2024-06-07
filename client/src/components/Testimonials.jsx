import reviewData from "../../public/data/reviewData";
import ReviewCard from "./ReviewCard";

const Testimonials = () => {
  return (
    <div className="my-[8vw]">
      <div className="flex flex-col items-center gap-[0.6vw] ">
        <h1 className="font-jakarta font-semibold text-[2.8vw] text-[#D9F203]">
          What they say about us
        </h1>
        <p className="font-sen text-[1vw] text-white">
          Professionals from all around the world are using PageBolt.
        </p>
      </div>
      <div className="flex w-full mt-12 overflow-x-auto">
        {reviewData.map((data, index) => {
          return (
            <ReviewCard
              key={index}
              profile={data.profile}
              name={data.name}
              designation={data.designation}
              description={data.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
