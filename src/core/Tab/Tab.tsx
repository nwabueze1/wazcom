import { FC, useState } from "react";
import clsx from "classnames";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import { Tab as MuiTab } from "@mui/material";
import { TabProps } from "./types";
import { useTabStyles } from "./styles";

export const Tab: FC<TabProps> = ({ className, arr, color, label }) => {
  // const classes = useTabStyles();
  const [isSelected, changeIsSelected] = useState(false);
  return (
    <div />
    // <Paper color={color} className={clsx(classes.tabs, className)}>
    //   <Tabs aria-label={label} variant="scrollable">
    //     {arr.map((label, index) => {
    //       return (
    //         <div />
    //         // <MuiTab
    //         //   label={label}
    //         //   key={index}
    //         //   onClick={() => changeIsSelected(!isSelected)}
    //         //   selected={isSelected}
    //         // ></MuiTab>
    //       );
    //     })}
    //   </Tabs>
    // </Paper>
  );
};
