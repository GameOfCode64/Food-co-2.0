import getOrders from "@/actions/getOrders";
import Image from "next/image";
import React from "react";
import notfound from "@/public/NotFound.svg";
import OrdersCard from "@/components/OrdersCard";
const page = async () => {
  const orders = await getOrders();

  return (
    <div className="w-full md:py-8 py-4">
      <h1 className="font-bold text-bittersweet-500">Your Orders</h1>
      <hr className="w-full h-[1px] bg-bittersweet-500/20 mt-5" />
      {orders.length === 0 ? (
        <div className="flex items-center justify-center h-full flex-col">
          <Image src={notfound} width={250} height={250} alt="Not Found" />
          <p className="mt-4 font-medium">No Order Yet!</p>
        </div>
      ) : (
        <>
          <OrdersCard />
        </>
      )}
    </div>
  );
};

export default page;
