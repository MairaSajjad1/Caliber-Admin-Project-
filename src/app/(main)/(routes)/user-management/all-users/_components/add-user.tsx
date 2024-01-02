"use client";
import { useModal } from "@/components/modal/use-modal";
import { cn } from "@/utils";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
const AddUserModal = dynamic(() => import("./add-user-modal"), {
  ssr: false,
});

const AddUser = () => {
  const { openModal } = useModal();
  return (
    <Button
      onClick={() =>
        openModal({
          view: <AddUserModal />,
          customSize: "480px",
        })
      }
      className={cn(
        "h-auto  w-fit bg-[#01C4FF] shadow-button hover:bg-[#01C4FF]/90"
      )}
    >
      Add Users
    </Button>
  );
};

export default AddUser;
