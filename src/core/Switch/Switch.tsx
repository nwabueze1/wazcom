import  { FC } from "react";
import { useSwitchStyles } from "./styles";
import { SwitchProps } from "./types";
import { Switch as IosSwitch } from "@material-ui/core";

export const Switch: FC<SwitchProps> = ({
  onChange,
  onClick,
  value,
  error,
  name,
  ...props
}) => {
  const classes = useSwitchStyles();
  return (
    <div className={classes.root}>
      <IosSwitch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        // classes={{
        //   root: classes.root,
        //   switchBase: classes.switchBase,
        //   thumb: classes.thumb,
        //   track: classes.track,
        //   checked: classes.checked,
        // }}
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
