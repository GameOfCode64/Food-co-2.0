"use client";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight, Clock, Star } from "lucide-react";
import banner from "@/public/loginbg.jpg";
import Image from "next/image";
import Link from "next/link";
const RestaurantCard = () => {
  return (
    <div className="w-full h-full px-2 py-3">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold text-bittersweet-400 text-lg">
          Our Top Restaurant
        </p>
        <div className="flex items-center justify-center gap-4">
          <p className="w-[35px] h-[35px] flex items-center justify-center bg-[#0000000e] rounded-full cursor-pointer text-bittersweet-400">
            <ArrowLeft size={18} />
          </p>
          <p className="w-[35px] h-[35px] flex items-center justify-center bg-[#0000000e] rounded-full cursor-pointer text-bittersweet-400">
            <ArrowRight size={18} />
          </p>
        </div>
      </div>
      <Swiper
        className="flex h-[90%] mt-2"
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
        <SwiperSlide className="w-full h-full bg-red-400 rounded-md relative"></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default RestaurantCard;
