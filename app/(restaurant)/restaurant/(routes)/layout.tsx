import React from "react";
import { Toaster } from "@/components/ui/toaster";
import RestaurantSidebar from "@/components/restaurant/Sidebar";
import getRestaurant from "@/actions/getRestaurant";
import AddCategory from "@/components/restaurant/AddItem";
import EditRestaurantProfile from "@/components/restaurant/editProfile";
const layout = async ({ children }: { children: React.ReactNode }) => {
  const data = await getRestaurant();
  return (
    <>
      <EditRestaurantProfile
        id={data?.id || ""}
        name={data?.name || ""}
        email={data?.email || ""}
        phone={data?.phone || ""}
        location={data?.location || ""}
        rating={data?.rating || ""}
        speciality={data?.speciality || ""}
      />
      <div className="flex flex-row md:space-x-5">
        <RestaurantSidebar />
        <AddCategory />
        {children}
        <Toaster />
      </div>
    </>
  );
};

export default layout;
