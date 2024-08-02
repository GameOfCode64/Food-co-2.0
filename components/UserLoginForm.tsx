"use client";
import { SignInformSchema } from "@/lib/schema/userForm";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import LoginInput from "@/components/custom/input/login-input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import google from "@/public/google.png";
import Link from "next/link";
import { signIn } from "next-auth/react";

const UserLoginForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof SignInformSchema>>({
    resolver: zodResolver(SignInformSchema),
    defaultValues: {},
  });
  const onSubmit = async (values: z.infer<typeof SignInformSchema>) => {
    signIn("credentials", {
      ...values,
      redirect: false,
    }).then((callback) => {
      if (callback?.error) {
        toast({
          title: `Invalid Email or Password`,
        });
      }
      if (callback?.ok && !callback?.error) {
        toast({
          title: `Login Success`,
        });
      }
    });
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="md:w-[400px] md:p-0 px-4 w-full bg-[#f5f7f7] shadow-sm">
        <div className="flex flex-col px-4 py-6">
          <h1 className="text-center font-medium text-[14px]">
            Sign in to <span className=" text-bittersweet-500">Food&Co</span>
          </h1>
          <p className="text-center font-medium text-[12px]">
            Welcome back! Please sign in to continue
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full mt-4"
            >
              <LoginInput
                placeholder="Enter Your Email"
                name="email"
                control={form.control}
                label="Email"
                type="text"
              />
              <LoginInput
                placeholder="Enter Your Password"
                name="password"
                control={form.control}
                label="Password"
                type="password"
              />
              <Button className="w-full mt-4 bg-bittersweet-500 hover:bg-bittersweet-600">
                Login
              </Button>
            </form>
            <div className="flex w-full items-center justify-center px-4 gap-3 my-4">
              <span className="w-full h-[1px] bg-[#ccc]" />
              or
              <span className="w-full h-[1px] bg-[#ccc]" />
            </div>
            <button className="py-2 rounded-md px-4 my-3 flex items-center hover:bg-[#00000018] justify-normal font-semibold bg-[#eeeeee] text-sm">
              <Image
                src={google}
                alt="Google"
                width={25}
                height={25}
                className="mr-4"
              />
              Sign in with Google
            </button>
            <p className="text-[14px] mt-4 text-center">
              New to Food&Co?{" "}
              <Link
                href="/auth/users/sign-up"
                className="text-bittersweet-500 hover:underline"
              >
                Create Account
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UserLoginForm;
