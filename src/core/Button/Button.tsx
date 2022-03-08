import { Button as MuiButton, CircularProgress } from "@mui/material";
import { ButtonProps } from "./types";
import { useButtonStyles } from "./styles";
import clx from "classnames";

export const Button = ({
  className,
  variant = "contained",
  loading,
  ...props
}: ButtonProps) => {
  const classes = useButtonStyles();

  return (
    <div className={classes.root}>
      <MuiButton
        classes={{
          root: clx(classes.button, className),
          sizeSmall: classes.sizeSmall,
          sizeLarge: classes.sizeLarge,
        }}
        variant={variant}
        {...props}
      />
      {loading && (
        <div className={classes.loader}>
          <CircularProgress color="inherit" size={12} />
        </div>
      )}
    </div>
  );
};
