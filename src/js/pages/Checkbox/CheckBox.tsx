import React, { FC } from "react";
import { useCheckBoxStyles } from "./styles";
import { CheckBoxProps } from "./types";
import clx from "classnames";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CheckBox: FC<CheckBoxProps> = ({ className }) => {
  const classes = useCheckBoxStyles();
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={clx(className, classes.root)}>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        }
        label="Checkbox"
      />
    </div>
  );
};

export default CheckBox;
