import { useIntroStyles } from "./styles";
import { Hero } from "../../components/Hero/Hero";
import { AboutBlog} from "./Zac Effron/Post";
import { Articles } from "./Latest Articles/post";
import { NavBar } from "Templates/Temp5/components/NavBar/NavBar";
import { Footer } from "Templates/Temp5/components/Footer/Footer";

const IndexPage = () => {
  const classes = useIntroStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <NavBar />
        <Hero />
        <Articles />
        <AboutBlog/>
        <Footer />
      </div>
    </div>
  );
};

export default IndexPage;
