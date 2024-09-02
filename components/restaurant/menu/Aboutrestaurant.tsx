"use client";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

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
    </div>
  );
};

export default Aboutdata;
