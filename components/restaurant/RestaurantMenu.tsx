import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import pizza from "@/public/pizza.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Aboutdata from "./menu/Aboutrestaurant";
import getMenu from "@/actions/getMenu";
import { formatCurrency } from "@/lib/currencyFromate";
import { number } from "zod";
import { cn } from "@/lib/utils";

const dataMenu = async ({ menuid }: { menuid: string }) => {
  const data = await getMenu(menuid);

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
            <div className="w-full mt-8 flex flex-col h-full">
              <p className="font-bold text-bittersweet-400">
                Total Items ({data?.menu[0]?.items?.length})
              </p>
              {data?.menu[0].items.map((item, index) => (
                <div className="mt-4 md:w-[80%] w-full" key={index}>
                  <div className="w-full h-[200px] border-b-[1px] border-zinc-400 md:px-6 px-2 relative">
                    <div
                      className={cn(
                        "absolute w-[25px] h-[25] px-1 py-[6px] border-2 rounded-md flex items-center justify-center top-0 left-0",
                        item.type === "veg"
                          ? `border-emerald-500`
                          : "border-[#e43554]"
                      )}
                    >
                      <div
                        className={cn(
                          `w-[10px] h-[10px] top-0 left-0 rounded-full`,
                          item.type === "veg"
                            ? `bg-emerald-500`
                            : "bg-[#e43554]"
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
                        <div className=" absolute flex items-center justify-center bottom-[-5%] w-full">
                          <button className="px-8 py-2 rounded-xl cursor-pointer bg-bittersweet-400 text-white font-bold">
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
    </div>
  );
};

export default dataMenu;
