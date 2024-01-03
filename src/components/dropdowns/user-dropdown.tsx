"use client";
import { RefObject, useState } from "react";
import { useMedia } from "@/hooks/use-media";
import { Button } from "@/components/ui/button";
import { Popover } from "../ui/popover";
import { TbLogout2 as LogoutIcon } from "react-icons/tb";
import LogoutPopover from "./logout-popover";

function UserDropdown({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="w-54 max-w-[320px] text-left rtl:text-right sm:max-w-[360px] 2xl:max-w-[420px]">
  <div className="mb-1 "> User Name </div>
  <div className="mb-1 ">User Type</div>
  <span className="border-t border-gray-300 w-full"></span>
  <div className="mb-2 font-bold flex items-center space-x-2">
    <LogoutPopover
      title={`Logout`}
      description={`Are you sure you want to Logout ?`}
    />
    <button className="bg-black text-white px-3 py-1 rounded">Logout</button>
  </div>
</div>
  );
}

const UsersDropdown = ({
  children,
}: {
  children: JSX.Element & { ref?: RefObject<any> };
}) => {
  const isMobile = useMedia("(max-width: 480px)", false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      content={() => <UserDropdown setIsOpen={setIsOpen} />}
      shadow="sm"
      placement={isMobile ? "bottom" : "bottom-end"}
      className="z-50 px-0s pb-4 px-6 pt-5 bg-white [&>svg]:hidden [&>svg]:dark:fill-gray-100 sm:[&>svg]:inline-flex"
    >
      {children}
    </Popover>
  );
};

export default UsersDropdown;
