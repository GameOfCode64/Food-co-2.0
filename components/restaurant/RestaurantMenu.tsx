import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import pizza from "@/public/pizza.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Aboutdata from "./menu/Aboutrestaurant";
import getMenu from "@/actions/getMenu";
import play from "@/public/play_store.png";
import app from "@/public/app_store.png";
import Menu from "./menu/Menu";
import getCurrentUser from "@/actions/getUser";

const RestaurantMenu = async ({ menuid }: { menuid: string }) => {
  const data = await getMenu(menuid);
  const currentUser = await getCurrentUser();
  if (data?.menu[0]?.items?.length === undefined) {
    return `Restaurant have No Item Yet!`;
  }
  return (
    <div className="w-full">
      <div className="w-full relative h-[45dvh]">
        <Image
          src={pizza}
          alt="data_image"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#0000005b] rounded-lg">
          <div className="px-4 flex flex-col justify-center h-full">
            <p className="font-extrabold text-white text-3xl">{data?.name}</p>
            <p className="text-sm font-semibold mt-1 text-[#ccc]">
              {data?.speciality}
            </p>
            <p className="flex items-center justify-normal text-sm text-white mt-1 font-semibold">
              <Star size={17} className="text-bittersweet-500 mr-2" />
              {data?.rating}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Tabs defaultValue="menu" className="w-full">
          <TabsList className="flex items-center justify-start bg-transparent">
            <TabsTrigger
              value="menu"
              className="px-8 data-[state=active]:bg-bittersweet-400 font-semibold data-[state=active]:text-white"
            >
              Menu
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="px-8 data-[state=active]:bg-bittersweet-400 font-semibold data-[state=active]:text-white"
            >
              About
            </TabsTrigger>
          </TabsList>
          <TabsContent value="menu">
            <Menu data={data?.menu[0].items} userId={currentUser?.id || ""} />
          </TabsContent>
          <TabsContent value="about">
            <Aboutdata
              name={data?.name || ""}
              phone={data?.phone || ""}
              email={data?.email || ""}
              location={data?.location || ""}
            />
          </TabsContent>
        </Tabs>
      </div>
      <div className="w-full bg-[#eeeeee] h-[300px] md:mt-12 mt-6 rounded-3xl px-2">
        <div className="flex items-center justify-center h-full flex-col">
          <p className="font-extrabold text-[#333] text-center">
            For better experience, download the Food & Co app now
          </p>
          <div className="flex items-center justify-center gap-12 mt-8">
            <Image
              src={play}
              alt="play"
              height={120}
              width={120}
              className="cursor-pointer"
            />
            <Image
              src={app}
              alt="play"
              height={120}
              width={120}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
