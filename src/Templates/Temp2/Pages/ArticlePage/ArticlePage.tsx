import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useArticlePageStyles } from "./styles";
import { articleData } from "Templates/Temp2/Template2Data";
import { RelatedPost } from "Templates/Temp2/Component/RelatedPost/RelatedPost";
import { postData } from "Templates/Temp2/Template2Data";
import { Subscribe } from "Templates/Temp2/Component/Subscribe/Subscribe";

export const ArticlePage = () => {
  const classes = useArticlePageStyles();

  const displayRelatedPost = () => {
    return postData.map((post, index) => {
      return (
        <RelatedPost
          key={index}
          image={{
            src: post.image.src,
            alt: post.image.alt,
          }}
          date={post.date}
          category={post.category}
          title={post.title}
          details={post.details}
          views={post.views}
        />
      );
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.articleMeta}>
          <p>{articleData.category}</p>
          <div className={classes.views}>
            <p>{articleData.date}</p>
            <VisibilityIcon className={classes.icon} />
            <p>{articleData.views}</p>
          </div>
        </div>
        <p className={classes.title}>
          Garlicky Brown Butter Parmesan Noodlestitle
        </p>
        <div className={classes.imageContainer}>
          <img
            src={articleData.img}
            alt=""
            className={classes.image}
          />
        </div>
        <p className={classes.text}>{articleData.content}</p>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src={articleData.img}
            alt=""
          />
        </div>
        <p className={classes.text}>
          <p className={classes.subHeader}>{articleData.subheading}</p>
          {articleData.subcontent}
        </p>
        <p className={classes.line} />
        <div className={classes.author}>
          <p className={classes.authorName}>{articleData.author}</p>
          <p className={classes.share}>share article</p>
          <FacebookIcon />
          <TwitterIcon className={classes.icon} />
        </div>
      </div>
      <div className={classes.relatedPost}>
        <p className={classes.relatedHeader}>Related Post</p>
        {displayRelatedPost()}
      </div>
      <div className={classes.subscribe}>
        <Subscribe />
      </div>
    </div>
  );
};
