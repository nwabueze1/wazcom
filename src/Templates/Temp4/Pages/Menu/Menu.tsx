import { useCallback, FC, useState } from "react";
import { menuHeroData } from "Templates/Temp4/TemplateData";
import { Hero } from "./Hero/Hero";
import { useMenuStyles } from "./styles";
import { MenuProps } from "./types";
import clx from "classnames";
import { Card } from "Templates/Temp4/Component/Card";

export const Menu: FC<MenuProps> = ({ categoriesTabs, dishesData }) => {
  const classes = useMenuStyles();
  const [activeCategory, setActiveCategory] = useState<string>("All");


  const displayTabs = useCallback(
    () =>
      categoriesTabs?.map((tab, index) => (
        <p
          onClick={() => {
            setActiveCategory(tab);
          }}
          key={index}
          className={clx(classes.tab, {
            [classes.active]: activeCategory === tab,
          })}
        >
          {tab}
        </p>
      )),
    [activeCategory],
  );

  const displayDishes = () =>
    dishesData
    ?.filter((dish) => activeCategory.toLowerCase() === "all" ? true : dish.category.toLowerCase() === activeCategory.toLowerCase())
    .map((dish, index) => (
        <Card
          key={index}
          img={{
            src: dish.img.src,
            alt: dish.img.alt,
          }}
          dishName={dish.dishName}
          price={dish.price}
          currency={"$"}
        />
      ));

 
  return (
    <div className={classes.root}>
      <Hero heroData={menuHeroData} />
      <div className={classes.tabs}>{displayTabs()} </div>
      <p className={classes.line}></p>
      <div className={classes.container}>
        <div className={classes.dishes}>{displayDishes()}</div>
      </div>
    </div>
  );
};
