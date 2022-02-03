import React from "react";
import { NavBar } from "Templates/Temp4/Component/NavBar";
import { navData } from "Templates/Temp4/TemplateData";
import { Hero } from "../../Component/Hero/Hero";
import { useHomePageStyles } from "./styles";
import { PopularDishes } from "./Sections/PopularDishes/PopularDishes";
import { DishesData } from "Templates/Temp4/TemplateData";
import { AboutUs } from "Templates/Temp4/Component/AboutUs/AboutUs";
import { ContactUs } from "Templates/Temp4/Component/ContactUs";
import { HeroData } from "Templates/Temp4/TemplateData";
import { Footer } from "Templates/Temp4/Component/Footer/Footer";

export const HomePage = () => {
  const classes = useHomePageStyles();
  return (
    <div>
      <Hero heroData={HeroData} />
      <PopularDishes dishesData={DishesData} />
      <AboutUs/>
      <ContactUs/>
    </div>
  );
};
