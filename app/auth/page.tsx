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

function GoogleIcon(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      height="120"
      viewBox="0 0 48 48"
      width="120"
      x="0px"
      xmlns="http://www.w3.org/2000/svg"
      y="0px"
      {...props}
    >
      <title>Google Logo</title>
      <path
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
        fill="#FFC107"
      />
      <path
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
        fill="#FF3D00"
      />
      <path
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
        fill="#4CAF50"
      />
      <path
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
        fill="#1976D2"
      />
    </svg>
  );
}
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
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
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
              </div>

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