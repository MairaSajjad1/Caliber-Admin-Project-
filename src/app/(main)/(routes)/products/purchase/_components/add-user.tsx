"use client";
import { useModal } from "@/components/modal/use-modal";
import { cn } from "@/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const AddUser = () => {
  const router = useRouter();
  
  const handleButtonClick = () => {
    router.push("/products/purchase/create");
  };

  return (
    <div>
      <Button
        onClick={handleButtonClick}
        className={cn(
          "h-auto bg-[#01C4FF] shadow-button  hover:bg-[#01C4FF]/90"
        )}
      >
        Add Purchase
      </Button>
    </div>
  );
};

export default AddUser;
