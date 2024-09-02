import getRestaurantOrders from "@/actions/getRestaurantOrders";
import OrderHistory from "@/components/restaurant/OrderHistory";
import React from "react";
export const dynamic = "force-dynamic";
const page = async () => {
  const data = await getRestaurantOrders();
  return (
    <div className="w-full px-4 py-6">
      <p className="font-bold text-bittersweet-500">Order History</p>
      <OrderHistory data={data || []} />
    </div>
  );
};

export default page;
