"use client";
import { z } from "zod";
import axios from "axios";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreateItemSchema } from "@/lib/form-schemas";
import CreateItem from "../custom/input/createItem";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FoodType } from "@/lib/index";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";
import { Fileupload } from "../fileupload";

interface Category {
  name: string;
  id: string;
}

interface CategoryItemProps {
  category: Category[];
}
const CreateItems = ({ category }: CategoryItemProps) => {
  const { toast } = useToast();
  const [isLoading, setisLoading] = useState(false);
  const form = useForm<z.infer<typeof CreateItemSchema>>({
    resolver: zodResolver(CreateItemSchema),
    defaultValues: {},
  });

  const onSubmit = async (values: z.infer<typeof CreateItemSchema>) => {
    setisLoading(true);
    axios
      .post("/api/restaurant/items/category/food/create", values)
      .catch((error) => {
        toast({
          title: `${error}`,
        });
      })
      .then(() => {
        toast({
          title: `Item Create Successfully`,
        });
      })
      .finally(() => {
        setisLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
  };
  return (
    <div className="md:mt-8 mt-6 w-full">
      <h1 className="font-medium text-bittersweet-400">Create New Item</h1>
      <div className="mt-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full grid grid-cols-1 max-w-2xl gap-4"
          >
            <CreateItem
              name="name"
              placeholder="Veg Roll"
              label="Item Name"
              control={form.control}
              type="text"
            />
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Category</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="focus:ring-1 focus:ring-bittersweet-500">
                        <SelectValue placeholder="Select...." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {category.map((cont) => (
                            <SelectItem key={cont.id} value={cont.id}>
                              {cont.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="focus:ring-1 focus:ring-bittersweet-500">
                        <SelectValue placeholder="Select...." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {FoodType.map((food) => (
                            <SelectItem key={food.value} value={food.value}>
                              {food.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CreateItem
              name="price"
              placeholder="₹250"
              label="Item Name"
              control={form.control}
              type="text"
            />
            <CreateItem
              name="rating"
              placeholder="✨4.5"
              label="Food Rating"
              control={form.control}
              type="text"
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Item Description</FormLabel>
                  <FormControl className="w-full">
                    <Textarea
                      placeholder="About Your Food"
                      className="focus-visible:ring-bittersweet-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Item Image</FormLabel>
                  <FormControl className="w-full">
                    <Fileupload
                      endpoint="serverImage"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={isLoading}
              className=" bg-bittersweet-400 hover:bg-bittersweet-400/80"
              type="submit"
            >
              Add Item
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateItems;
