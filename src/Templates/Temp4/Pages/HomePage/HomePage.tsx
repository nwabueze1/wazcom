import { Hero } from "../../Component/Hero/Hero";
import { useHomePageStyles } from "./styles";
import { PopularDishes } from "./Sections/PopularDishes/PopularDishes";
import { DishesData } from "Templates/Temp4/TemplateData";
import { AboutUsComp } from "Templates/Temp4/Component/AboutUsComponent/AboutUs";
import { ContactUsForm } from "Templates/Temp4/Component/ContactUsForm";
import { HeroData, aboutData } from "Templates/Temp4/TemplateData";

export const HomePage = () => {
  const classes = useHomePageStyles();
  return (
    <div>
      <Hero heroData={HeroData} />
      <PopularDishes dishesData={DishesData} />
      <AboutUsComp aboutData={aboutData}  />
      <ContactUsForm />
    </div>
  );
};
