import React from "react";
import { TextField, BaseTextFieldProps } from "@mui/material";

import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  textField: {
    color: "transparent",
    "& input[type='time']::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none",
    },
    textAlign: "center",
  },
  inputRoot: {
    fontSize: 15,
    textAlign: "center",
    borderBottom: "0px ",
  },
}));

const CustomCss = withStyles({
  "@global": {
    ".MuiTextField-root": {
      "& input[type='time']::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
        display: "none",
      },
    },
  },
})(() => null);
interface TimeSelectorProps extends BaseTextFieldProps {
  onChange: (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,
  ) => void;
}

export const TimeSelector: React.FC<TimeSelectorProps> = ({
  onChange,
  name,
  value,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CustomCss />
      <TextField
        id="time"
        type="time"
        value={value}
        onChange={onChange}
        name={name}
        className={classes.textField}
        InputProps={{ classes: { root: classes.inputRoot } }}
      />
    </React.Fragment>
  );
};
