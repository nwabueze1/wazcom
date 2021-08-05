import React, { FC } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import { Tab as MuiTab } from "@material-ui/core";
import { TabProps } from "./types";
import { useStyles } from "./styles";

export const Tab: FC<TabProps> = ({ className }) => {
  //   const [value, setValue] = React.useState(2);

  //   const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
  //     setValue(newValue);
  //   };

  const classes = useStyles();
  return (
    <Paper style={{ width: "500px" }}>
      <Tabs
        value={0}
        indicatorColor="secondary"
        textColor="secondary"
        // onChange={handleChange}
        aria-label="disabled tabs example"
        variant="standard"
        className={classes.tabs}
      >
        <MuiTab label="Active" />
        <MuiTab label="Active" disabled />
        <MuiTab label="Active" disabled />
      </Tabs>
    </Paper>
  );
};
