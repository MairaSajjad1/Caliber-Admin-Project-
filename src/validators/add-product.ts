import { z } from "zod";

export const userFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  sku: z.string().min(1, { message: "Name is required." }),
  type: z.string().min(1, { message: "Name is required." }),
  brand: z.string().min(1, { message: "Name is required." }),
  unit: z.string().min(1, { message: "Name is required." }),
  barcide: z.string().min(1, { message: "Name is required." }),
  tax: z.string().min(1, { message: "Name is required." }),
  profit: z.string().min(1, { message: "Name is required." }),
  stock: z.string().min(1, { message: "Name is required." }),

  
});

// generate form types from zod validation schema
export type AddProductInput = z.infer<typeof userFormSchema>;
