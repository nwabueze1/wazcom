import clx from "classnames";
import { useCallback, useEffect, useState } from "react";
import { Checkbox, ClickAwayListener, MenuItem } from "@mui/material";
import { Accordion } from "../../../Accordion";
import { useFilterStyles } from "./styles";
import { TableFilterProps } from "./types";
import { FilterAlt } from "@mui/icons-material";
import { Button } from "../../../Button";
import { useTableControlsStyles } from "../TableControls/styles";
import { getJsxContent } from "../../helpers";

export const TableFilter: React.FC<TableFilterProps> = ({
  showFilter,
  setShowFilter,
  fields,
  values: tableValues,
  filters,
  setFilters,
}) => {
  const classes = useFilterStyles();
  const controlClasses = useTableControlsStyles();
  const [filterFields, setFilterFields] =
    useState<{ [key: string]: any }[]>(fields);

  const [newFilters, setNewFilters] = useState(filters);

  const handleSetFilter = (field: string, value: string) => {
    setNewFilters((filters) => {
      const index = filters.findIndex((filter) => filter.field === field);
      if (index === -1) {
        return [
          ...filters,
          {
            field,
            values: [value],
          },
        ];
      }
      const newArr = [...filters];
      if (newArr[index].values.includes(value)) {
        const itemIndex = newArr[index].values.findIndex(
          (item) => item === value
        );
        newArr[index].values.splice(itemIndex, 1);
        return newArr;
      }
      newArr[index] = {
        ...newArr[index],
        values: [...filters[index].values, value.toString()],
      };
      return newArr;
    });
  };

  const getUniqueValues = useCallback(
    (fieldName: string, values: TableFilterProps["values"]) => {
      if (!values || values.length < 1) return [];
      const data: string[] = [];
      values.map(
        (item: { [key: string]: string | number | { [key: string]: any } }) => {
          let fieldValue = item[`${fieldName}`];

          if (typeof fieldValue == "object") {
            fieldValue = getJsxContent(fieldValue);
          }
          if (!fieldValue?.toString() || data.includes(fieldValue.toString()))
            return null;
          data.push(fieldValue.toString());
          return null;
        }
      );
      return data;
    },
    []
  );

  const getCheckedState = (field: string, value: string) => {
    const filter = newFilters.find((filter) => filter.field === field);
    if (filter && filter.values.includes(value)) {
      return true;
    }
    return false;
  };

  const renderFilterOptions = useCallback(
    () =>
      filterFields.map(({ name, label }) => {
        return (
          <MenuItem key={name} className={classes.filterItemContainer}>
            <Accordion title={label}>
              {getUniqueValues(label, tableValues).map((item, key) => {
                return (
                  <div className={classes.filterItem} key={key}>
                    <Checkbox
                      checked={!getCheckedState(label, item)}
                      onChange={() => handleSetFilter(label, item)}
                    />
                    <div>{item}</div>
                  </div>
                );
              })}
            </Accordion>
          </MenuItem>
        )
      }),
    [filterFields, newFilters, tableValues]
  );

  const handleClickAway = () => {
    setShowFilter(false);
  };

  useEffect(() => {
    setFilterFields(fields);
  }, [fields]);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.container}>
        <Button
          variant="outlined"
          className={controlClasses.controlButton}
          onClick={() => setShowFilter(true)}
        >
          <span className={controlClasses.controlButtonText}>Filter</span>
          <FilterAlt />
        </Button>
        <div
          className={clx(classes.filterItems, {
            [classes.show]: showFilter,
          })}
        >
          <MenuItem
            className={clx(
              classes.filterItemContainer,
              classes.filterItemsHeader
            )}
          >
            FILTER BY:
          </MenuItem>
          {renderFilterOptions()}
          <MenuItem>
            <div className={classes.filterActionButtons}>
              <Button
                className={clx(
                  classes.filterActionButton,
                  classes.filterActionButtonOutline
                )}
                onClick={handleClickAway}
              >
                Cancel
              </Button>
              <Button
                className={classes.filterActionButton}
                onClick={() => setFilters(newFilters)}
              >
                Apply Filter
              </Button>
            </div>
          </MenuItem>
        </div>
      </div>
    </ClickAwayListener>
  );
};
