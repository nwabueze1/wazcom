import { Theme } from "@mui/material";

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const menuItemTableStyles = makeStyles((theme: Theme) =>
  createStyles({
    siteTypeSelect: {
      width: "6em",
    },
    option: {
      background: "red"
    },
    calendarIcon: {
      width: "30px",
      height: "30px"
    },
    textInput: {
      height: "43px",
      width: "100%",
      border: `1px solid ${theme.design.colors.waz_grey300}`,
      borderRadius: "5px",
      paddingInline: theme.spacing(2),
      '&::-webkit-calendar-picker-indicator': {
        width: "20px",
        height: "20px"
      },
      "&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
        borderColor: theme.design.colors.waz_primaryColor100,
        outline: theme.design.colors.waz_primaryColor100,
      },
    },
    icon: {
      color: theme.design.colors.waz_black,
      width: "20px",
      height: "20px"
    }
  }),
);

  