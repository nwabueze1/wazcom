import { useArticleStyles } from "./Styles";
import {
  aboutHeroImage,
  aboutImage,
  aboutPageData,
} from "Templates/Temp5/TemplateData";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import { NavBar } from "Templates/Temp5/components/NavBar/NavBar";
import { Footer } from "Templates/Temp5/components/Footer/Footer";

export const AboutPage = () => {
  const classes = useArticleStyles();
  return (
    <section className={classes.root}>
      <NavBar />
      <div className={classes.header}>My trip to Istanbul</div>

      <img className={classes.hero} src={aboutHeroImage} />

      <div className={classes.content}>{aboutPageData}</div>
      <img className={classes.image} src={aboutImage} />
      <div className={classes.imageText}>{aboutPageData}</div>
      <hr className={classes.horizontalLine} />
      <div className={classes.footerSection}>
        <h2 className={classes.author}>Frank Bjorne</h2>
        <p className={classes.category}>Categories: Turkey / Opinion</p>
        <p className={classes.share}>Share article</p>
        <div className={classes.icons}>
          <Facebook />
          <Twitter />
        </div>
      </div>
      <Footer />
    </section>
  );
};
