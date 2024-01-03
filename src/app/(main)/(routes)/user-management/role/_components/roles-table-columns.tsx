"use client";

import { HeaderCell } from "@/components/ui/table";
import { Tooltip } from "@/components/ui/tooltip";
import { ActionIcon } from "@/components/ui/action-icon";
import DeletePopover from "./delete-popover";
import { EyeIcon, PencilIcon } from "lucide-react";
import Link from "next/link";

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
  {
    title: <HeaderCell title="Name" />,
    dataIndex: "name",
    key: "name",
    width: 250,
  },
  {
    title: <HeaderCell title="View Permission" />,
    dataIndex: "permission",
    key: "permission",
    width: 250,
    render: (_: string, row: any) => (
      <Link href={`/user-management/role/permissions`} className="text-black-500 hover:underline">
        View Permission
      </Link>
    ),
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
          content={() => "Edit Role"}
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
          content={() => "View Role"}
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
        <DeletePopover
          title={`Delete Role`}
          description={`Please, rethink about your decision because you will not be able to undo this?`}
          onDelete={() => onDeleteItem(row.id)}
        />
      </div>
    ),
  },
];
