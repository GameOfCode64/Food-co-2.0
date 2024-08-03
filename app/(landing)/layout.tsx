import getCurrentUser from "@/actions/getUser";
import Navbar from "@/components/Navbar";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();
  let img = currentUser?.image;
  if (img === null) {
    img = "";
  }
  return (
    <>
      <Navbar imgurl={img || ""} />
      {children}
    </>
  );
};

export default layout;
