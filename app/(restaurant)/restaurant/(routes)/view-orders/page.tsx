import getRestaurantOrders from "@/actions/getRestaurantOrders";
import OrderTable from "@/components/restaurant/OrderTable";
import React from "react";
export const dynamic = "force-dynamic";
const page = async () => {
  const data = await getRestaurantOrders();
  return (
    <div className="w-full">
      <p className="font-semibold text-bittersweet-400 mt-3 text-lg">Orders</p>
      <hr className="h-[1px] mt-4 w-full rounded-3xl bg-bittersweet-50" />
      <OrderTable data={data || []} />
    </div>
  );
};

export default page;
