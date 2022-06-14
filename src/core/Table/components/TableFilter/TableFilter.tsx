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
import { isEqual } from "lodash";

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
    // const row = tableValues.find(filter ? filter : {})
    // console.log("tableValues", tableValues);
    // console.log("newFilters", newFilters);
    // console.log("filter", filter);
    // console.log("value", value);
    // if (filter) {
    //   // const g = Object.entries(tableValues).map(([key, values], index) => {
    //   //   console.log("data", values[filter?.field]);
    //   //   console.log("filter?.values?.includes(values[filter.field])", filter?.values?.includes(values[filter.field]))
    //   //   console.log("filter?.values", filter?.values)
    //   //   const parsedValue = values[filter.field] == null ? "" : typeof values[filter.field] == "object" ? getJsxContent(values[filter.field]) : String(values[filter.field])
    //   //   if (filter?.values?.includes(parsedValue)) {
    //   //     return true
    //   //   }
    //   // });

    //   // const f = g.filter((item) => item == true)
    //   // console.log("f", f)
    //   // if (f.length > 0) return true;

    //   const t = Object.entries(filter).map(([key, values], i) => {
    //     const idx = tableValues.findIndex((obj) => {
    //       // console.log("first", obj, obj[filter.field]);
    //       // console.log("2", values, key);
    //       // console.log("fil", newFilters);
    //       return values.includes(obj[filter.field]);
    //     });

    //     return idx;
    //   });
    //   console.log("t", t);
    //   const u = tableValues[t[1]];
    //   // Object.values(u).map((values) => {
    //   //   // filter.values.push(values);
    //   //   console.log("v", values);
    //   // });
    //   console.log("u", u, t[1]);
    // }
    // console.log("fil", filter);
    if (filter && filter.values.includes(value)) {
      return true;
    }
    return false;
  };

  const renderFilterOptions = useCallback(
    () =>
      filterFields.map(({ name, label }) => (
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
      )),
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
