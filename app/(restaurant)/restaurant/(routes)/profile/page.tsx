import React from "react";
import restBg from "@/public/restbg.jpg";
import Image from "next/image";
import { Star } from "lucide-react";
import RestaurantDetails from "@/components/restaurant/RestaurantDetails";
const page = () => {
  return (
    <div className="w-full h-full md:py-8 py-4">
      <div className="w-full h-[40dvh] relative ">
        <Image
          src={restBg}
          alt="Banner_image"
          className="w-full h-full object-cover rounded-md z-0"
        />
        <div className="w-full absolute h-full z-10 top-0 left-0 bg-[#0000006b] rounded-md">
          <div className="flex justify-center px-6 h-full flex-col">
            <h1 className="text-3xl font-extrabold text-white">Eat & Code</h1>
            <p className=" text-[#ccc] text-sm font-medium mt-2">
              South Indian, North Indian
            </p>
            <p className="flex items-center justify-normal mt-2 text-white">
              <Star size={17} className=" text-bittersweet-400 mr-2" />
              4.6
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <RestaurantDetails />
      </div>
    </div>
  );
};

export default page;
