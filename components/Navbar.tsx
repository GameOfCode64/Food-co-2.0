"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/soup.png";
import Link from "next/link";
import { Button } from "./ui/button";
import { BadgePercent, LifeBuoy, Search, ShoppingBag } from "lucide-react";
import { useSession } from "next-auth/react";
import { useCart } from "@/app/context/CartContext";

interface NavbarProps {
  imgurl: string;
}

const Navbar: React.FC<NavbarProps> = ({ imgurl }) => {
  const { getCartCount } = useCart();
  const session = useSession();

  return (
    <nav className="w-full h-[80px] shadow-md">
      <div className="flex items-center justify-between md:px-20 px-4 py-6">
        <Link href="/" className="flex items-center justify-center gap-4">
          <Image src={logo} alt="logo" />
          <p className="font-bold text-xl text-bittersweet-400">Food&CO</p>
        </Link>
        <ul className="flex items-center justify-center space-x-6 font-medium">
          <Link
            href="/offers"
            className="flex items-center justify-center gap-2 hover:text-bittersweet-500"
          >
            <BadgePercent size={17} />
            Offers
          </Link>
          <Link
            href="/search"
            className="flex items-center justify-center gap-2 hover:text-bittersweet-500"
          >
            <Search size={17} />
            Search
          </Link>
          <Link
            href="/help"
            className="flex items-center justify-center gap-2 hover:text-bittersweet-500"
          >
            <LifeBuoy size={17} />
            Help
          </Link>
          <Link href="/cart" className="relative">
            <span className="absolute top-[-15px] text-center right-[-10px] w-[22px] h-[22px] bg-bittersweet-500 flex items-center justify-center rounded-full text-[14px] text-white">
              {getCartCount()}
            </span>
            <ShoppingBag />
          </Link>
          {session.status === "authenticated" ? (
            <>
              <Link href="/user/orders">
                <Image
                  src={
                    imgurl ||
                    "https://firebasestorage.googleapis.com/v0/b/finneltry.appspot.com/o/avatar.png?alt=media&token=55331315-4afd-41c7-932b-3ddbac1da80f"
                  }
                  alt="profile_Image"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Link>
            </>
          ) : (
            <>
              <Link href="/auth">
                <Button className="rounded-3xl px-6 bg-bittersweet-500 hover:bg-bittersweet-600">
                  Sign In
                </Button>
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
