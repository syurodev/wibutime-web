import { z } from "zod";

export const SignInSchema = z.object({
  username: z
    .string()
    .trim()
    .min(6, { message: "Tên người dùng phải có ít nhất 6 ký tự" }),
  password: z.string().min(8, { message: "Mật khẩu phải có ít nhất 8 ký tự" }),
});

export type ISignInSchema = z.infer<typeof SignInSchema>;
