import { FC } from "react";
import { useRadioButtonStyles } from "./styles";
import { RadioButtonProps } from "./types";
import { Radio } from "@mui/material";
import clx from "classnames";
import { useState } from "react";

export const RadioButton: FC<RadioButtonProps> = ({ className, color }) => {
  const classes = useRadioButtonStyles();

  const [isChecked, setIsChecked] = useState(true);
  return (
    <div className={clx(className, classes.root)}>
      <Radio
        style={{ color: color }}
        onClick={() => setIsChecked(!isChecked)}
        checked={isChecked}
      />
    </div>
  );
};
