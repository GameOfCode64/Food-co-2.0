import React from "react";
import getOrderById from "@/actions/getOrderById";
import OrderDetails from "@/components/restaurant/OrderDetails";
export const dynamic = "force-dynamic";
const Page = async ({ params }: { params: { orderid: string } }) => {
  const data = await getOrderById(params?.orderid);
  if (!data) {
    return <div>Invalid Order Id or No Data Found</div>; // Handle case when data is null
  }
  return (
    <div className="w-full py-6">
      <OrderDetails data={data} />
    </div>
  );
};

export default Page;
