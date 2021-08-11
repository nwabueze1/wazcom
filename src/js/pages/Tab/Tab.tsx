import React, { FC } from "react";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import { Tab as MuiTab } from "@material-ui/core";
import { TabProps } from "./types";
import { useStyles } from "./styles";

export const Tab: FC<TabProps> = ({ className, tabNo }) => {
  const classes = useStyles();
  return (
    <Paper
      style={{ width: "500px" }}
      color="secondary"
      className={clsx(classes.tabs, className)}
    >
      <Tabs value={0} aria-label="disabled tabs example" variant="standard">
        <MuiTab label="Active" />
        <MuiTab label="Active" disabled />
        <MuiTab label="Active" disabled />
      </Tabs>
    </Paper>
  );
};
