import { useBlogStyles } from "./styles";
import { BlogText } from "./BlogText";
import { Typography } from "@mui/material";
import Hero from "BlogPage/Hero/Hero";
import Slide from "./Slide";
const Main = () => {
  const classes = useBlogStyles();
  return (
    <section>
      <Hero />
      <Typography className={classes.header} variant="h4">
        Earn Passive Income with your NFTs — NFT DeFi Staking
      </Typography>
      <p className={classes.children}> {BlogText}</p>
      <Slide />
    </section>
  );
};

export default Main;
