import getCurrentUser from "@/actions/getUser";
import Navbar from "@/components/Navbar";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();
  let img = currentUser?.image;
  if (img === null) {
    img =
      "https://firebasestorage.googleapis.com/v0/b/finneltry.appspot.com/o/avatar.png?alt=media&token=55331315-4afd-41c7-932b-3ddbac1da80f";
  }
  return (
    <>
      <Navbar imgurl={img || ""} />
      {children}
    </>
  );
};

export default layout;
