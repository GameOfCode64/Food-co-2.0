"use client";
import { z } from "zod";
import axios from "axios";
import { form2 } from "@/lib/form-schemas";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
import { Fileupload } from "../fileupload";
import { idList } from "@/lib";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";

const Form2 = () => {
  const { toast } = useToast();
  const [isLoading, setisLoading] = useState(false);
  const form = useForm<z.infer<typeof form2>>({
    resolver: zodResolver(form2),
    defaultValues: {},
  });
  const onSubmit = async (values: z.infer<typeof form2>) => {
    setisLoading(true);
    axios
      .post("/api/restaurant/upload", values)
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
    <div className="flex items-center justify-center w-full">
      <div className="md:w-[450px] w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 w-full"
          >
            <FormField
              control={form.control}
              name="idName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Id Name</FormLabel>
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
                          {idList.map((cont) => (
                            <SelectItem key={cont.value} value={cont.value}>
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
              name="idImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">
                    Upload Id Scan Copy{" "}
                    <span className="text-bittersweet-500">*(pdf)</span>
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
            <Button className="py-1 bg-bittersweet-500 hover:bg-bittersweet-500/80 mt-2">
              Save
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Form2;
