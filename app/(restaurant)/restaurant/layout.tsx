import React from "react";
import { Toaster } from "@/components/ui/toaster";

const RestaurantLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default RestaurantLayout;
