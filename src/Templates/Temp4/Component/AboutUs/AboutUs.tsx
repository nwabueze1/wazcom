import { Link } from "react-router-dom";
import { useAboutUsStyles } from "./styles";
import { ArrowForward } from "@mui/icons-material";

export const AboutUs = () => {
  const classes = useAboutUsStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          <div>
            <p className={classes.header}>About Us</p>
            <p className={classes.text}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. Amet
              minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint.{" "}
            </p>
          </div>
          <Link to="/" className={classes.link}>
            <p>Read More</p>
            <ArrowForward />
          </Link>
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.imageContainer}>
            <img
              src="https://s3.eu-west-2.amazonaws.com/medusa.com/templates/unsplash_MtqG1lWcUw0.png"
              alt=""
              className={classes.img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
