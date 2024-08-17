import getCurrentUser from "@/actions/getUser";
import Navbar from "@/components/Navbar";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();
  return (
    <div className="w-full">
      <Navbar
        imgurl={
          currentUser?.image ||
          "https://firebasestorage.googleapis.com/v0/b/finneltry.appspot.com/o/avatar.png?alt=media&token=55331315-4afd-41c7-932b-3ddbac1da80f"
        }
      />
      {children}
    </div>
  );
};

export default layout;
