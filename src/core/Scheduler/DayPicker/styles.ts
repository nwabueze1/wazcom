import { Theme, InputBase } from "@mui/material";

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';

export const menuItemTableStyles = makeStyles(() =>
  createStyles({
    siteTypeSelect: {
      width: "6em",
    },
    option: {
      background: "red",
    },
  }),
);

export const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      fontSize: 16,
      border: `solid 1px ${theme.design.colors.grey5}`,
      padding: theme.spacing(1.5, 0, 1.5, 1),

      transition: theme.transitions.create(["border-color", "box-shadow"]),

      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 5,
      },
    },
  }),
)(InputBase);
  