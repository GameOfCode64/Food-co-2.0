import React from "react";
import Image from "next/image";
import delivery from "@/public/delivery.svg";

const GetStarted = () => {
  return (
    <div className="lg:px-8 px-4 py-6 flex flex-col items-center justify-center text-center w-full pb-2">
      <h1 className=" font-extrabold text-3xl text-bittersweet-400 text-wrap">
        Want start Your Restaurant
      </h1>
      <p className="text-[17px] font-medium mt-3 text-[#333] mb-2">
        Start Your Restaurant in Just Three Eazy Steps
      </p>
      <Image src={delivery} alt="Get Started" width={250} height={250} />
    </div>
  );
};

export default GetStarted;
