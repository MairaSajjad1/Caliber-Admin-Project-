"use client"
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input, Button } from 'rizzui';
import { AddProductInput, userFormSchema } from "@/validators/add-user";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormData {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
  field7: string;
  field8: string;
  field9: string;
  field10: string;
}

function Page() {

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: AddProductInput) => {
    console.log("data", data);
    try {
      setLoading((loading) => !loading);
    } catch (error) {
    } finally {
      setLoading((loading) => !loading);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddProductInput>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: "",
      sku: "",
      brand: "",
      unit: "",
      barcode: "",
      tax:"",
    },
  });

  return (
    <>
      <div className="bg-[#FFFFFF] p-2 rounded-md overflow-hidden space-y-4">
        <h2>Add New Product</h2>
        <form
          className="gap-4 grid grid-cols-3 justify-center items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Row 1 */}
          <Input
            {...register('field1', { required: 'This field is required' })}
            label="Field 1"
          />
          <Input
            {...register('field2', { required: 'This field is required' })}
            label="Field 2"
          />
          <Input
            {...register('field3', { required: 'This field is required' })}
            label="Field 3"
          />

          {/* Row 2 */}
          <Input
            {...register('field4', { required: 'This field is required' })}
            label="Field 4"
          />

          {/* Row 3 */}
          <Input
            {...register('field5', { required: 'This field is required' })}
            label="Field 5"
          />
          <Input
            {...register('field6', { required: 'This field is required' })}
            label="Field 6"
          />
          <Input
            {...register('field7', { required: 'This field is required' })}
            label="Field 7"
          />

          {/* Row 4 */}
          <Input
            {...register('field8', { required: 'This field is required' })}
            label="Field 8"
          />
          <Input
            {...register('field9', { required: 'This field is required' })}
            label="Field 9"
          />
          <Input
            {...register('field10', { required: 'This field is required' })}
            label="Field 10"
          />

        <div>
        <Button
          className="bg-[#01C4FF] shadow-button active:bg-slate-100 focus:bg-slate-100 hover:bg-[#01C4FF]/90 active:bg-[#01C4FF]/90"
          type="submit"
          isLoading={loading}
        >
          Create Product
        </Button>
        </div>
        </form>
      </div>
    </>
  );
}

export default Page;
