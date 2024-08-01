import Image from "next/image";
import loginBg from "@/public/loginbg.jpg";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-between overflow-y-hidden">
      {children}
      <div className="w-[80%] h-screen">
        <Image
          src={loginBg}
          alt="login Background Image"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default layout;
