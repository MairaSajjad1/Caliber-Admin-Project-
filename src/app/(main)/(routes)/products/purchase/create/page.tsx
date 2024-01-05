"ue client"
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from 'rizzui'
import { cn } from "@/utils";

function Page() {
  // const { register } = useForm();
  return (
   <>
   <div className="bg-[#FFFFFF] p-2 rounded-md overflow-hidden space-y-4">
    <form className={cn(
          "gap-2 sm:gap-4 flex flex-grow flex-col @container [&_label.block>span]:font-medium"
        )}>

    </form>
  Maira

   </div>
   </>
  )
}

export default Page
