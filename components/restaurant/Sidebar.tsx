"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebar } from "@/lib";
import { cn } from "@/lib/utils";
import { Headset } from "lucide-react";
import { Button } from "../ui/button";

const RestaurantSidebar = () => {
  const pathName = usePathname();
  return (
    <div className="h-screen relative w-full shadow-sm max-w-[270px] ">
      <div className="flex fixed flex-col px-4 h-full py-8 w-full bg-[#eeeeee] max-w-[270px] items-center justify-between">
        <div className="space-y-1 w-full">
          {sidebar.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-bittersweet-500 hover:bg-bittersweet-500/20 rounded-lg transition",
                pathName === link.href
                  ? "text-bittersweet-500 bg-bittersweet-500/20"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <link.icon className="h-5 w-5 mr-3" />
                <p>{link.label}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full h-[200px] rounded-md bg-bittersweet-300">
          <div className="w-full h-full flex items-center justify-center flex-col">
            <div className="flex items-center justify-center cursor-pointer rounded-full w-[50px] h-[50px] bg-white">
              <Headset className=" text-bittersweet-400" />
            </div>
            <p className="py-4 font-bold text-white">Help Center</p>
            <Link href="/help">
              <Button className="rounded-3xl bg-bittersweet-500 hover:bg-bittersweet-500/80 px-8">
                Need Help
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSidebar;
