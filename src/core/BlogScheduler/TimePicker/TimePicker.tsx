import React from "react";
import { TextField, BaseTextFieldProps, Theme } from "@mui/material";
import { useTimePickerStyles } from "./styles";
import withStyles from '@mui/styles/withStyles';


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
  const classes = useTimePickerStyles();

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
        sx={{
          
        }}
        InputProps={{ classes: { root: classes.inputRoot } }}
      />
    </React.Fragment>
  );
};
