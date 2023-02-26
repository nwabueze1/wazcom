import { FC, useState } from "react";
import { useTableFiltersStyles } from "./styles";
import { TableFiltersProps } from "./types";
import { ClickAwayListener } from "@mui/base";
import { AiOutlinePlus } from "react-icons/ai";
import clx from "classnames";
import { FilterSelector } from "../FilterSelector";
import { TableColumn, TableFilter } from "../../types";
import { Filter } from "../Filter";

export const TableFilters: FC<TableFiltersProps> = ({ columns, filters, setFilters }) => {
  const classes = useTableFiltersStyles();
  const [showFilters, setShowFilters] = useState(false);
  const [activeColumnKey, setActiveColumnKey] = useState<string>();

  const renderColumns = () => {
    return columns.map(({ name, key }, index) => {
      const columnName = typeof name === "string" ? name : key.replace(/./g, " ");
      return (
        <div
          className={classes.filterColumn}
          key={index}
          onMouseEnter={() => {
            setActiveColumnKey(key);
          }}
        >
          {columnName}
          {activeColumnKey === key && (
            <FilterSelector
              className={classes.filterSelector}
              column={columns.find((column) => column.key === activeColumnKey) as TableColumn}
              handleSelectFilter={handleSelectFilter}
              handleClose={() => {
                setActiveColumnKey(undefined);
              }}
            />
          )}
        </div>
      );
    });
  };

  const handleSelectFilter = (filter: TableFilter) => {
    setFilters([...filters, filter]);
  };

  const handleDeleteFilter = (index: number) => {
    const newFilters = [...filters];
    newFilters.splice(index, 1);
    setFilters(newFilters);
  };

  const renderFilters = () => {
    return filters.map((filter, index) => {
      const column = columns.find(({ key }) => key === filter.column);
      return (
        <Filter
          {...filter}
          name={column?.name ?? ""}
          type={column?.type ?? "string"}
          handleDelete={() => {
            handleDeleteFilter(index);
          }}
          key={index}
        />
      );
    });
  };

  return (
    <div className={classes.root}>
      {renderFilters()}
      <ClickAwayListener
        onClickAway={() => {
          setShowFilters(false);
          setActiveColumnKey(undefined);
        }}
      >
        <div className={classes.filterAddIconParent}>
          <span
            className={classes.filterAddIcon}
            onClick={() => {
              showFilters && setActiveColumnKey(undefined);
              setShowFilters(!showFilters);
            }}
          >
            <AiOutlinePlus />
          </span>
          <div className={clx(classes.filterColumns, showFilters && classes.filterColumnsActive)}>
            {renderColumns()}
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
};
