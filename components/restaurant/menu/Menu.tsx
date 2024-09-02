"use client";
import { formatCurrency } from "@/lib/currencyFromate";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useCart } from "@/app/context/CartContext"; // Adjust the import path

interface Data {
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
}

interface MenuProps {
  data: Data[];
  userId: string;
}

const Menu = ({ data }: MenuProps) => {
  const { cart, addToCart, updateQuantity } = useCart();

  const getCartItem = (id: string) => {
    return cart.find((cartItem) => cartItem.id === id);
  };

  const handleAddToCart = (item: Data) => {
    const cartItem = { ...item, quantity: 1 };
    addToCart(cartItem);
  };

  const incrementQuantity = (id: string) => {
    const cartItem = getCartItem(id);
    if (cartItem) {
      updateQuantity(id, cartItem.quantity + 1);
    }
  };

  const decrementQuantity = (id: string) => {
    const cartItem = getCartItem(id);
    if (cartItem) {
      updateQuantity(id, Math.max(cartItem.quantity - 1, 0));
    }
  };

  return (
    <div className="w-full mt-8 flex flex-col h-full">
      <p className="font-bold text-bittersweet-400">
        Total Items ({data?.length})
      </p>
      {data?.map((item) => {
        const cartItem = getCartItem(item.id);
        return (
          <div className="mt-4 md:w-[80%] w-full" key={item.id}>
            <div className="w-full h-[200px] border-b-[1px] border-[#ccc] md:px-6 px-2 relative">
              <div
                className={cn(
                  "absolute w-[25px] h-[25px] px-1 py-[6px] border-2 rounded-md flex items-center justify-center top-0 left-0",
                  item.type === "veg"
                    ? `border-emerald-500`
                    : "border-[#e43554]"
                )}
              >
                <div
                  className={cn(
                    `w-[10px] h-[10px] top-0 left-0 rounded-full`,
                    item.type === "veg" ? `bg-emerald-500` : "bg-[#e43554]"
                  )}
                />
              </div>
              <div className="w-full h-full flex items-center justify-between">
                <div className="flex flex-col space-y-1">
                  <p className="font-bold text-zinc-700">{item.name}</p>
                  <p className="font-semibold text-zinc-700">
                    {formatCurrency(Number(item.price))}
                  </p>
                  <p className="flex items-center justify-normal text-emerald-500 font-semibold">
                    <Star size={17} className="mr-1" /> {item.rating}
                  </p>
                  <p className="text-wrap text-zinc-500 text-sm">
                    {item.description}
                  </p>
                </div>
                <div className="w-[150px] h-[150px] rounded-3xl relative">
                  <Image
                    src={item.image}
                    alt="image"
                    width={750}
                    height={750}
                    className="w-full h-full object-center rounded-3xl"
                  />
                  <div className="absolute flex items-center justify-center bottom-[-5%] w-full">
                    {!cartItem || cartItem.quantity === 0 ? (
                      <button
                        className="px-8 py-2 rounded-xl cursor-pointer bg-bittersweet-400 text-white font-bold ml-4"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add
                      </button>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <button
                          className="px-3 py-1 rounded-xl cursor-pointer text-white bg-bittersweet-500 font-bold"
                          onClick={() => decrementQuantity(item.id)}
                        >
                          -
                        </button>
                        <span className="font-semibold">
                          {cartItem.quantity}
                        </span>
                        <button
                          className="px-3 py-1 rounded-xl cursor-pointer bg-bittersweet-400 text-white font-bold"
                          onClick={() => incrementQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
