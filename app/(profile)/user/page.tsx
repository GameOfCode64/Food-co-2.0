"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/user/orders");
  }, [router]);

  return <div>page</div>;
};

export default Page;
