import { Link } from "react-router-dom";
import {FC} from "react"
import { useAboutUsStyles } from "./styles";
import { AboutProps } from "./types";
import { ArrowForward } from "@mui/icons-material";

export const AboutUsComp: FC<AboutProps> = ({aboutData}) => {
  const classes = useAboutUsStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          <div>
            <p className={classes.header}>About Us</p>
            <p className={classes.text}>
             {aboutData.text}
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
              src={aboutData.img.src}
              alt={aboutData.img.alt}
              className={classes.img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
