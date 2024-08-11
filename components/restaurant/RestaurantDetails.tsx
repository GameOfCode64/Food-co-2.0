"use client";
import { UserPen } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { UseRestaurant } from "@/hooks/restaurant-popUp";

interface DetailsProps {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  location: string | null;
  rating: string | null;
}
const RestaurantDetails = ({
  id,
  name,
  email,
  phone,
  location,
  rating,
}: DetailsProps) => {
  const { onOpen } = UseRestaurant();
  return (
    <div className="px-4 w-full h-full">
      <div className="flex flex-row items-center justify-between">
        <p className="font-semibold">Edit Profile</p>
        <p>
          <UserPen
            className="text-bittersweet-500 cursor-pointer"
            size={22}
            onClick={onOpen}
          />
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-4 gap-5 mb-8">
        <div className="flex flex-col space-y-2">
          <label>Name</label>
          <Input disabled defaultValue={name || "No Name"} />
        </div>
        <div>
          <label>Email</label>
          <Input disabled defaultValue={email || "No Email"} />
        </div>
        <div>
          <label>Phone Number</label>
          <Input disabled defaultValue={phone || "No Phone Number"} />
        </div>
        <div>
          <label>Location</label>
          <Input disabled defaultValue={location || "No Location"} />
        </div>
        <div>
          <label>Rating</label>
          <Input disabled defaultValue={rating || "No Rating"} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
