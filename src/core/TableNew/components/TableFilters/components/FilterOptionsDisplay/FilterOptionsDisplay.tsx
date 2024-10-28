import { FC } from "react";
import { useStyles } from "./useStyles";
import { TableFilter } from "../../../../types";
import clx from "classnames";
import { MdClose } from "react-icons/md";
import { FilterOptionsDisplayProps } from "./type";

export const FilterOptionsDisplay: FC<FilterOptionsDisplayProps> = ({
  filters,
  columns,
  setFilters,
}) => {
  const classes = useStyles();

  const handleRemoveFilter = (index: number) => {
    const filtered = filters.filter((_, i) => i !== index);
    setFilters?.(filtered);
  };

  const renderFilter = (filter: TableFilter, index: number) => {
    const column = columns.find((c) => c.key === filter.column);

    const operatorLabel = column?.filterOperators?.find((o) => o.value === filter.operator)?.label;

    return (
      <div key={index} className={classes.filter}>
        {column?.icon && <span className={classes.filterIcon}>{column?.icon}</span>}
        <span className={classes.filterText}>{column?.name}</span>
        <span className={clx(classes.filterText, "label")}>{operatorLabel}</span>
        <span className={classes.filterText}>{filter.value}</span>
        <button
          className={classes.filterRemove}
          onClick={() => handleRemoveFilter(index)}
          title="close"
        >
          <MdClose />
        </button>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <p className={classes.title}>Result:</p>
      {filters.map(renderFilter)}
    </div>
  );
};
