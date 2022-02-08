import { Button as MuiButton } from "@mui/material";
import { ButtonProps } from "./types";
import { useButtonStyles } from "./styles";
import clx from "classnames";

export const Button = ({ className, ...props }: ButtonProps) => {
  const classes = useButtonStyles();

  return (
    <MuiButton
      classes={{
        root: clx(classes.root, className),
        sizeSmall: classes.sizeSmall,
        sizeLarge: classes.sizeLarge,
      }}
      variant="contained"
      {...props}
    />
  );
};
