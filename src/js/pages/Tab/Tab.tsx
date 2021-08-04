import React, { FC } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import { Tab as MuiTab } from "@material-ui/core";
import { TabProps } from "./types";

export const Tab: FC<TabProps> = ({ className }) => {
  //   const [value, setValue] = React.useState(2);

  //   const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
  //     setValue(newValue);
  //   };

  return (
    <Paper square>
      <Tabs
        value={1}
        indicatorColor="primary"
        textColor="primary"
        // onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <MuiTab label="Active" />
        <MuiTab label="Disabled" disabled />
        <MuiTab label="Active" />
      </Tabs>
    </Paper>
  );
};
