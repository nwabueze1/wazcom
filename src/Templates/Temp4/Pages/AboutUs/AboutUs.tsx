import { useAboutUsStyles } from "./styles";
import { Hero } from "../Menu/Hero/Hero";
import { aboutHeroData, aboutData } from "Templates/Temp4/TemplateData";
import { AboutUsComp } from "Templates/Temp4/Component/AboutUsComponent/AboutUs";
import { OurChefs } from "./Sections/Ourchefs/OurChefs";
import { Reviews } from "./Sections/Reviews/Reviews";

export const AboutUs = () => {
  const classes = useAboutUsStyles();

  return (
    <div className={classes.root}>
      <div>
        <Hero heroData={aboutHeroData} />
        <AboutUsComp aboutData={aboutData}  />
        <OurChefs/>
        <Reviews />
      </div>
    </div>
  );
};
