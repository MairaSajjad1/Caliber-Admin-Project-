"use client";

import { useCallback, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { useColumn } from "@/hooks/use-column";
import { useTable } from "@/hooks/use-table";
import { getColumns } from "./user-table-columns";
import ControlledTable from "@/components/controlled-table";
import { userData } from "./user-data";
import isEmpty from "lodash/isEmpty";
import AddUser from "./add-user";

const UserTableFilters = dynamic(() => import("./user-table-filters"), {
  ssr: false,
});

const TableFilter = dynamic(
  () => import("@/components/controlled-table/table-filter"),
  { ssr: false }
);

export default function ShipmentTable() {
  const [pageSize, setPageSize] = useState(10);

  const onHeaderCellClick = (value: string) => ({
    onClick: () => {
      handleSort(value);
    },
  });

  const onDeleteItem = useCallback((id: string) => {
    handleDelete(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    isLoading,
    isFiltered,
    tableData,
    currentPage,
    totalItems,
    handlePaginate,
    filters,
    updateFilter,
    searchTerm,
    handleSearch,
    sortConfig,
    handleSort,
    handleDelete,
    handleReset,
  } = useTable(userData, pageSize);

  const columns = useMemo(
    () => getColumns({ sortConfig, onHeaderCellClick, onDeleteItem }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onHeaderCellClick, sortConfig.key, sortConfig.direction, onDeleteItem]
  );

  const { visibleColumns, checkedColumns, setCheckedColumns } =
    useColumn(columns);

  return (
    <div className="min-h-[598px] flex flex-col">
      <div className="grid grid-cols-2 sm:flex  justify-end  sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
        <h3>{"Products Report"}</h3>
        {!isEmpty({
          searchTerm,
          onSearchClear: () => {
            handleSearch("");
          },
          onSearchChange: (event: { target: { value: string } }) => {
            handleSearch(event.target.value);
          },
          hasSearched: isFiltered,
          columns,
          checkedColumns,
          setCheckedColumns,
        }) && (
          <TableFilter
            {...{
              searchTerm,
              onSearchClear: () => {
                handleSearch("");
              },
              onSearchChange: (event: { target: { value: string } }) => {
                handleSearch(event.target.value);
              },
              hasSearched: isFiltered,
              columns,
              checkedColumns,
              setCheckedColumns,
            }}
          >
            {
              <UserTableFilters
                isFiltered={isFiltered}
                filters={filters}
                updateFilter={updateFilter}
                handleReset={handleReset}
              />
            }
          </TableFilter>
        )}
        <div className="flex items-center justify-end sm:block">
          <AddUser />
        </div>
      </div>
      <ControlledTable
        variant="modern"
        isLoading={isLoading}
        data={tableData}
        // @ts-ignore
        columns={visibleColumns}
        paginatorOptions={{
          pageSize,
          setPageSize,
          total: totalItems,
          current: currentPage,
          onChange: (page: number) => handlePaginate(page),
        }}
      />
    </div>
  );
}
