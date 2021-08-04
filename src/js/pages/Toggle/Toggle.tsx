import React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch, { SwitchClassKey, SwitchProps } from "@material-ui/core/Switch";

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

interface Props extends SwitchProps {
  classes: Styles;
}

const Toggle = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 46,
      height: 26,
      padding: 0,
      margin: theme.spacing(4),
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(16px)",
        color: theme.design.colors.red70,
        "& + $track": {
          backgroundColor: theme.design.colors.white,
          opacity: 1,
          border: "6px solid fauxGrey",
        },
      },
      "&$focusVisible $thumb": {
        color: theme.design.colors.red70,
        border: "6px solid fauxGrey",
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
  }),
)(({ classes, ...props }: Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default function CustomizedSwitches() {
  const [state, setState] = React.useState({
    checkedB: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Toggle
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
          />
        }
        label="Toggle ON"
      />
    </FormGroup>
  );
}
