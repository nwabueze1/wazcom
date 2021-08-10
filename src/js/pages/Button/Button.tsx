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

const getSizeClassName = (
  classes: ReturnType<typeof useButtonStyles>,
  size: ButtonProps["size"],
) => {
  switch (size) {
    case "small":
      return classes.small;
      break;

    case "medium":
      return classes.medium;
      break;
    case "large":
      return classes.large;
      break;
    default:
      return classes.normal;
  }
};
const getStatusClassName = (
  classes: ReturnType<typeof useButtonStyles>,
  status: ButtonProps["status"],
) => {
  switch (status) {
    case "hover":
      return classes.hover;
      break;
    case "active":
      return classes.active;
      break;
    case "disable":
      return classes.disable;
      break;
    case "transparent":
      return classes.transparent;
      break;
    case "hoveroutline":
      return classes.hoverOutline;
      break;
    case "activeoutline":
      return classes.activeOutline;
      break;

    default:
      return classes.normal;
  }
};
const Button: React.FC<ButtonProps> = ({
  status,
  children,
  type,
  size,
  loading,
  variant,
  ...props
}) => {
  const classes = useButtonStyles(props);

  const variantClassName = getVariantClassName(classes, variant);
  const sizeClassName = getSizeClassName(classes, size);
  const StatusClassName = getStatusClassName(classes, status);

  return (
    <div className={classes.wrapper}>
      <MuiButton
        type={type}
        disabled={loading}
        size={size}
        classes={{
          root: clx(
            classes.root,
            variantClassName,
            sizeClassName,
            StatusClassName,
          ),
        }}
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
