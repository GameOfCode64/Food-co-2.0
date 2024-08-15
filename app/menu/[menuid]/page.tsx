import React from "react";
import RestaurantMenu from "@/components/restaurant/RestaurantMenu";
import getMenu from "@/actions/getMenu";

export const revalidate = 30;

const Page = async ({ params }: { params: { menuid: string } }) => {
  const data = await getMenu(params?.menuid);
  return (
    <div className="w-full h-full md:px-20 px-4 py-8">
      <RestaurantMenu menuid={params?.menuid} />
    </div>
  );
};

export default Page;
