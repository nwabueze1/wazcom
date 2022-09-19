// import { FC } from "react";
// import { truncate } from "lodash";
// import { CoreArticleTemplateFields } from "../../types";
// import { parseDate } from "../../../../../utilities/getTime";
// import { stripHtml } from "../../../../../utilities/Post";
// import { useBloomyRelatedPostStyles } from "./styles";
// import clx from "classnames";

export const BloomyRelatedPost: any = () => {
  // const classes = useBloomyRelatedPostStyles();
  return (
    <div
      // className={clx(classes.root, className)}
      // onClick={() => handleClick?.(article.slug)}
    >
      {/* <div className={classes.thumbnailImgContainer}>
        <img
          src={article.featured_image}
          alt={article.title.slice(0, 20)}
          className={classes.thumbnailImg}
        />
      </div>
      <div>
        <p className={classes.title}>
          {truncate(article.title, { length: 90 })}
        </p>
        <div className={classes.excerpt}>
          {truncate(stripHtml(article.excerpt), { length: 90 })}
        </div>
        <p className={classes.authorContainer}>
          <p className={classes.postedTime}>
            <span className={classes.point} />
            {parseDate(article.created_at)}
          </p>
        </p>
      </div> */}
    </div>
  );
};
