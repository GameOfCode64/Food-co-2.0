import React from "react";
import getRestaurant from "@/actions/getRestaurant";
import LatestOrders from "@/components/restaurant/LatestOrders";
import { Activity, CookingPot, WalletMinimal } from "lucide-react";
import getRestaurantOrders from "@/actions/getRestaurantOrders";
import { formatCurrency } from "@/lib/currencyFromate";
export const dynamic = "force-dynamic";
const page = async () => {
  const restaurant = await getRestaurant();
  const orders = await getRestaurantOrders();

  const OrderCount = orders?.length || 0;

  // Calculate the total revenue
  const TotalRevenue =
    orders?.reduce((total, order) => {
      return total + (order.total || 0);
    }, 0) || 0;

  return (
    <div className="flex flex-col py-4 w-full md:px-4">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
        <div className="flex w-full flex-col shadow-md px-8 py-6 rounded-md">
          <div className="flex flow-row items-center justify-between">
            <div className="flex flex-col">
              <p className="font-bold text-lg">Welcome to</p>
              <p className="font-medium text-bittersweet-400">
                {restaurant?.name}
              </p>
            </div>
            <div className="w-[50px] flex items-center justify-center h-[50px] bg-bittersweet-500/20 rounded-full">
              <Activity className="text-bittersweet-500" />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col shadow-md px-8 py-6 rounded-md">
          <div className="flex flow-row items-center justify-between">
            <div className="flex flex-col">
              <p className=" font-bold text-lg">Total Orders</p>
              <p className="font-medium text-bittersweet-400">{OrderCount}</p>
            </div>
            <div className="w-[50px] flex items-center justify-center h-[50px] bg-bittersweet-500/20 rounded-full">
              <CookingPot className="text-bittersweet-500" />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col shadow-md px-8 py-6 rounded-md">
          <div className="flex flow-row items-center justify-between">
            <div className="flex flex-col">
              <p className=" font-bold text-lg">Total Revenue</p>
              <p className="font-medium text-bittersweet-400">
                {formatCurrency(Number(TotalRevenue))}
              </p>
            </div>
            <div className="w-[50px] flex items-center justify-center h-[50px] bg-bittersweet-500/20 rounded-full">
              <WalletMinimal className="text-bittersweet-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full md:mt-8 mt-6">
        <h1 className=" font-bold px-1 text-lg text-bittersweet-400">
          New Order
        </h1>
        <LatestOrders />
      </div>
    </div>
  );
};

export default page;
