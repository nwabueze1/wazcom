import React, { useState, useCallback } from "react";
import { usePageDishesStyles } from "./styles";
import clx from "classnames";
import { menuData } from "../../Components/TemplateData";
import Dishes from "../../Components/Dishes/DIshes";

const DishesPage = () => {
  const classes = usePageDishesStyles();
  const [activeCategory, setActiveCategory] = useState<string>("APPERTIZERS");

  const displayTabs = () => {
    const tabs = ["APPERTIZERS", "DESERT", "PASTA", "SALADS", "RISOTTO"];
    return tabs.map((tab, index) => (
      <p
        key={index}
        onClick={() => {
          setActiveCategory(tab);
        }}
        className={clx(classes.tab, {
          [classes.active]: activeCategory === tab,
        })}
      >
        {tab}
      </p>
    ));
  };

  const displayMenu = useCallback(() => {
    return menuData
      .filter((menu) => menu.category === activeCategory)
      .map((menu, index) => (
        <Dishes
          key={index}
          src={menu.src}
          alt={menu.alt}
          menu={menu.menu}
          price={menu.price}
          mealDetails={menu.mealDetails}
        />
      ));
  }, [activeCategory]);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <p className={classes.header}>ReBase DISHES</p>
        <div className={classes.tabs}>{displayTabs()}</div>
        <div className={classes.menus}>{displayMenu()}</div>
      </div>
    </div>
  );
};

export default DishesPage;
