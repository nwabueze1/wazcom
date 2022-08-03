import React from "react";
import { TextField, BaseTextFieldProps, Theme } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';

const useStyles = makeStyles((theme: Theme) => ({
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
    "&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
      borderColor: theme.design.colors.waz_primaryColor100,
      outline: theme.design.colors.waz_primaryColor100,
    },
    "&:hover": {
      outline: "none"
    },
  },
}));

const CustomCss = withStyles((theme: Theme) => ({
  "@global": {
    ".MuiTextField-root": {
      "& input[type='time']::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
        {
          display: "none",
        },
    },
    ".MuiOutlinedInput-notchedOutline": {
      border: `solid 1px ${theme.design.colors.waz_grey5}`,
      borderRadius: 5,
      "&:hover": {
        borderColor: `${theme.design.colors.waz_grey5}`,
        outline: "none",
      },
      "&:focus": {
        borderColor: `${theme.design.colors.waz_grey5}`,
      },
    },
    ".Mui-focused.MuiOutlinedInput-notchedOutline": {
      border: `solid 1px ${theme.design.colors.waz_grey5}`,
      "&:hover": {
        borderColor: `${theme.design.colors.waz_grey5}`,
        outline: "none",
      },
      "&:focus": {
        borderColor: `${theme.design.colors.waz_grey5}`,
      },
    },
  },
}))(() => null);
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
        sx={{
          '& input[type="time"]::-webkit-calendar-picker-indicator': {
            height: "20px",
            width: "20px"
          },
        }}
        placeholder="select time"
        id="time"
        type="time"
        value={value}
        onChange={onChange}
        name={name}
        className={classes.textField}
        InputProps={{ classes: { root: classes.inputRoot },
        
      }}
      />
    </React.Fragment>
  );
};
