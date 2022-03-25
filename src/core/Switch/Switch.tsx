import { FC } from "react";
import { useSwitchStyles } from "./styles";
import { SwitchProps } from "./types";
import { Switch as IosSwitch } from "@mui/material";
import clx from "classnames";

export const Switch: FC<SwitchProps> = ({
  className,
  onChange,
  onClick,
  value,
  error,
  name,
  ...props
}) => {
  const classes = useSwitchStyles();
  return (
    <div className={clx(classes.root, className)}>
      <IosSwitch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        onClick={onClick}
        value={value}
        checked={value}
        onChange={onChange}
        name={name}
        {...props}
      />
      {error && (
        <p className={classes.error_message}>
          {name?.replace(/_/g, " ")} is required
        </p>
      )}
    </div>
  );
};
