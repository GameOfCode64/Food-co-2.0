import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { CreateItemSchema } from "@/lib/form-schemas";

interface CustominputProps {
  control: Control<z.infer<typeof CreateItemSchema>>;
  name: FieldPath<z.infer<typeof CreateItemSchema>>;
  placeholder: string;
  label: string;
  type: string;
}

const CreateItem = ({
  control,
  name,
  placeholder,
  label,
  type,
}: CustominputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              type={type}
              className="my-4 w-full focus:ring-[#FF0000] focus-visible:ring-1 focus-visible:ring-bittersweet-500 rounded-mdprim-input"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CreateItem;
