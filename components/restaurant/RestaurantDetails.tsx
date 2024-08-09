import { ExternalLink } from "lucide-react";
import React from "react";

const RestaurantDetails = () => {
  return (
    <div className="px-4 w-full h-full">
      <div className="flex flex-row items-center justify-between">
        <p className="font-semibold">Edit Profile</p>
        <p>
          <ExternalLink
            className="text-bittersweet-500 cursor-pointer"
            size={22}
          />
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1"></div>
    </div>
  );
};

export default RestaurantDetails;
