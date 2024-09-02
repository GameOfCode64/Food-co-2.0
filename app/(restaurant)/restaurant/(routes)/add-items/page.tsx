import React from "react";
import CreateItems from "@/components/restaurant/CreateItems";
import CreateCategoryBtn from "@/components/restaurant/CreateCategoryBtn";
import getCategory from "@/actions/getCategoary";
export const dynamic = "force-dynamic";
const page = async () => {
  const Category = await getCategory();

  return (
    <div className="w-full relative h-full">
      <div className="w-full h-full md:py-8 py-4">
        <div className="flex flex-col px-4">
          <h1 className="font-semibold text-bittersweet-400">Add New Item</h1>
          <CreateCategoryBtn />
          <CreateItems category={Category} />
        </div>
      </div>
    </div>
  );
};

export default page;
