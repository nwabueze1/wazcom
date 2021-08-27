import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch, { SwitchClassKey, SwitchProps } from "@material-ui/core/Switch";
import useStyles from "./styles";
import Styles from "./styles";
interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

interface Props extends SwitchProps {
  classes: Styles;
}

const Toggle = ({ classes, ...props }: Props) => {
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
};

export default function CustomizedSwitches() {
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const classes = useStyles();

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Toggle
            classes={classes}
            checked={state.checked}
            onChange={handleChange}
            name="checked"
          />
        }
        label=""
      />
    </FormGroup>
  );
}
