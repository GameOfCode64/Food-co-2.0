"use client";
import { z } from "zod";
import React, { useState } from "react";
import axios from "axios";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { form1 } from "@/lib/form-schemas";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import Form1Input from "../custom/input/restForm1";

const Form1 = () => {
  // hooks
  const { toast } = useToast();
  const [isLoading, setisLoading] = useState(false);
  //
  const form = useForm<z.infer<typeof form1>>({
    resolver: zodResolver(form1),
    defaultValues: {},
  });
  const onSubmit = async (values: z.infer<typeof form1>) => {
    setisLoading(true);
    axios
      .post("/api/restaurant/info", values)
      .catch((error) => {
        toast({
          title: `${error}`,
        });
      })
      .finally(() => {
        toast({
          title: `Data Upload Successfully`,
        });
        setisLoading(false);
      });
  };
  return (
    <div className="w-full flex justify-center items-center">
      <div className="md:w-[650px] w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 w-full "
          >
            <Form1Input
              name="name"
              type="text"
              placeholder="Enter Restaurant Name"
              control={form.control}
              label="Restaurant Name"
            />
            <Form1Input
              name="email"
              type="text"
              placeholder="restaurant@email.com"
              control={form.control}
              label="Email"
            />
            <Form1Input
              name="phoneNumber"
              type="text"
              placeholder="+91 1234567890"
              control={form.control}
              label="Phone Number"
            />
            <Form1Input
              name="address"
              type="text"
              placeholder="Delhi"
              control={form.control}
              label="Restaurant Location"
            />
            <Button
              disabled={isLoading}
              className="my-4 bg-bittersweet-500 hover:bg-bittersweet-500/80"
            >
              Save
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Form1;
