import React from "react";
import _ from "lodash";
import { Filter, TableDataProps } from "../types";

export const useHandleControlsChange =
  (
    setControls: React.Dispatch<
      React.SetStateAction<{
        [key: string]: any;
      }>
    >,
  ) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setControls((controls) => ({
      ...controls,
      [e.target.name]: e.target.value,
    }));
  };

export const useUpdateTableValue = (
  setTableValue: React.Dispatch<React.SetStateAction<TableDataProps>>,
  initialTableValue: TableDataProps,
  controlsFormData: { [key: string]: any },
  filters: Filter[],
) =>
  setTableValue(() => {
    if (_.size(initialTableValue) == 0) {
      return initialTableValue;
    }
    let result: { [key: string]: any }[] = [];

    // filter result by search
    result = initialTableValue.filter((rowValues) => {
      let status = false;
      Object.values(rowValues).map((value) => {
        if (
          `${value}`
            .toLowerCase()
            .includes(controlsFormData.search?.toLowerCase())
        ) {
          status = true;
        }
        return null;
      });
      return status;
    });

    // filter result by filter panel
    const newFilterResult: { [key: string]: any }[] = controlsFormData.search
      ? [...result]
      : [...initialTableValue];

    if (filters.length > 0) {
      return newFilterResult.filter((rowValues) => {
        let status = false;
        Object.entries(rowValues).map(([key, value]) => {
          const filterIndex = filters.findIndex((item) => item.field == key);
          if (filterIndex !== -1) {
            if (!filters[filterIndex].values.includes(value.toString())) {
              status = true;
            }
          }
          return null;
        });

        return status;
      });
    }

    return result;
  });

export const generateNumbersBetweenRange = (max: number) => {
  const arr = [];
  for (let i = 0; i < max; i++) {
    arr.push(i);
  }
  return arr;
};
