"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import empty from "@/public/NotFound.svg";
import Link from "next/link";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { formatCurrency } from "@/lib/currencyFromate";
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface CartItemProps {
  id: string;
  menuId: string;
  categoryId: string;
  name: string;
  description: string | null;
  price: string;
  rating: string | null;
  type: string;
  image: string;
  ordersId: string | null;
  cartId: string | null;
  favoritesId: string | null;
  quantity: number;
}
export const dynamic = "force-dynamic";
const UserCart = () => {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const data = localStorage.getItem("cart");
    if (typeof data === "string") {
      const cart = JSON.parse(data);
      setCartItems(cart);
      calculateTotal(cart);
    }
  }, []);

  const updateCart = (updatedCart: CartItemProps[]) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const calculateTotal = (cart: CartItemProps[]) => {
    const total = cart.reduce(
      (acc, item) => acc + Number(item.price) * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const handleIncrement = (itemId: string) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  const handleDecrement = (itemId: string) => {
    const updatedCart = cartItems
      .map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(updatedCart);
  };

  const handleRemove = (itemId: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    updateCart(updatedCart);
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    if (!stripe) return;
    try {
      // Send cart data to your /api/order endpoint
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cartItems, totalPrice }),
      });

      if (!response.ok) {
        throw new Error("Failed to create order");
      }
      // After sending the order data, create a checkout session
      const checkoutResponse = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cartItems }),
      });
      const session = await checkoutResponse.json();
      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      console.error("Error during checkout", error);
    }
  };

  return (
    <div className="w-full h-full">
      {cartItems.length !== 0 ? (
        <div className="w-full flex flex-col items-center">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <div className="w-full mt-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border-b-[1px] border-[#ccc] py-4 flex justify-between items-center"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-zinc-700">{item.name}</p>
                    <p className="text-sm text-zinc-500">{item.description}</p>
                    <p className="text-sm text-emerald-500 flex items-center">
                      <Star size={15} className="mr-1" /> {item.rating}
                    </p>
                    <p className="font-semibold">
                      {formatCurrency(Number(item.price))}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="px-4 py-2 rounded bg-gray-200"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="px-4 py-2 rounded bg-gray-200"
                  >
                    +
                  </button>
                </div>
                <Button
                  onClick={() => handleRemove(item.id)}
                  className="ml-4 bg-red-500 hover:bg-red-600"
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
          <div className="w-full mt-8 flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              Total:{" "}
              <span className="text-emerald-500">
                {formatCurrency(totalPrice)}
              </span>
            </h3>
            <Button
              onClick={handleCheckout}
              className="px-8 py-2 rounded bg-bittersweet-500 hover:bg-bittersweet-500/80"
            >
              Proceed Checkout
            </Button>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-[250px] h-[250px]">
            <Image src={empty} alt="empty" className="w-full h-full" />
          </div>
          <p className="font-semibold">Cart is empty!</p>
          <Link href="/">
            <Button className="px-8 rounded-3xl py-2 bg-bittersweet-500 mt-8 hover:bg-bittersweet-500/80">
              Search Restaurant
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserCart;
