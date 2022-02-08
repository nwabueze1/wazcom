import React, {FC} from "react";
import { useBlogPageStyles } from "./styles";
import { BlogProps } from "./types";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";

export const BlogPage: FC <BlogProps> = ({image, title, content}) => {
  const classes = useBlogPageStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <img
            src={image.src}
            alt={image.alt}
            className={classes.image}
          />
        </div>
        <div className={classes.contentContainer}>
          <p className={classes.header}>
           {title}
          </p>
          <p className={classes.content}>
           {content}
          </p>
        </div>
        <div className={classes.navContainer}>
          <div className={classes.slide}>
            <div className={classes.rightSlide}>
              <ArrowRightAlt className={classes.leftArrow} />
              <div>Check our blog for recipes.....</div>
            </div>
            <div className={classes.leftSlide}>
              <div>Check our blog for recipes.....</div>
              <ArrowRightAlt className={classes.rightArrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
