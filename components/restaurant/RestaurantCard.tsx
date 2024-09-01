import React from "react";
import getallRestaurant from "@/actions/getallRestaurant";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SliderCard from "./SliderCard";

const RestaurantCard = async () => {
  const data = await getallRestaurant();
  if (data === null) {
    return "No data Found";
  }
  return (
    <div className="w-full h-full px-2 py-3">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold text-bittersweet-400 text-lg">Top Restaurant</p>
        <div className="flex items-center justify-center gap-4">
          <p className="w-[35px] h-[35px] flex items-center justify-center bg-[#0000000e] rounded-full cursor-pointer text-bittersweet-400">
            <ArrowLeft size={18} />
          </p>
          <p className="w-[35px] h-[35px] flex items-center justify-center bg-[#0000000e] rounded-full cursor-pointer text-bittersweet-400">
            <ArrowRight size={18} />
          </p>
        </div>
      </div>
      <SliderCard data={data || []} />
    </div>
  );
};

export default RestaurantCard;
