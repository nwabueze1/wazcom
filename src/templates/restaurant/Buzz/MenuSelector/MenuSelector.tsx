import { MenuItem, Select } from "@mui/material";
import React from "react";
import { parseMenuTime } from "../../../../utilities";
import { useMenuSelectorStyles } from "./styles";
import { MenuSelectorProps } from "./types";

export const MenuSelector: React.FC<MenuSelectorProps> = ({ menus, handleChange, value }) => {
  const classes = useMenuSelectorStyles();

  const displayMenus = () =>
    menus.map(({ name, times }: any, index: number) => {
      const startTime = parseMenuTime(times?.scheduleItems[0]?.start_time);
      const endtime = parseMenuTime(times?.scheduleItems[0]?.end_time);
      return (
        <MenuItem value={name} key={index} className={classes.menuItem}>
          <p className={classes.options}>
            {name}
            <span className={classes.openingHours}>
              ( Open: {startTime} - {endtime})
            </span>
          </p>
        </MenuItem>
      );
    });

  return (
    <div className={classes.container}>
      <Select variant="outlined" onChange={handleChange} value={value} className={classes.root}>
        {displayMenus()}
      </Select>
    </div>
  );
};
