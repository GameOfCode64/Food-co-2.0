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
import { OrderTabelProps } from "@/lib";
import Image from "next/image";
import { formatCurrency } from "@/lib/currencyFromate";
import { Info } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";

const OrderTable = ({ data }: OrderTabelProps) => {
  return (
    <div className="mt-4">
      <Table>
        <TableCaption>A list of your Orders</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Info</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((order) =>
            order.Item.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Image
                    src={item?.image || ""}
                    alt="food Image"
                    width={500}
                    height={500}
                    className="rounded-md w-[70px] h-[70px]"
                  />
                </TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell className="font-medium text-emerald-500">
                  {formatCurrency(item.price)}
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
                <TableCell className="cursor-pointer flex items-center mt-3">
                  <p
                    className={cn(
                      "font-medium px-4 py-3 rounded-3xl",
                      order.status === "Pending"
                        ? " bg-yellow-500/20"
                        : order.status === "Preparing"
                        ? "bg-indigo-500/20"
                        : order.status === "Out for Delivery"
                        ? "bg-bittersweet-500/20"
                        : "bg-emerald-500/20"
                    )}
                  >
                    {order.status}
                  </p>
                </TableCell>
                <TableCell className="cursor-pointer">
                  <Info className="" />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderTable;
