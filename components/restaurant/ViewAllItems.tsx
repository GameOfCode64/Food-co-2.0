import React from "react";
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
import { Star } from "lucide-react";

// Interface
interface Items {
  id: string;
  menuId: string;
  categoryId: string;
  name: string;
  description: string | null;
  price: string;
  rating: string | null;
  type: string;
  image: string;
}
interface ItemsProps {
  items: Items[];
}

const ViewAllItems = ({ items }: ItemsProps) => {
  return (
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
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <Image
                src={item.image}
                alt="product Image"
                width={40}
                height={40}
                className=" rounded-md"
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
  );
};

export default ViewAllItems;
