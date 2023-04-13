import { TextField } from "@mui/material";
import { FC } from "react";
import { useComponentPropsCStyles } from "./styles";
import { ComponentInputProp } from "./types";

export const ComponentInput: FC<ComponentInputProp> = ({ value, onChange }) => {
  const classes = useComponentPropsCStyles();
  return (
    <TextField onChange={onChange} value={value} className={classes.textFieldRoot}></TextField>
  );
};
