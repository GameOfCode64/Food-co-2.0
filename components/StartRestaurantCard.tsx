"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import GetStarted from "./restaurant/GetStarted";
import Form1 from "./restaurant/Form1";
import Form2 from "./restaurant/Form2";
import Form3 from "./restaurant/Form3";
import { useRouter } from "next/navigation";

const slides = [
  {
    title: "Step 1: Basic Info",
    content: <p>Enter your basic information here.</p>,
  },
  {
    title: "Step 2: Restaurant Details",
    content: <p>Enter your restaurant details here.</p>,
  },
  {
    title: "Step 3: Menu Setup",
    content: <p>Setup your menu here.</p>,
  },
  {
    title: "Step 4: Confirmation",
    content: <p>Confirm your details and submit.</p>,
  },
];

const StartRestaurantCard = ({ email }: { email: string }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  if (email !== "") {
    router.push("/restaurant/dashboard");
  }

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return <GetStarted />;
      case 1:
        return <Form1 />;
      case 2:
        return <Form2 />;
      case 3:
        return <Form3 />;
      default:
        return <GetStarted />;
    }
  };

  return (
    <div className="w-full h-full bg-white rounded-md shadow-sm flex items-center justify-center flex-col pb-4">
      <div className="px-8 py-6 flex flex-col items-center justify-center w-full">
        {renderSlide()}
      </div>
      <div className="flex items-center justify-center w-full px-8">
        {currentSlide === 0 ? (
          <Button
            onClick={handleNext}
            className="w-36 rounded-3xl bg-bittersweet-500 hover:bg-bittersweet-500/80 mt-6"
          >
            Get Started
          </Button>
        ) : (
          <>
            <Button
              onClick={handleNext}
              className={cn(
                currentSlide === slides.length - 1
                  ? "hidden"
                  : "w-36 rounded-3xl bg-bittersweet-500 hover:bg-bittersweet-500/80"
              )}
            >
              Next
            </Button>
          </>
        )}
      </div>
      <div className="flex items-center justify-center space-x-3 mt-4">
        {slides.map((_, index) => (
          <span
            key={index}
            className={cn(
              "w-[10px] h-[10px] border-[1px] border-bittersweet-500 rounded-full",
              currentSlide === index ? "bg-bittersweet-500" : ""
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default StartRestaurantCard;
