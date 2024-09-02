import getCurrentUser from "@/actions/getUser";
import ProfileCard from "@/components/ProfileCard";
import Image from "next/image";
import React from "react";
export const dynamic = "force-dynamic";
const page = async () => {
  const CurrentUser = await getCurrentUser();
  return (
    <div className="flex flex-col py-8 w-full md:pr-16">
      <div className="flex items-center justify-normal space-x-6">
        <Image
          src={CurrentUser?.image || ""}
          alt="Profile Photo"
          height={70}
          width={70}
          className=" rounded-full cursor-pointer"
        />
        <div className="flex flex-col">
          <p className="font-bold">{CurrentUser?.name}</p>
          <p className="text-sm text-bittersweet-500 font-medium">
            {CurrentUser?.email}
          </p>
        </div>
      </div>
      <div className="px-4 flex flex-col">
        <ProfileCard
          name={CurrentUser?.name || ""}
          email={CurrentUser?.email || ""}
          phoneNumber={CurrentUser?.phoneNumber || ""}
          address={CurrentUser?.address || ""}
        />
      </div>
    </div>
  );
};

export default page;
