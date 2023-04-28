import { z } from "zod";

export const validationSchema = z.object({
  username: z
    .string({ required_error: "名前は必須です。" })
    .min(4, { message: "名前は４文字以上で入力してください。" }),
  email: z
    .string({ required_error: "メールアドレスは必須です。" })
    .email("正しいメールアドレスを入力してください。"),
  password: z
    .string({ required_error: "パスワードは必須です。" })
    .min(6, "パスワードは６文字以上で入力してください。"),
});
