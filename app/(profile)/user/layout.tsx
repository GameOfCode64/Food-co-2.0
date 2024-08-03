import ProfileSidebar from "@/components/ProfileSidebar";
import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex space-x-5 bg-[#eeeeee] w-full h-screen">
      <ProfileSidebar />
      {children}
    </div>
  );
};

export default ProfileLayout;
