"use client";

import { HeaderCell } from "@/components/ui/table";
import { Tooltip } from "@/components/ui/tooltip";
import { ActionIcon } from "@/components/ui/action-icon";
import DeletePopover from "./delete-popover";
import { EyeIcon, PencilIcon, TrashIcon } from "lucide-react";

type Columns = {
  sortConfig?: any;
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
};

export const getColumns = ({
  sortConfig,
  onDeleteItem,
  onHeaderCellClick,
  onChecked,
}: Columns) => [
  // {
  //   // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
  //   title: <HeaderCell title="ID" className="opacity-0" />,
  //   dataIndex: "checked",
  //   key: "checked",
  //   width: 30,
  //   render: (_: any, row: any) => (
  //     <div className="ms-6 inline-flex">
  //       <Checkbox
  //         value={row.id}
  //         aria-label="Id"
  //         className="cursor-pointer"
  //         {...(onChecked && { onChange: (e) => onChecked(e, e.target.value) })}
  //       />
  //     </div>
  //   ),
  // },
  {
    title: <HeaderCell title="Name" />,
    dataIndex: "name",
    key: "name",
    width: 250,
  },
  {
    title: <HeaderCell title="Mobile" />,
    dataIndex: "mobile",
    key: "mobile",
    width: 250,
  },
  {
    title: <HeaderCell title="Type" />,
    dataIndex: "type",
    key: "type",
    width: 250,
  },
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="Actions" className="opacity-0" />,
    dataIndex: "action",
    key: "action",
    width: 100,
    render: (_: string, row: any) => (
      <div className="flex items-center justify-center gap-3">
        <Tooltip
          size="sm"
          content={() => "Edit User"}
          placement="top"
          color="invert"
        >
          <ActionIcon
            tag="span"
            size="sm"
            variant="outline"
            className="hover:!border-gray-900 hover:text-gray-700"
          >
            <PencilIcon className="h-3.5 w-3.5" />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          size="sm"
          content={() => "View User"}
          placement="top"
          color="invert"
        >
          <ActionIcon
            tag="span"
            size="sm"
            variant="outline"
            className="hover:!border-gray-900 hover:text-gray-700"
          >
            <EyeIcon className="h-3.5 w-3.5" />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          size="sm"
          content={() => "View User"}
          placement="top"
          color="invert"
        >
          <ActionIcon
            tag="span"
            size="sm"
            variant="outline"
            className="hover:!border-gray-900 hover:text-gray-700"
          >
            <TrashIcon className="h-3.5 w-3.5" />
          </ActionIcon>
        </Tooltip>
      </div>
    ),
  },
];
