import React from "react";
import StartRestaurantCard from "@/components/StartRestaurantCard";
import getRestaurant from "@/actions/getRestaurant";
export const dynamic = "force-dynamic";
const page = async () => {
  const getrestaurant = await getRestaurant();

  return (
    <div className="w-full relative h-screen bg-bittersweet-500 md:px-20 px-4 py-8">
      <StartRestaurantCard email={getrestaurant?.email || ""} />
    </div>
  );
};

export default page;
