import React from "react";
import { useDishesStyles } from "../Dishes/styles";
import { menuData } from "../../TemplateData";
import Dishes from "../Dishes/DIshes";
import { Typography } from "@mui/material";

const Menu = () => {
  const classes = useDishesStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.header}>Popular Menu</Typography>
      <div className={classes.menuItem}>
        {menuData.map(({ src, alt, price, menu, mealDetails }, index) => (
          <Dishes
            key={index}
            src={src}
            alt={alt}
            menu={menu}
            price={price}
            mealDetails={mealDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
