import React from "react";
import CreateItems from "@/components/restaurant/CreateItems";
import CreateCategoryBtn from "@/components/restaurant/CreateCategoryBtn";
import getCategory from "@/actions/getCategoary";

const page = async () => {
  const Category = await getCategory();

  return (
    <div className="w-full relative h-screen">
      <div className="fixed w-full h-full md:py-8 py-4 overflow-y-scroll">
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
