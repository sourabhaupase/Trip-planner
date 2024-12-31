import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import BannerImage from "./BannerImage";

export default function BannerContent() {
  return (
    <div className="flex items-center grid-cols-2">
      <div className="px-10">
        <h1 className="text-6xl font-bold">
          Travel Planning Made <span className="text-orange-400">Easy</span>
        </h1>
        <p className="text-lg text-[#777E90] my-5 font-medium">
          We make it easy to plan and book your next trip with a day by day
          itineary.
        </p>
        <Link
          to="/plan-a-trip"
          className="inline-flex mt-4 font-bold text-lg items-center justify-between shadow-xl rounded-full bg-white p-4 h-16 border min-w-[310px] border-red-00 -block"
        >
          <span>Plan a Trip</span>
          <span className="size-9 text-white rounded-full flex items-center justify-center bg-[#3B71FE]">
            <ArrowRight />
          </span>
        </Link>
        <div>review</div>
      </div>
      <div>
        <BannerImage />
      </div>
    </div>
  );
}
