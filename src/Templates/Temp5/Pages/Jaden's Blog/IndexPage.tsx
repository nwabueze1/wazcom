import clx from "classnames";
import { FC } from "react";
import { IntroProps } from "./types";
import { useIntroStyles } from "./styles";
import { Hero } from "../../components/Hero/Hero";
import { ZacEffron } from "./Zac Effron/Post";
import { LatestArticles } from "./Latest Articles/Post";
import { NavBar } from "Templates/Temp5/components/NavBar/NavBar";
import { Footer } from "Templates/Temp5/components/Footer/Footer";

const IndexPage: FC<IntroProps> = ({ className }) => {
  const classes = useIntroStyles();
  return (
    <div className={clx(classes.root, className)}>
      <div className={classes.container}>
        <NavBar/>
        <Hero />
        <LatestArticles />
        <ZacEffron /> 
        <Footer/>
      </div>
    </div>
  );
};

export default IndexPage;
