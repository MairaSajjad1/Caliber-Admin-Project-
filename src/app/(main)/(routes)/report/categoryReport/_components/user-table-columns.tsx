"use client";

import { HeaderCell } from "@/components/ui/table";

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
];
