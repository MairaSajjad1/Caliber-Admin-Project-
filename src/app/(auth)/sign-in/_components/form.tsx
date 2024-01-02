"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input, Password } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { SignInInput, signInFormSchema } from "@/validators/sign-in";
import { cn } from "@/utils";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";

const Form = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInput>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberme: false,
    },
  });

  const onSubmit = async (data: SignInInput) => {
    console.log("data", data);
    try {
      setLoading((loading) => !loading);
    } catch (error) {
    } finally {
      setLoading((loading) => !loading);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          "gap-2 sm:gap-6 flex flex-grow flex-col @container [&_label.block>span]:font-medium"
        )}
      >
        <Input
          label="Email"
          placeholder="Email"
          {...register(`email`)}
          error={errors?.email?.message}
        />
        <Password
          label="Password"
          placeholder="Password"
          {...register(`password`)}
          error={errors?.password?.message}
        />
        <div className="flex items-center mb-2 justify-between">
          <Checkbox
            {...register("rememberme")}
            label="Remember me"
            variant="flat"
            className="[&>label>span]:font-medium"
          />
          <Link href={"#"} className="text-[#01C4FF] font-semibold">
            Forget Password?
          </Link>
        </div>
        <Button
          className="bg-[#01C4FF] shadow-button active:bg-slate-100 focus:bg-slate-100 hover:bg-[#01C4FF]/90 active:bg-[#01C4FF]/90"
          type="submit"
          isLoading={loading}
        >
          Sign In
          <MoveRightIcon className="ml-2" />
        </Button>
      </form>
    </div>
  );
};

export default Form;
