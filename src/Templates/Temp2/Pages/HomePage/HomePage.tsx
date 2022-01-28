import { Hero } from "Templates/Temp2/Component/Hero/Hero";
import { useHomePageStyles } from "./styles";
import { Subscribe } from "Templates/Temp2/Component/Subscribe/Subscribe";
import Intro from "Templates/Temp2/Component/Intro/Intro";
import { Healthy } from "./Sections/Healthy";
import { Vegan } from "./Sections/Vegan";
import { GluttenFree } from "./Sections/GluttenFree";
import { Popular } from "./Sections/Popular";

const HomePage = () => {
  const classes = useHomePageStyles();

  return (
    <div className={classes.root}>
      <Hero />
      <Popular />
      <GluttenFree />
      <Healthy />
      <Vegan />
      <Intro className={classes.intro} />
      <Subscribe className={classes.subscribe} />
    </div>
  );
};

export default HomePage;
