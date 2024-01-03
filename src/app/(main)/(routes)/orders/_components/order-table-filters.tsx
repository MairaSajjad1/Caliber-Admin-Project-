"use client";

import Select from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { userType } from "./order-data";
import { PiTrashDuotone } from "react-icons/pi";
import { useMedia } from "@/hooks/use-media";

const userTypeOptions = Object.entries(userType).map(([value, name]) => ({
  name,
  value,
}));

type FilterElementProps = {
  isFiltered: boolean;
  filters: { [key: string]: any };
  updateFilter: (columnId: string, filterValue: string | any[]) => void;
  handleReset: () => void;
};

export default function UserTableFilters({
  isFiltered,
  filters,
  updateFilter,
  handleReset,
}: FilterElementProps) {
  const isMediumScreen = useMedia("(max-width: 1860px)", false);
  const isLargeScreen = useMedia("(min-width: 1861px)", false);

  return (
    <>
      <Select
        placeholder="Select User Type"
        options={userTypeOptions}
        value={filters["type"]}
        onChange={(value: string) => {
          console.log("value", value);
          updateFilter("type", value);
        }}
        getOptionValue={(option) => option.name}
        displayValue={(selected: string) =>
          userTypeOptions.find((option) => option.name === selected)?.name ?? ""
        }
        {...(isMediumScreen && {
          label: "Type",
          labelClassName: "font-medium text-gray-700",
        })}
        {...(isLargeScreen && {
          dropdownClassName: "w-44",
        })}
        placement="bottom-start"
        useContainerWidth={isLargeScreen ? false : true}
      />
      {isFiltered ? (
        <Button
          size="sm"
          onClick={() => {
            handleReset();
          }}
          className="h-8 bg-gray-200/70"
          variant="flat"
        >
          <PiTrashDuotone className="me-1.5 h-[17px] w-[17px]" /> Clear
        </Button>
      ) : null}
    </>
  );
}
