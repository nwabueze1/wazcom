import React from "react";
import { ButtonProps } from "./types";
import { CircularProgress, Button as MuiButton } from "@material-ui/core";
import { useButtonStyles } from "./styles";
import clx from "classnames";

const getVariantClassName = (
  classes: ReturnType<typeof useButtonStyles>,
  variant: ButtonProps["variant"],
) => {
  switch (variant) {
    case "normal":
      return classes.normal;
    default:
      return classes.normal;
  }
};

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  size,
  loading,
  variant,
  ...props
}) => {
  const classes = useButtonStyles(props);

  const variantClassName = getVariantClassName(classes, variant);

  return (
    <div className={classes.wrapper}>
      <MuiButton
        type={type}
        disabled={loading}
        size={size}
        classes={{ root: clx(classes.root, variantClassName) }}
        startIcon={
          loading && (
            <CircularProgress className={classes.progress} size="25px" />
          )
        }
        {...props}
      >
        {children}
      </MuiButton>
    </div>
  );
};
export default Button;
