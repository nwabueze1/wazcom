import { useHeroStyles } from "./styles";

const Hero = () => {
  const classes = useHeroStyles();
  return (
    <img
      src="https://cdn.wazobia.tech/Blog/blogheader.webp"
      alt="HeroImage"
      className={classes.HeroImage}
    />
  );
};

export default Hero;
