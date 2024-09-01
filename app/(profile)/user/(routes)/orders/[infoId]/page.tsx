import getOrderById from "@/actions/getOrderById";
import OrderDetails from "@/components/restaurant/OrderDetails";
import UserOrderDetails from "@/components/UserOrderDetails";

import { File } from "lucide-react";
import React from "react";

const revalidate = 30;
const Page = async ({ params }: { params: { orderid: string } }) => {
  const data = await getOrderById(params?.orderid);
  if (!data) {
    return <div>Invalid Order Id or No Data Found</div>; // Handle case when data is null
  }
  return (
    <div className="w-full py-6">
      <UserOrderDetails data={data} />
    </div>
  );
};

export default Page;
