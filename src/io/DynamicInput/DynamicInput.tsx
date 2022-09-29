import React, { FC } from "react";
import { useDynamicInputStyles } from "./styles";
import { DynamicInputProps } from "./types";
import clx from "classnames";
import { EditableTextInput } from "io/EditableTextInput";
import { SelectInput } from "io/SelectInput";
import { BiLink } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

const selectProps = {
  options: [
    { label: "Basit", value: "basit", icon: BiLink },
    { label: "Chinazom", value: "chinazom", icon: FaEdit },
  ],
  error: true,
  required: true,
  // feedback: { text: "Tariq is a weirdo", status: "error" },
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
    </div>
  );
};
