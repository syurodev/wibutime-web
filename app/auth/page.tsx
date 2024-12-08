"use client";
import React, { SVGProps, useEffect } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/shadcn/button";
import { Input } from "@/components/ui/shadcn/input";
import { opacity } from "@/common/motions/opacity.motion";
import {
  ISignInSchema,
  SignInSchema,
} from "@/common/validations/sign-in.validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/shadcn/form";
import {
  ISignUpSchema,
  SignUpSchema,
} from "@/common/validations/sign-up.validation";
import GoogleIcon from "@/components/svg/google.svg";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page =
    ["login", "register"].find((x) => x === searchParams.get("page")) ??
    "login";

  const changePage = (page: string) => {
    router.push(`/auth?page=${page}`);
  };

  const form = useForm<ISignInSchema | ISignUpSchema>({
    resolver: zodResolver(page === "login" ? SignInSchema : SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    },
  });

  useEffect(() => {
    form.reset({ email: "", password: "", confirmPassword: "", username: "" });
  }, [page, form]);

  function onSubmit(values: ISignInSchema | ISignUpSchema) {
    if (page === "login") {
    } else {
    }
    console.log(values);
  }

  return (
    <section className="min-h-dvh relative flex size-full max-h-full items-center justify-center bg-cover px-2 py-6 md:px-12 lg:justify-end lg:p-0 ">
      <motion.div
        layout
        className="relative z-10 flex flex-1 flex-col rounded-3xl border-white/50 border-t bg-white/60 px-4 py-10 backdrop-blur-xl sm:justify-center md:flex-none md:px-20 lg:rounded-r-none lg:border-t-0 lg:border-l lg:py-24 shadow-sm"
      >
        <div className="mx-auto w-full max-w-md sm:px-4 md:w-[900px] md:max-w-md md:px-0">
          <motion.div
            layout
            className="font-semibold text-3xl text-primary tracking-tighter"
            variants={opacity}
            animate="animate"
            initial="initial"
            exit="exit"
          >
            <span>Enjoy Light Novels, Manga, and Anime,</span>
            <span className="text-main_color"> All in One Place.</span>
          </motion.div>
          <motion.p
            layout
            className="mt-4 font-medium text-base text-neutral-500"
            variants={opacity}
            animate="animate"
            initial="initial"
            exit="exit"
          >
            Discover your favorite stories and anime anytime, anywhere with
            Wibutime. Dive into the world of captivating content in seconds.
          </motion.p>

          <motion.div
            className="mt-8"
            layout
            key={"google"}
            variants={opacity}
            animate="animate"
            initial="initial"
            exit="exit"
          >
            <Button
              aria-label="Sign in with Google"
              className="inline-flex w-full items-center justify-center gap-3"
              size={"lg"}
              type="button"
            >
              <GoogleIcon className="size-7" />
              <span>Sign in with Google</span>
            </Button>
            <motion.div
              layout
              className="relative py-3"
              key={"email"}
              variants={opacity}
              animate="animate"
              initial="initial"
              exit="exit"
            >
              <div className="relative flex justify-center">
                <span className="before:-translate-y-1/2 after:-translate-y-1/2 px-2 text-neutral-500 text-sm before:absolute before:top-1/2 before:left-0 before:h-px before:w-4/12 after:absolute after:top-1/2 after:right-0 after:h-px after:w-4/12 sm:after:bg-neutral-300 sm:before:bg-neutral-300">
                  Or continue with
                </span>
              </div>
            </motion.div>
          </motion.div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              {/* Email */}
              {page === "register" && (
                <motion.div
                  layout
                  key={"email"}
                  variants={opacity}
                  animate="animate"
                  initial="initial"
                  exit="exit"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            id="email"
                            placeholder="job@example.com"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}

              {/* Username */}
              <motion.div
                layout
                key={"username"}
                variants={opacity}
                animate="animate"
                initial="initial"
                exit="exit"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          id="username"
                          placeholder="Username or email"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              {/* Password */}
              <motion.div
                layout
                key={"password"}
                variants={opacity}
                animate="animate"
                initial="initial"
                exit="exit"
              >
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          id="password"
                          placeholder="Type password here..."
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              {/* Confirm Password */}
              {page === "register" && (
                <motion.div
                  layout
                  key={"confirmPassword"}
                  variants={opacity}
                  animate="animate"
                  initial="initial"
                  exit="exit"
                >
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            id="confirmPassword"
                            placeholder="Retype password here..."
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.div
                className="col-span-full mt-4"
                layout
                key={"login-or-register"}
                variants={opacity}
                animate="animate"
                initial="initial"
                exit="exit"
              >
                <Button
                  variant={"blur"}
                  type="submit"
                  size={"lg"}
                  className="w-full"
                >
                  {page === "login" ? "Sign in" : "Sign up"}
                </Button>
              </motion.div>
              <div className="mt-6 text-sm">
                <motion.span
                  className="mx-auto font-medium text-black leading-tight"
                  layout
                  key={"footer-text"}
                  variants={opacity}
                  animate="animate"
                  initial="initial"
                  exit="exit"
                >
                  {page === "login"
                    ? "Not have a account?"
                    : "Already have a account?"}
                </motion.span>
                <motion.button
                  className="hover:text-black ml-1 underline cursor-pointer"
                  onClick={() =>
                    changePage(page === "login" ? "register" : "login")
                  }
                  type="button"
                  layout
                  key={"footer-button"}
                  variants={opacity}
                  animate="animate"
                  initial="initial"
                  exit="exit"
                >
                  {page === "login" ? "Sign up now" : "Sign in now"}
                </motion.button>
              </div>
            </form>
          </Form>
        </div>
      </motion.div>
      <Image
        src={"/images/auth.jpg"}
        alt="Login Image"
        fill
        className="object-cover"
      />
    </section>
  );
};

export default Page;
