"use client";

import { useCallback, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { useColumn } from "@/hooks/use-column";
import { useTable } from "@/hooks/use-table";
import { getColumns } from "./roles-table-columns";
import ControlledTable from "@/components/controlled-table";
import { userData } from "./roles-data";
import isEmpty from "lodash/isEmpty";
import AddRole from "./add-role";

const RoleTableFilters = dynamic(() => import("./roles-table-filters"), {
  ssr: false,
});

const TableFilter = dynamic(
  () => import("@/components/controlled-table/table-filter"),
  { ssr: false }
);

export default function RolesTable() {
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
    <>
      <div className="flex items-center justify-between gap-2 mb-2">
        <h3>Roles</h3>
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
              <RoleTableFilters
                isFiltered={isFiltered}
                filters={filters}
                updateFilter={updateFilter}
                handleReset={handleReset}
              />
            }
          </TableFilter>
        )}
        <AddRole />
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
        filterOptions={{
          searchTerm,
          onSearchClear: () => {
            handleSearch("");
          },
          onSearchChange: (event) => {
            handleSearch(event.target.value);
          },
          hasSearched: isFiltered,
          columns,
          checkedColumns,
          setCheckedColumns,
        }}
      />
    </>
  );
}
