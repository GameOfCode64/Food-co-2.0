"use client";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight, LocateIcon, Star } from "lucide-react";
import banner from "@/public/loginbg.jpg";
import Image from "next/image";
import Link from "next/link";
interface DetailsProps {
  name: string | null;
  image: string | null;
  location: string | null;
  rating: string | null;
  speciality: string | null;
}
const RestaurantCard = ({
  name,
  location,
  speciality,
  image,
  rating,
}: DetailsProps) => {
  return (
    <div className="w-full h-full px-2 py-3">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold text-bittersweet-400 text-lg">Top Restaurant</p>
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
        className="flex h-[300px] mt-2"
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
        <SwiperSlide className="w-full h-full  cursor-pointer">
          <div className="w-full h-[65%]">
            <Image
              src={image || banner}
              alt="banner"
              className="w-full h-full object-center rounded-3xl"
              width={400}
              height={400}
            />
            <div className="flex flex-col px-2 py-2">
              <p className="font-bold">{name}</p>
              <p className="flex items-center justify-normal text-emerald-500 font-medium">
                <Star size={17} className="mr-2" />
                {rating} •<span className="ml-2 text-sm">25-35 mins</span>
              </p>
              <p className="text-sm text-[#333] font-medium">{speciality}</p>
              <p className="text-sm text-[#333] font-bold flex items-center justify-normal">
                <LocateIcon className="mr-2 text-emerald-500" size={17} />
                {location}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default RestaurantCard;
