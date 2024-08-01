import Image from "next/image";
import React from "react";
import logo from "@/public/soup.png";
import Link from "next/link";
import { Button } from "./ui/button";
import { BadgePercent, LifeBuoy, Search, ShoppingBag } from "lucide-react";
const Navbar = () => {
  const count = 0;
  return (
    <nav className="w-full h-[80px] shadow-md">
      <div className="flex items-center justify-between md:px-20 px-4 py-6">
        <Link href="/" className="flex items-center justify-center gap-4">
          <Image src={logo} alt="logo" />
          <p className=" font-bold text-xl  text-bittersweet-400">Food&CO</p>
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
            help
          </Link>
          <Link href="/cart" className="relative">
            <span className="absolute top-[-15px] text-center right-[-10px] w-[22px] h-[22px] bg-bittersweet-500 flex items-center justify-center rounded-full text-[14px] text-white">
              {count}
            </span>
            <ShoppingBag />
          </Link>
          <Link href="/auth">
            <Button className=" rounded-3xl px-6 bg-bittersweet-500 hover:bg-bittersweet-600">
              Sign In
            </Button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
