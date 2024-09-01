"use client";
import { NavLinks } from "@/lib";
import { cn } from "@/lib/utils";
import { ArrowLeft, Power } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProfileSidebar = () => {
  const pathName = usePathname();

  return (
    <div className="lg:block hidden w-[300px] bg-white">
      <div className="flex flex-col items-center  py-8  ">
        <Link
          href="/"
          className="flex items-center justify-center text-bittersweet-500"
        >
          <ArrowLeft size={17} className="mr-3" />
          <p>Back to Home</p>
        </Link>

        <div className="mt-12">
          <div className="space-y-1 w-full">
            {NavLinks.map((link, index) => (
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
            <p
              onClick={() => signOut()}
              className="flex cursor-pointer  items-center justify-normal px-4 bg-bittersweet-500/80 py-2 rounded-md text-white"
            >
              <Power size={17} className="mr-3" />
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
