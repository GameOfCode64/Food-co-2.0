import getallItems from "@/actions/getallItems";
import ViewAllItems from "@/components/restaurant/ViewAllItems";
import React from "react";
export const dynamic = "force-dynamic";
const page = async () => {
  const allitems = await getallItems();

  return (
    <div className="w-full px-4 md:py-6 h-full">
      <div className="flex flex-col">
        <h1 className=" font-semibold text-bittersweet-400">
          View all Menu Items
        </h1>
        <hr className="w-full h-[1px] bg-bittersweet-500/20 mt-4" />
        <div className="w-full h-full mt-4">
          <ViewAllItems items={allitems || []} />
        </div>
      </div>
    </div>
  );
};

export default page;
