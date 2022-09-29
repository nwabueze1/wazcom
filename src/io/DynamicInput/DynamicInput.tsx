import React, { FC } from "react";
import { useDynamicInputStyles } from "./styles";
import { DynamicInputProps } from "./types";
import clx from "classnames";
import { EditableTextInput } from "io/EditableTextInput";
import { SelectInput } from "io/SelectInput";
import { defaultInputs as options } from "./data";
import { DefaultInputState } from "./components/DefautInputState/DefualtInputstate";
import { DropDown } from "./components/DropDown/DropDown";


const selectProps = {
  options,
  error: true,
  required: true,
}

export const DynamicInput: FC<DynamicInputProps> = () => {
  const classes = useDynamicInputStyles();

  return (
    <div className={clx(classes.root)}>
      <div className={classes.inputControlsContainer}>
        <div className={classes.editableTextInput}>
          <EditableTextInput />
        </div>
        <SelectInput {...selectProps} className={classes.selectInputContainer} />
      </div>
      <DropDown />
    </div>
  );
};
