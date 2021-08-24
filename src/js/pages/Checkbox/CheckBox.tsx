import React, { FC } from "react";
import { useCheckBoxStyles } from "./styles";
import { CheckBoxProps } from "./types";
import clx from "classnames";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CheckBox: FC<CheckBoxProps> = ({
  className,
  label,
  checked,
  handlecheckChange,
}) => {
  const classes = useCheckBoxStyles();

  return (
    <div className={clx(className, classes.root)}>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handlecheckChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        }
        label={label}
      />
    </div>
  );
};

export default CheckBox;
