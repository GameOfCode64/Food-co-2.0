"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SquareArrowOutUpRight } from "lucide-react";
import { UseProfile } from "@/hooks/form-pop";

interface ProfileCardProps {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
}
const ProfileCard = ({
  name,
  email,
  phoneNumber,
  address,
}: ProfileCardProps) => {
  const { onOpen } = UseProfile();
  const [disable, setdisable] = useState(true);

  return (
    <>
      <div className="flex items-center justify-between w-full mt-6 px-2">
        <p className=" text-sm font-medium">User Info</p>
        <p
          onClick={() => onOpen()}
          className="flex text-sm items-center justify-center cursor-pointer hover:text-bittersweet-500"
        >
          <SquareArrowOutUpRight
            size={17}
            className="mr-1 text-bittersweet-500"
          />
          Edit Profile
        </p>
      </div>
      <div className="w-full h-full bg-white mt-4 rounded-md px-4 md:py-8 py-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <label>Name</label>
            <Input
              className="focus-visible:ring-bittersweet-500"
              disabled={disable}
              value={name}
            />
          </div>
          <div>
            <label>Email</label>
            <Input
              className="focus-visible:ring-bittersweet-500"
              disabled={disable}
              value={email}
            />
          </div>
          <div>
            <label>Phone Number</label>
            <Input
              className="focus-visible:ring-bittersweet-500"
              disabled={disable}
              value={phoneNumber === "" ? "Enter Your Number" : phoneNumber}
            />
          </div>
        </div>
        <div className="mt-1">
          <label>Address</label>
          <Textarea
            className="w-full"
            disabled={disable}
            placeholder={address === "" ? "Enter Your Address" : address}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
