"use client";

import React from "react";
import dynamic from "next/dynamic";
import isEmpty from "lodash/isEmpty";
import Table, { type TableProps } from "@/components/ui/table";
import Spinner from "@/components/ui/spinner";
import type { TableFilterProps } from "@/components/controlled-table/table-filter";
import type { TablePaginationProps } from "@/components/controlled-table/table-pagination";
import { cn } from "@/utils";

const TablePagination = dynamic(
  () => import("@/components/controlled-table/table-pagination"),
  { ssr: false }
);

type ControlledTableProps = {
  isLoading?: boolean;
  filterOptions?: TableFilterProps;
  paginatorOptions?: TablePaginationProps;
  tableFooter?: React.ReactNode;
  className?: string;
  paginatorClassName?: string;
} & TableProps;

export default function ControlledTable({
  isLoading,
  filterOptions,
  paginatorOptions,
  tableFooter,
  paginatorClassName,
  className,
  ...tableProps
}: ControlledTableProps) {
  if (isLoading) {
    return (
      <div className="grid flex-1 flex-grow place-content-center items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="relative bg-gradient-to-br from-white via-white to-white/40 rounded-t-xl rounded-b-lg overflow-hidden">
        <Table
          // scroll={{ x: 1300 }}
          // @ts-ignore
          rowKey={(record) => record.id}
          className={cn(className)}
          {...tableProps}
          striped
        />
        {tableFooter ? tableFooter : null}
      </div>
      {!isEmpty(paginatorOptions) && (
        <TablePagination
          paginatorClassName={paginatorClassName}
          {...paginatorOptions}
        />
      )}
    </>
  );
}
