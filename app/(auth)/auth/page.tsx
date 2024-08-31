import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/soup.png";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="w-full h-screen ">
      <div className="flex flex-col md:px-12 md:py-8">
        <Link href="/" className="flex items-center  gap-4">
          <Image src={logo} alt="logo" />
          <p className=" font-bold text-xl  text-bittersweet-400">Food&CO</p>
        </Link>
        <div className="py-24">
          <h1 className="text-3xl font-bold text-bittersweet-500">
            Are you a Customer or <br /> a Restaurant?
          </h1>
          <div className="flex items-center space-x-6 mt-12">
            <Link href="/auth/users/sign-in">
              <Button className="bg-bittersweet-500 hover:bg-bittersweet-600">
                Customer
              </Button>
            </Link>
            <Link href="/auth/users/sign-in">
              <Button className="bg-bittersweet-500 hover:bg-bittersweet-600">
                Restaurant
              </Button>
            </Link>
          </div>
          <p className="text-sm pr-12 mt-28 font-medium text-[#333]">
            Food&Co: Bringing irresistible flavors right to your doorstep,
            satisfying your cravings and turning every meal into a delightful
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
