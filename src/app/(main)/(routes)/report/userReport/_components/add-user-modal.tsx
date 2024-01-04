import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { AddUserInput, userFormSchema } from "@/validators/add-user";
import { cn } from "@/utils";
import { Input, Password } from "@/components/ui/input";
import { useState } from "react";

const AddUserModal = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddUserInput>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      password: "",
    },
  });

  const onSubmit = async (data: AddUserInput) => {
    console.log("data", data);
    try {
      setLoading((loading) => !loading);
    } catch (error) {
    } finally {
      setLoading((loading) => !loading);
    }
  };
  return (
    <div className="m-auto px-5 py-7 sm:p-10 space-y-2">
      <h4 className="text-center">Add New User</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          "gap-2 sm:gap-4 flex flex-grow flex-col @container [&_label.block>span]:font-medium"
        )}
      >
        <Input
          label="Name"
          placeholder="Name"
          {...register(`name`)}
          error={errors?.name?.message}
        />
        <Input
          label="Phone Number"
          placeholder="Phone Number"
          {...register(`phoneNumber`)}
          error={errors?.phoneNumber?.message}
        />
        <Password
          label="Password"
          placeholder="Password"
          {...register(`password`)}
          error={errors?.password?.message}
        />
        {/* isLoading={isLoading} */}
        <Button
          className="bg-[#01C4FF] shadow-button active:bg-slate-100 focus:bg-slate-100 hover:bg-[#01C4FF]/90 active:bg-[#01C4FF]/90"
          type="submit"
          isLoading={loading}
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddUserModal;
