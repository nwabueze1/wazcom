import React, { useState } from "react";
import { TextField, BaseTextFieldProps, Theme, InputAdornment } from "@mui/material";
import { useTimePickerStyles } from "./styles";
import withStyles from '@mui/styles/withStyles';
import ScheduleIcon from '@mui/icons-material/Schedule';


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
  const [inputType, setInputType] = useState<string>("text");
  const [defaultValue, setDefaultValue] = useState<string>("Select Time");

  return (
    <React.Fragment>
      <CustomCss />
      <TextField
        id="time"
        type={inputType}
        value={defaultValue}
        onChange={onChange}
        name={name}
        className={classes.textField}
        InputProps={{
          classes: { root: classes.inputRoot },
          endAdornment: (
            <InputAdornment position="end">
              <ScheduleIcon />
            </InputAdornment>
          ),
        }}
        onFocus={() => {
          setInputType("time");
          setDefaultValue(value as string);
        }}
      />
    </React.Fragment>
  );
};
