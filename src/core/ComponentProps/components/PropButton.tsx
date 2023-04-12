import { Button } from "@mui/material";
import { usePropButtonStyles } from "./styles";
import { FC, PropsWithChildren, ReactNode } from "react";
import { BiRefresh } from "react-icons/bi";

interface IButtonProps extends PropsWithChildren {
  onClick?: () => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}
const PropsButton: FC<IButtonProps> = (props) => {
  const classes = usePropButtonStyles();
  return (
    <Button className={classes.root} startIcon={props.startIcon} onClick={props.onClick}>
      <span className={classes.innerContent}>
        {props.children}
        {props.endIcon}
      </span>
    </Button>
  );
};

export default PropsButton;
