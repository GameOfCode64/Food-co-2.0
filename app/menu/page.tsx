"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      No ID Found !
    </div>
  );
};

export default page;
