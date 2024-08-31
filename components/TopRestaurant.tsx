import React from "react";
import RestaurantCard from "@/components/restaurant/RestaurantCard";
import getallRestaurant from "@/actions/getallRestaurant";

const TopRestaurant = async () => {
  return (
    <div className="w-full md:h-[250px] h-[300px] mb-32">
      <RestaurantCard />
    </div>
  );
};

export default TopRestaurant;
