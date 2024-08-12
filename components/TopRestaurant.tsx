import React from "react";
import RestaurantCard from "@/components/restaurant/RestaurantCard";
import getRestaurant from "@/actions/getRestaurant";

const TopRestaurant = async () => {
  const data = await getRestaurant();
  return (
    <div className="w-full md:h-[250px] h-[300px] ">
      <RestaurantCard
        name={data?.name || ""}
        image={data?.image || ""}
        location={data?.location || ""}
        rating={data?.rating || ""}
        speciality={data?.speciality || ""}
      />
    </div>
  );
};

export default TopRestaurant;
