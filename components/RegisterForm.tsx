"use client";
import axios from "axios";
import { SignUpformSchema } from "@/lib/form-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SignUpInput from "./custom/input/signup-input";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const form = useForm<z.infer<typeof SignUpformSchema>>({
    resolver: zodResolver(SignUpformSchema),
    defaultValues: {},
  });
  const onSubmit = async (values: z.infer<typeof SignUpformSchema>) => {
    setisLoading(true);
    axios
      .post("/api/register", values)
      .catch((error) => {
        toast({
          title: `${error}`,
        });
      })
      .finally(() => {
        toast({
          title: `User Register Successfully`,
        });
        setisLoading(false);
        router.push("/auth/users/sign-in");
      });
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="md:w-[400px] md:p-0 px-4 w-full bg-[#f5f7f7] shadow-sm">
        <div className="flex flex-col px-4 py-6">
          <h1 className="text-center font-medium text-[14px]">
            Sign Up to <span className=" text-bittersweet-500">Food&Co</span>
          </h1>
          <p className="text-center font-medium text-[12px]">
            Welcome Sir ! Please sign up to continue
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full mt-4"
            >
              <SignUpInput
                placeholder="Enter Your Name"
                name="fullName"
                control={form.control}
                label="FullName"
                type="text"
              />
              <SignUpInput
                placeholder="Enter Your Email"
                name="email"
                control={form.control}
                label="Email"
                type="text"
              />
              <SignUpInput
                placeholder="Enter Your Email"
                name="password"
                control={form.control}
                label="Password"
                type="password"
              />
              <SignUpInput
                placeholder="Enter Your Password"
                name="Cpassword"
                control={form.control}
                label="Confirm Password"
                type="password"
              />
              <SignUpInput
                placeholder="Enter Your Password"
                name="phoneNumber"
                control={form.control}
                label="Mobile Number"
                type="number"
              />
              <Button
                disabled={isLoading}
                className="w-full mt-4 bg-bittersweet-500 hover:bg-bittersweet-600"
              >
                Sign Up
              </Button>
            </form>
            <p className="text-[14px] mt-4 text-center">
              Already have Account?{" "}
              <Link
                href="/auth/users/sign-in"
                className="text-bittersweet-500 hover:underline"
              >
                Sign In
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
