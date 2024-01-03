import { useForm, SubmitHandler, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { roleFormSchema } from "@/validators/add-role";
import { cn } from "@/utils";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Checkbox } from "rizzui";

interface RoleFormData {
  name: string;
  can_create: boolean;
  can_view: boolean;
  can_update: boolean;
  can_delete: boolean;
}

const AddRoleModal = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoleFormData>({
    resolver: zodResolver(roleFormSchema),
    defaultValues: {
      name: "",
      can_create: false,
      can_view: false,
      can_update: false,
      can_delete: false,
    },
  });

  const onSubmit: SubmitHandler<RoleFormData> = async (data) => {
    console.log("data", data);
    try {
      setLoading(true);
      // Add your logic to handle form submission
    } catch (error) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-auto px-5 py-7 sm:p-10 space-y-2">
      <h4 className="text-center">Edit Permission</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          "gap-2 sm:gap-4 flex flex-grow flex-col @container [&_label.block>span]:font-medium"
        )}
      >
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-1 rounded-md">
            <input
              type="checkbox"
              {...register("can_create")}
              className="w-4 h-4 text-[#01C4FF]"
            />
            <span>Create</span>
          </label>
  
          <label className="flex items-center space-x-1 rounded-md">
            <input
              type="checkbox"
              {...register("can_view")}
              className="w-4 h-4 text-[#01C4FF]"
            />
            <span>View</span>
          </label>
  
          <label className="flex items-center space-x-1 rounded-md">
            <input
              type="checkbox"
              {...register("can_update")}
              className="w-4 h-4 text-[#01C4FF]"
            />
            <span>Update</span>
          </label>
  
          <label className="flex items-center space-x-1 rounded-md ">
            <input
              type="checkbox"
              {...register("can_delete")}
              className="w-4 h-4 text-[#01C4FF]"
            />
            <span>Delete</span>
          </label>
        </div>
  
        <Button
          className="bg-[#01C4FF] shadow-button active:bg-slate-100 focus:bg-slate-100 hover:bg-[#01C4FF]/90 active:bg-[#01C4FF]/90"
          type="submit"
          isLoading={loading}
        >
         Update
        </Button>
      </form>
    </div>
  );
  
};

export default AddRoleModal;
