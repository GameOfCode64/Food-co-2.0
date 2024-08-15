"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  router.push("/");
  return (
    <div className="flex items-center justify-center h-screen">
      No ID Found !
    </div>
  );
};

export default page;
