import reviewData from "../../public/data/reviewData";
import ReviewCard from "./ReviewCard";

const Testimonials = () => {
  return (
    <div className="my-24">
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-serif text-5xl text-[#D9F203]">
          What they say about us
        </h1>
        <p className="font-sen text-sm text-white">
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
