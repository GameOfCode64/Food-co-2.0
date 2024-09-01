"use client";
import React, { useState } from "react";
import { OrderProps } from "@/lib";
import { File, Star } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { formatCurrency } from "@/lib/currencyFromate";
import { Button } from "@/components/ui/button";

const UserOrderDetails = ({ data }: OrderProps) => {
  if (!data) {
    return "Invalid Order Id";
  }

  return (
    <div className="w-full h-full">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <p className="font-medium">
            <span className="font-bold">Order Id:</span> #{data.id}
          </p>
          <button className="px-3 border-[#ccc] border-[1px] py-1 rounded-md font-semibold flex items-center justify-center ">
            <File size={16} className="mr-2" /> Invoice
          </button>
        </div>
        <hr className="w-full h-[1px] bg-black/25 mt-4" />
        <div className="flex items-center justify-between my-8">
          <p className="font-semibold">Order Status</p>
          <div className="flex flex-row space-x-4">
            <p className="rounded-3xl px-6 py-3 font-bold text-bittersweet-500 bg-bittersweet-400/20  hover:bg-bittersweet-400/20">
              {data?.status}
            </p>
          </div>
        </div>
        {/* Order Section */}
        <div className="w-full mt-6 shadow-md rounded-md px-4 py-6">
          <h1 className="text-lg font-bold text-bittersweet-500 mb-4">
            Order Info
          </h1>
          <Table>
            <TableCaption>A list of your Menu Items</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.Item.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Image
                      src={item.image || ""}
                      alt="product Image"
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="font-medium text-bittersweet-400">
                    ₹{item.price}
                  </TableCell>
                  <TableCell>
                    {item.type === "veg" ? (
                      <div className="flex items-center justify-normal">
                        <span className="w-[10px] h-[10px] bg-emerald-500 rounded-full mr-2" />
                        <p className="uppercase font-medium text-emerald-500">
                          {item.type}
                        </p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-normal">
                        <span className="w-[10px] h-[10px] bg-rose-600 rounded-full mr-2" />
                        <p className="uppercase font-medium text-rose-600">
                          {item.type}
                        </p>
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="font-medium text-bittersweet-400 flex items-center justify-normal">
                    <Star size={16} className="mr-2" />
                    {item.rating}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/* User Section */}
        <div className="w-full mt-6 shadow-md rounded-md px-4 py-6">
          <h1 className="text-lg font-bold text-bittersweet-500 mb-4">
            User Info
          </h1>
          <div className="max-w-2xl w-full">
            <p className="font-semibold flex items-center justify-between ">
              Phone Number: <span>{data?.phone}</span>
            </p>
            <p className="font-semibold flex items-center flex-wrap md:justify-between">
              Address: <span className="">{data?.address}</span>
            </p>
            <p className="font-semibold flex items-center justify-between">
              Order Status: <span className="text-wrap">{data?.status}</span>
            </p>
            <p className="font-semibold flex items-center justify-between">
              Payment Status:{" "}
              <span className="text-wrap text-emerald-500">
                {data?.paymentStatus}
              </span>
            </p>
            <p className="font-semibold flex items-center justify-between">
              SubTotal:{" "}
              <span className="text-wrap text-emerald-500">
                {formatCurrency(Number(data?.total))}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOrderDetails;
