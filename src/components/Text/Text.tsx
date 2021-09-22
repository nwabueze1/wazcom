import { FC } from "react";
import { TextProps } from "./types";
import { OutlinedInput, InputLabel } from "@material-ui/core";
import { useTextStyles } from "./styles";

export const Text: FC<TextProps> = ({ label, ...props }) => {
  const classes = useTextStyles();
  return (
    <div className={classes.root}>
      {label && (
        <InputLabel className={classes.label} htmlFor={props.name}>
          {label}
        </InputLabel>
      )}
      <OutlinedInput {...props} />
    </div>
  );
};
