import { Button } from "@mui/material";
import { truncate } from "lodash";
import React, { FC } from "react";
import { CoreArticleTemplateFields } from "templates";
import { parseDate } from "utilities/getTime";
import { stripHtml } from "utilities/Post";
import { useBloomyRelatedPostStyles } from "./styles";
import clx from "classnames";

export const BloomyRelatedPost: FC<CoreArticleTemplateFields> = ({
  article,
  site,
  className,
  handleClick,
}) => {
  const classes = useBloomyRelatedPostStyles();
  return (
    <div className={clx(classes.root, className)}>
      <div className={classes.thumbnailImgContainer}>
        <img
          src={article.featured_image}
          alt={article.title.slice(0, 20)}
          className={classes.thumbnailImg}
        />
      </div>
      <div>
        <p className={classes.title}>
          {truncate(article.title, { length: 100 })}
        </p>
        <div className={classes.excerpt}>
          {truncate(stripHtml(article.excerpt), { length: 100 })}
        </div>
        <p className={classes.authorContainer}>
          <p className={classes.author}>
            {site?.user?.firstname}&nbsp;{site?.user?.lastname}
          </p>
          <p className={classes.postedTime}>
            <span className={classes.point} />
            {parseDate(article.created_at)}
          </p>
        </p>
        <Button
          onClick={() => handleClick?.(article.slug)}
          className={classes.btn}
        >
          Read More
        </Button>
      </div>
    </div>
  );
};
