import { Button as MuiButton } from "@material-ui/core";
import { ButtonProps } from "./types";
import { useButtonStyles } from "./styles";

export const Button = ({ ...props }: ButtonProps) => {
  const classes = useButtonStyles();

  return (
    <MuiButton
      classes={{
        root: classes.root,
        sizeSmall: classes.sizeSmall,
        sizeLarge: classes.sizeLarge,
      }}
      variant="contained"
      {...props}
    />
  );
};
