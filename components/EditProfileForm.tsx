"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UpdateProfile } from "@/lib/form-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

interface EditFormProps {
  email: string;
  address: string;
  phoneNumber: string;
  name: string;
}

const EditProfileForm = ({
  email,
  address,
  phoneNumber,
  name,
}: EditFormProps) => {
  // Hooks
  const { toast } = useToast();
  const [isLoading, setisLoading] = useState(false);

  //   Form data
  const form = useForm<z.infer<typeof UpdateProfile>>({
    resolver: zodResolver(UpdateProfile),
    defaultValues: {},
  });
  const onSubmit = async (values: z.infer<typeof UpdateProfile>) => {
    setisLoading(true);
    axios
      .post("/api/users/update", values)
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
  //   body
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full px-4">
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
                  defaultValue={name}
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
                  defaultValue={email}
                  className="my-4 w-full focus:ring-[#FF0000] focus-visible:ring-1 focus-visible:ring-bittersweet-500 rounded-mdprim-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter Phone Number"
                  {...field}
                  defaultValue={phoneNumber}
                  className="my-4 w-full focus:ring-[#FF0000] focus-visible:ring-1 focus-visible:ring-bittersweet-500 rounded-mdprim-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter Address"
                  {...field}
                  defaultValue={address}
                  className="my-4 w-full focus:ring-[#FF0000] focus-visible:ring-1 focus-visible:ring-bittersweet-500 rounded-mdprim-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isLoading}
          className="w-full bg-bittersweet-500 hover:bg-bittersweet-500/80 mt-4"
        >
          Save
        </Button>
      </form>
    </Form>
  );
};

export default EditProfileForm;
