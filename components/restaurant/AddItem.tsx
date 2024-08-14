"use client";
import axios from "axios";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useItem } from "@/hooks/additem-pop";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { itemsSchema } from "@/lib/form-schemas";

// !

const AddCategory = () => {
  const [isLoading, setisLoading] = useState(false);
  const { isOpen, onClose, onOpen } = useItem();

  // Form
  const form = useForm<z.infer<typeof itemsSchema>>({
    resolver: zodResolver(itemsSchema),
    defaultValues: {},
  });
  const onSubmit = async (values: z.infer<typeof itemsSchema>) => {
    console.log(values);
    setisLoading(true);
    axios
      .post("/api/restaurant/items/category/create", values)
      .catch((error) => {
        toast({
          title: `${error}`,
        });
      })
      .finally(() => {
        toast({
          title: `Category Added Successfully`,
        });
        setisLoading(false);
        window.location.reload();
      });
  };
  //
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => (open ? onOpen() : onClose())}
    >
      <DialogContent>
        <DialogTitle className="mb-2">Add New Category</DialogTitle>
        <div className="w-full relative">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full mt-4"
            >
              <FormField
                control={form.control}
                name="categoryName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      Enter Category Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="South Indian"
                        className="w-full focus-visible:ring-bittersweet-500"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-bittersweet-400 hover:bg-bittersweet-400/80 mt-4"
                onClick={() => console.log("click")}
              >
                Add Category
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategory;
