"use client";
import React from "react";
import { Plus } from "lucide-react";
import { useItem } from "@/hooks/additem-pop";

const CreateCategoryBtn = () => {
  const { onOpen } = useItem();
  return (
    <div
      onClick={() => onOpen()}
      className="w-full md:max-w-[250px] px-8 py-6 rounded-md bg-bittersweet-500/20 cursor-pointer mt-6"
    >
      <div className="flex flow-row items-center justify-between">
        <p className="font-bold text-sm">Add New Category</p>
        <p className="w-[35px] h-[35px] bg-bittersweet-500/20 rounded-full flex items-center justify-center">
          <Plus className=" text-bittersweet-400" />
        </p>
      </div>
    </div>
  );
};

export default CreateCategoryBtn;
