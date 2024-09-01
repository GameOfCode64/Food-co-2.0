import getCurrentUser from "@/actions/getUser";
import EditProfile from "@/components/EditProfile";
import ProfileSidebar from "@/components/ProfileSidebar";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  const CurrentUser = await getCurrentUser();
  return (
    <div className="flex md:space-x-5 bg-[#eeeeee] w-full">
      <ProfileSidebar />
      <EditProfile
        email={CurrentUser?.email || ""}
        phoneNumber={CurrentUser?.phoneNumber || ""}
        address={CurrentUser?.address || ""}
        name={CurrentUser?.name || ""}
      />
      {children}
      <Toaster />
    </div>
  );
};

export default ProfileLayout;
