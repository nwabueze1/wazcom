import React from "react";
import { NavBar } from "Templates/Temp4/Component/NavBar";
import { navData } from "Templates/Temp2/Pages/Template2Data";
import { Hero } from "../../Component/Hero/Hero";
import { useHomePageStyles } from "./styles";
import { PopularDishes } from "./Sections/PopularDishes/PopularDishes";
import { DishesData } from "Templates/Temp4/TemplateData";

export const HomePage = () => {
  const classes = useHomePageStyles();
  return (
    <div>
      <NavBar navHeader={"LOGO"} navData={navData} />
      <Hero />
      <PopularDishes dishesData={DishesData} />
    </div>
  );
};
