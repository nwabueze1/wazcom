import { Button as MuiButton, CircularProgress } from "@mui/material";
import { ButtonProps } from "./types";
import { useButtonStyles } from "./styles";
import clx from "classnames";

export const Button = ({
  className,
  loading,
  variant = "contained",
  ...props
}: ButtonProps) => {
  const classes = useButtonStyles();

  return (
    <div>
      <div className={classes.buttonParent}>
        <MuiButton
          classes={{
            root: clx(classes.root, className),
            sizeSmall: classes.sizeSmall,
            sizeLarge: classes.sizeLarge,
          }}
          variant={variant}
          {...props}
        />
        <div className={clx(classes.spinner, loading && classes.spinnerActive)}>
          <CircularProgress color="inherit" size={18} />
        </div>
      </div>
    </div>
  );
};
