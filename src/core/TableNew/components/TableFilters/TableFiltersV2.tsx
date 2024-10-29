import { FC, useEffect, useState } from "react";
import { useTableFilterV2Styles } from "./useTableFilterV2Styles";
import clx from "classnames";
import { IoCloseOutline, IoFilterOutline } from "react-icons/io5";
import { TableFiltersProps } from "./types";
import { FilterOption } from "./components/FilterOption/FilterOption";
import { TableFilter } from "build";
import { Button } from "../../../Button";
import { GoPlus } from "react-icons/go";

const initialFilters = new Array(3).fill({
  column: "",
  operator: "",
  value: "",
});

export const TableFiltersV2: FC<TableFiltersProps> = ({
  columns,
  filters,
  setFilters,
  classNames,
}) => {
  const [open, setOpen] = useState(false);
  const classes = useTableFilterV2Styles();
  const [currentFilters, setCurrentFilters] = useState<TableFilter[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClearFilters = () => {
    setCurrentFilters(initialFilters);
  };

  const handleApplyFilters = () => {
    setIsSubmitting(true);
    const validateFilters = (filters: TableFilter[]): boolean => {
      return filters.every((filter) => {
        if (filter.column) {
          return filter.operator && filter.value;
        }
        return true;
      });
    };

    if (validateFilters(currentFilters)) {
      const validFilters = currentFilters.filter((filter) => filter.column);

      if (validFilters?.length > 0) {
        setFilters?.(validFilters);
      }
      setOpen(false);
    } else {
      return;
    }
    setIsSubmitting(false);
  };

  const handleFilterChange = (
    index: number,
    filter: { column: string; operator: string; value: string },
  ) => {
    const currentFilter = currentFilters[index];
    const newFilter = { ...currentFilter, ...filter };
    const newFilters = [...currentFilters];
    newFilters[index] = newFilter;
    setCurrentFilters(newFilters);
  };

  const handleAddNewColumnFilter = () => {
    setCurrentFilters([
      ...currentFilters,
      {
        column: "",
        operator: "",
        value: "",
      },
    ]);
  };

  const handleDeleteFilter = (index: number) => {
    if (currentFilters.length <= 3) {
      // we must have at least 3 filters
      return;
    }
    const newFilters = [...currentFilters];
    newFilters.splice(index, 1);
    setCurrentFilters(newFilters);
  };

  useEffect(() => {
    const newFilter = filters.length > 0 ? filters : initialFilters;
    setCurrentFilters(newFilter);

    return () => {
      setCurrentFilters([]);
    };
  }, [filters]);

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div>
      <button
        className={clx(classes.filterButton, {
          [classes.filterButtonActive]: open || filters?.length > 0,
        })}
        onClick={() => setOpen(!open)}
      >
        Filters <IoFilterOutline />{" "}
      </button>
      <div
        className={clx(classes.root, {
          [classes.rootActive]: open,
        })}
      >
        <div className={classes.container}>
          <div className={classes.overlay} onClick={() => setOpen(false)} />
          <div className={clx(classes.content, { [classes.contentActive]: open })}>
            <header className={classes.header}>
              <h6 className={clx(classes.heading, classNames?.title)}>Filter Options</h6>
              <p className={classes.subHeading}>Select your preferred options below</p>

              <button title="close" onClick={() => setOpen(false)} className={classes.closeButton}>
                <IoCloseOutline />
              </button>
            </header>
            <div className={classes.body}>
              <div className={classes.filterOptionContainer}>
                {currentFilters?.map((currentFilter, index) => (
                  <FilterOption
                    columns={columns.filter(
                      (column) => column?.filterOperators && column?.filterOperators?.length > 0, // only show columns with filter operators
                    )}
                    value={currentFilter as any}
                    onChange={(args) => {
                      handleFilterChange(index, args);
                    }}
                    onDelete={() => handleDeleteFilter(index)}
                    isSubmitting={isSubmitting}
                    classNames={classNames}
                    key={index}
                  />
                ))}
                <Button
                  variant="text"
                  className={clx(classes.button, "text", classNames?.button)}
                  onClick={handleAddNewColumnFilter}
                >
                  <GoPlus />
                  Add a new filter
                </Button>
              </div>
            </div>
            <div className={classes.footer}>
              <Button
                variant="outline"
                className={clx(classes.footerButton, "outline", classNames?.button)}
                onClick={handleClearFilters}
              >
                Clear Filters
              </Button>
              <Button
                variant="contained"
                className={clx(classes.footerButton, "contained", classNames?.button)}
                onClick={handleApplyFilters}
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
