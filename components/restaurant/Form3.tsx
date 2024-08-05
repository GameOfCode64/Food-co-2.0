import React from "react";
import Image from "next/image";
import delivery from "@/public/delivery.svg";
import Link from "next/link";
import { Button } from "../ui/button";
const Form3 = () => {
  return (
    <div className="w-full flex h-full items-center justify-center flex-col">
      <h1 className="md:text-3xl text-lg font-extrabold max-w-3xl text-center text-bittersweet-400">
        Congratulations You Restaurant Register Successfully
      </h1>
      <p className="md:max-w-xl text-sm md:text-lg text-center font-medium mt-2">
        Your Restaurant Registration is Complete ! Press to Get Started to start
        Your journey with Food&Co !!!
      </p>
      <Image src={delivery} alt="image" width={250} height={250} />
      <Link href="/restaurant/dashboard">
        <Button className="mt-2 rounded-3xl bg-bittersweet-500 hover:bg-bittersweet-500/80">
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default Form3;
