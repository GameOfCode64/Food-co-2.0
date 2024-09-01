"use client"; // Ensure this is at the top of the file

import "swiper/css";
import React from "react";
import banner from "@/public/loginbg.jpg";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { LocateIcon, Star } from "lucide-react";

export interface FoodProps {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  location: string | null;
  image: string | null;
  rating: string | null;
  speciality: string | null;
}

const SliderCard = ({ data }: { data: FoodProps[] }) => {
  if (!data || data.length === 0) {
    return <p>No restaurants found.</p>;
  }

  return (
    <Swiper
      className="flex md:h-[300px] h-[400px] mt-2"
      spaceBetween={30}
      slidesPerView={4}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1080: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {data.map((restaurant) => (
        <SwiperSlide
          className="w-full h-full cursor-pointer"
          key={restaurant.id}
        >
          <Link href={`/menu/${restaurant.id}`}>
            <div className="w-full h-[65%]">
              <Image
                src={restaurant.image || banner}
                alt={restaurant.name || "Restaurant Image"}
                className="w-full h-full object-center rounded-3xl"
                width={400}
                height={400}
              />
              <div className="flex flex-col px-2 py-2">
                <p className="font-bold">{restaurant.name}</p>
                <p className="flex items-center justify-normal text-emerald-500 font-medium">
                  <Star size={17} className="mr-2" />
                  {restaurant.rating} •
                  <span className="ml-2 text-sm">25-35 mins</span>
                </p>
                <p className="text-sm text-[#333] font-medium">
                  {restaurant.speciality}
                </p>
                <p className="text-sm text-[#333] font-bold flex items-center justify-normal">
                  <LocateIcon className="mr-2 text-emerald-500" size={17} />
                  {restaurant.location}
                </p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderCard;
