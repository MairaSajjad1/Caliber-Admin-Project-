import { z } from "zod";

export const signInFormSchema = z.object({
    email: z.coerce.string().email().min(1, { message: "Email is required." }),
    password: z.string().min(1, { message: "Password is required." }),
    rememberme: z.coerce.boolean()
});

// generate form types from zod validation schema
export type SignInInput = z.infer<typeof signInFormSchema>;
