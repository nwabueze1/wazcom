import React, { FC } from "react";
import { usePostStyles } from "./styles";
import clx from "classnames";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { BlogPostProps } from "./types";

const BlogPost: FC<BlogPostProps> = ({ src, alt, date, article, variant }) => {
  const classes = usePostStyles();
  return (
    <div className={classes.root}>
      <div className={clx(classes.container, variant && classes.variant)}>
        <div className={classes.menuBox}>
          <img className={classes.image} src={src} alt={alt} />
        </div>
        <div className={classes.article}>
          <p className={classes.date}>{date}</p>
          <p className={classes.BlogText}>{article}</p>
          <p className={classes.moreInfo}>
            <p> Read More</p>
            <ArrowRightAltIcon />
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
