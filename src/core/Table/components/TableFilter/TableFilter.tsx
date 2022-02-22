import { Checkbox } from "@mui/material";
import clx from "classnames";
import { useCallback, useEffect, useState } from "react";
import { Accordion } from "../../../Accordion";
import { TextInput } from "../../../../io";
import { useFilterStyles } from "./styles";
import { TableFilterProps } from "./types";

export const TableFilter: React.FC<TableFilterProps> = ({
  showFilter,
  setShowFilter,
  fields,
  values,
  filters,
  setFilters,
}) => {
  const classes = useFilterStyles();
  const [filterFields, setFilterFields] =
    useState<{ [key: string]: any }[]>(fields);
  const [searchField, setSearchField] = useState("");

  const handleSetFilter = (field: string, value: string) => {
    setFilters((filters) => {
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
          (item) => item === value,
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
      values.map((item: { [key: string]: string | number }) => {
        if (
          !item[`${fieldName}`]?.toString() ||
          data.includes(item[`${fieldName}`].toString())
        )
          return null;
        data.push(item[`${fieldName}`]?.toString());
        return null;
      });
      return data;
    },
    [],
  );

  const getCheckedState = (field: string, value: string) => {
    const filter = filters.find((filter) => filter.field === field);
    if (filter && filter.values.includes(value)) {
      return true;
    }
    return false;
  };

  const renderFilterOptions = useCallback(
    () =>
      filterFields.map(({ name, label }) => (
        <Accordion title={label} key={name}>
          {getUniqueValues(label, values).map((item, key) => (
            <div style={{ display: "flex", alignItems: "center" }} key={key}>
              <Checkbox
                checked={!getCheckedState(label, item)}
                onChange={() => handleSetFilter(label, item)}
              />
              <div>{item}</div>
            </div>
          ))}
        </Accordion>
      )),
    [filterFields, filters, values],
  );

  const handleSearchFieldChange = (e: any) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    setFilterFields(fields);
  }, [fields]);

  useEffect(() => {
    setFilterFields(() =>
      fields.filter((item) =>
        item.name.toLowerCase().includes(searchField.toLowerCase()),
      ),
    );
  }, [searchField]);

  return (
    <>
      <div
        className={clx(classes.overlay, {
          [classes.showOverlay]: showFilter,
        })}
        onClick={() => setShowFilter(false)}
      />
      <div
        className={clx(classes.root, {
          [classes.show]: showFilter,
        })}
      >
        <TextInput
          placeholder="Search"
          name="search"
          value={searchField}
          onChange={handleSearchFieldChange}
        />
        {renderFilterOptions()}
      </div>
    </>
  );
};
