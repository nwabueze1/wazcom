import React from "react";
import _ from "lodash";
import { Filter, TableDataProps } from "../types";

export const useHandleControlsChange =
  (
    setControls: React.Dispatch<
      React.SetStateAction<{
        [key: string]: any;
      }>
    >
  ) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setControls((controls) => ({
      ...controls,
      [e.target.name]: e.target.value,
    }));
  };

export const getJsxContent = (data: { [key: string]: any }): string => {
  const children = data.props?.children || undefined;

  if (Array.isArray(data)) {
    // Multiple children
    const joinedNodes: Array<string | undefined> = [];
    data.forEach((node) => {
      if (typeof node === "object") joinedNodes.push(getJsxContent(node));
      else if (typeof node === "string") joinedNodes.push(node);
    });
    return joinedNodes.join(" ");
  }

  if (children === undefined) {
    if (typeof data === "string") return data;
    else return " ";
  }
  if (typeof children === "object") {
    return getJsxContent(data.props.children);
  }
  if (typeof children === "string") {
    return data.props.children;
  }
  return "";
};

export const useUpdateTableValue = (
  setTableValue: React.Dispatch<React.SetStateAction<TableDataProps>>,
  initialTableValue: TableDataProps,
  controlsFormData: { [key: string]: any },
  filters: Filter[]
) => {
  setTableValue(() => {
    if (_.size(initialTableValue) == 0) {
      return initialTableValue;
    }
    let result: { [key: string]: any }[] = [];

    // filter result by search
    result = initialTableValue.filter((rowValues) => {
      let status = false;
      Object.values(rowValues).map((value) => {
        if (typeof value == "object") {
          const stringFromJsx = getJsxContent(value);
          if (
            `${stringFromJsx}`
              .toLowerCase()
              .includes(controlsFormData.search?.toLowerCase())
          ) {
            status = true;
          }
          return null;
        }

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
        const status: boolean[] = [];
        Object.entries(rowValues).map(([key, value]) => {
          let idx = -1;
          filters.map((item, index) => {
            if (item.field == key) {
              idx = index;
            } else {
              idx = -1;
            }
            if (idx !== -1) {
              const term =
                value == null
                  ? ""
                  : typeof value == "object"
                  ? getJsxContent(value)
                  : String(value);
              if (!filters[idx].values.includes(term)) {
                return status.push(true);
              }
              status.push(false);
            }
            return;
          });
        });
        return !status.includes(false);
      });
    }

    return result;
  });
};

export const generateNumbersBetweenRange = (max: number) => {
  const arr = [];
  for (let i = 0; i < max; i++) {
    arr.push(i);
  }
  return arr;
};
