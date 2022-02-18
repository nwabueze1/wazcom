import React from "react";
import _ from "lodash";
import { TableDataProps } from "..";

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
) =>
  setTableValue(() => {
    if (_.size(initialTableValue) == 0) {
      return initialTableValue;
    }
    return initialTableValue.filter((rowValues) => {
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
  });
