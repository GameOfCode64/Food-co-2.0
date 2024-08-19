import React from "react";
import RestaurantMenu from "@/components/restaurant/RestaurantMenu";
import getMenu from "@/actions/getMenu";

const revalidate = 30;

const Page = async ({ params }: { params: { menuid: string } }) => {
  return (
    <div className="w-full h-full md:px-20 px-4 py-8">
      <RestaurantMenu menuid={params?.menuid} />
    </div>
  );
};

export default Page;
