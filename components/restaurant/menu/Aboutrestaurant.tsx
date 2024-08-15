import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import play from "@/public/play_store.png";
import app from "@/public/app_store.png";

interface AboutProps {
  name: string | null;
  phone: string | null;
  email: string | null;
  location: string | null;
}

const Aboutdata = ({ name, phone, email, location }: AboutProps) => {
  return (
    <div className="w-full px-2">
      <div className="flex flex-col mt-4">
        <p className="font-bold text-lg text-bittersweet-500">{name}</p>
        <p className="flex items-center justify-normal mt-3 px-2 text-bittersweet-500 font-semibold">
          <MapPin size={17} className="mr-4" />
          {location}
        </p>
        <p className="flex items-center justify-normal mt-3 px-2 text-bittersweet-500 font-semibold">
          <Mail size={17} className="mr-4" />
          {email}
        </p>
        <p className="flex items-center justify-normal mt-3 px-2 text-bittersweet-500 font-semibold">
          <Phone size={17} className="mr-4" />
          +91 {phone}
        </p>
      </div>
      <div className="w-full bg-[#eeeeee] h-[300px] mt-6 rounded-3xl px-2">
        <div className="flex items-center justify-center h-full flex-col">
          <p className="font-extrabold text-[#333] text-center">
            For better experience, download the Food & Co app now
          </p>
          <div className="flex items-center justify-center gap-12 mt-8">
            <Image
              src={play}
              alt="play"
              height={120}
              width={120}
              className="cursor-pointer"
            />
            <Image
              src={app}
              alt="play"
              height={120}
              width={120}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutdata;
