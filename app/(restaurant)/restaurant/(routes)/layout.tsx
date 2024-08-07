import React from "react";
import { Toaster } from "@/components/ui/toaster";
import RestaurantSidebar from "@/components/restaurant/Sidebar";
import getRestaurant from "@/actions/getRestaurant";
import AddCategory from "@/components/restaurant/AddItem";
const layout = async ({ children }: { children: React.ReactNode }) => {
  const restaurant = await getRestaurant();
  return (
    <div className="flex flex-row md:space-x-5">
      <RestaurantSidebar name={restaurant?.name || ""} />
      <AddCategory />
      {children}
      <Toaster />
    </div>
  );
};

export default layout;
