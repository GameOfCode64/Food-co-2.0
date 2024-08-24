"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import successImage from "@/public/delivery.svg";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/checkout/session?session_id=${sessionId}`)
        .then((response) => response.json())
        .then((data) => {
          setOrderDetails(data);
          localStorage.removeItem("cart");
        })
        .catch((error) => {
          console.error("Error fetching session details:", error);
        });
    }
  }, [sessionId]);

  return (
    <div className="flex flex-col items-center justify-center h-full mt-16">
      <div className="w-[250px] h-[250px] mb-8">
        <Image src={successImage} alt="Success" className="w-full h-full" />
      </div>
      <h1 className="text-3xl font-bold text-emerald-500 mb-4">
        Order Placed Successfully!
      </h1>
      {orderDetails ? (
        <div className="text-center mb-8">
          <p className="text-lg font-semibold">Thank you for your order!</p>
          <p className="text-zinc-600">Order ID: {orderDetails.id}</p>
          <p className="text-zinc-600">
            You will receive an email confirmation shortly.
          </p>
        </div>
      ) : (
        <p className="text-zinc-600 mb-8">Fetching your order details...</p>
      )}
      <Button
        onClick={() => router.push("/")}
        className="px-8 py-2 rounded-xl bg-bittersweet-500 hover:bg-bittersweet-500/80"
      >
        Continue Shopping
      </Button>
    </div>
  );
};

export default SuccessPage;
