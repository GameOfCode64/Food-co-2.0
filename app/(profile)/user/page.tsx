"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  router.push("/user/orders");
  return <div>page</div>;
};

export default page;
