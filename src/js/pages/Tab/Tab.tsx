import React, { FC } from "react";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import { Tab as MuiTab } from "@material-ui/core";
import { TabProps } from "./types";
import { useStyles } from "./styles";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { red, green } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: red,
    secondary: green,
  },
});
export const Tab: FC<TabProps> = ({ className }) => {
  const classes = useStyles();
  return (
    <Paper
      style={{ width: "500px" }}
      color="secondary"
      className={classes.tabs}
    >
      <Tabs
        value={0}
        aria-label="disabled tabs example"
        variant="standard"
        style={{ borderRadius: "10px" }}
      >
        <MuiTab label="Active" />
        <MuiTab label="Active" disabled />
        <MuiTab label="Active" disabled />
      </Tabs>
    </Paper>
  );
};
