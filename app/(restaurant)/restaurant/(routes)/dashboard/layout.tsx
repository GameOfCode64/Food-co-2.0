import React from "react";
import { Toaster } from "@/components/ui/toaster";
import RestaurantSidebar from "@/components/restaurant/Sidebar";
import getRestaurant from "@/actions/getRestaurant";
const layout = async ({ children }: { children: React.ReactNode }) => {
  const restaurant = await getRestaurant();
  return (
    <div className="flex flex-row space-x-5">
      <RestaurantSidebar name={restaurant?.name || ""} />
      {children}
    </div>
  );
};

export default layout;
