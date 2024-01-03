"use client";

import { Title, Text } from "@/components/ui/text";
import { ActionIcon } from "@/components/ui/action-icon";
import { Button } from "@/components/ui/button";
import { Popover } from "@/components/ui/popover";
import { TbLogout2 as LogoutIcon } from "react-icons/tb"; // Assuming this is your logout icon

type LogoutPopoverProps = {
  title: string;
  description: string;
};

export default function LogoutPopover({
  title,
  description,
}: LogoutPopoverProps) {
  return (
    <Popover
      placement="left"
      className="z-50"
      content={({ setOpen }) => (
        <div className="w-56 pb-2 pt-1 text-left rtl:text-right">
          <Title
            as="h6"
            className="mb-0.5 flex items-start text-sm text-gray-700 sm:items-center"
          >
            <LogoutIcon className="me-1 h-4 w-4" /> {title}
          </Title>
          <Text className="mb-2 leading-relaxed text-gray-500">
            {description}
          </Text>
          <div className="flex items-center justify-end">
            <Button size="sm" className="me-1.5 h-7">
              yes
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="h-7"
              onClick={() => setOpen(false)}
            >
              No
            </Button>
          </div>
        </div>
      )}
    >
      <ActionIcon
        size="sm"
        variant="outline"
        aria-label={"Logout"}
        className="cursor-pointer hover:!border-gray-900 hover:text-gray-700"
      >
        <LogoutIcon className="h-3.5 w-3.5" />
      </ActionIcon>
    </Popover>
  );
}
