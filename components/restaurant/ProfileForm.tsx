"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useToast } from "../ui/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { restaurantProfile } from "@/lib/form-schemas";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Fileupload } from "../fileupload";

interface DetailsProps {
  name: string | null;
  email: string | null;
  phone: string | null;
  location: string | null;
  rating: string | null;
  speciality: string | null;
}
const ProfileForm = ({
  name,
  email,
  phone,
  location,
  rating,
  speciality,
}: DetailsProps) => {
  const { toast } = useToast();
  const [isLoading, setisLoading] = useState(false);

  //   Form data
  const form = useForm<z.infer<typeof restaurantProfile>>({
    resolver: zodResolver(restaurantProfile),
    defaultValues: {},
  });
  const onSubmit = async (values: z.infer<typeof restaurantProfile>) => {
    setisLoading(true);
    axios
      .post("/api/restaurant/update", values)
      .catch((error) => {
        toast({
          title: `${error}`,
        });
      })
      .finally(() => {
        setisLoading(false);
        toast({
          title: `Profile Update SuccessFully`,
        });
        window.location.reload();
      });
  };
  return (
    <div className="pr-9 pl-1 mb-24">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Name"
                    {...field}
                    defaultValue={name || ""}
                    className="my-4 w-full focus:ring-[#FF0000] focus-visible:ring-1 focus-visible:ring-bittersweet-500 rounded-mdprim-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Email"
                    {...field}
                    defaultValue={email || ""}
                    className="my-4 w-full focus:ring-[#FF0000] focus-visible:ring-1 focus-visible:ring-bittersweet-500 rounded-mdprim-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Phone Number"
                    {...field}
                    defaultValue={phone || ""}
                    className="my-4 w-full focus:ring-[#FF0000] focus-visible:ring-1 focus-visible:ring-bittersweet-500 rounded-mdprim-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Location"
                    {...field}
                    defaultValue={location || ""}
                    className="my-4 w-full focus:ring-[#FF0000] focus-visible:ring-1 focus-visible:ring-bittersweet-500 rounded-mdprim-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Rating"
                    {...field}
                    defaultValue={rating || ""}
                    className="my-4 w-full focus:ring-[#FF0000] focus-visible:ring-1 focus-visible:ring-bittersweet-500 rounded-mdprim-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="speciality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Speciality</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Speciality"
                    {...field}
                    defaultValue={speciality || "North Indian, South Indian"}
                    className="my-4 w-full focus:ring-[#FF0000] focus-visible:ring-1 focus-visible:ring-bittersweet-500 rounded-mdprim-input"
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
                <FormLabel className="font-semibold">
                  Upload Background Image
                </FormLabel>
                <FormControl>
                  <Fileupload
                    endpoint="serverImage"
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className="w-full bg-bittersweet-500 hover:bg-bittersweet-500/80 mt-2"
            type="submit"
          >
            Save
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;
