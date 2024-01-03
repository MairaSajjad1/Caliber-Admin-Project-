"use client";
import { useModal } from "@/components/modal/use-modal";
import { cn } from "@/utils";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
const AddRoleModal = dynamic(() => import("./add-permission-modal"), {
  ssr: false,
});

const AddRole = () => {
  const { openModal } = useModal();
  return (
    <div>
      <Button
        onClick={() =>
          openModal({
            view: <AddRoleModal />,
            customSize: "480px",
          })
        }
        className={cn(
          "h-auto bg-[#01C4FF] shadow-button  hover:bg-[#01C4FF]/90"
        )}
      >
        Add Permission
      </Button>
    </div>
  );
};

export default AddRole;
