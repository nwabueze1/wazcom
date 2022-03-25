import { useCallback, FC } from "react";
import { Visibility, Facebook, Twitter } from "@mui/icons-material";
import { useArticlePageStyles } from "./styles";
import { articleData } from "Templates/Temp2/Pages/Template2Data";
import { RelatedPost } from "Templates/Temp2/Component/RelatedPost/RelatedPost";
import { postData } from "Templates/Temp2/Pages/Template2Data";
import { Subscribe } from "Templates/Temp2/Component/Subscribe/Subscribe";
import { ArticleProps } from "./types";

export const ArticlePage: FC<ArticleProps> = ({ articleProps }) => {
  const classes = useArticlePageStyles();

  const displayRelatedPosts = useCallback(
    () =>
      postData.map((post, index) => (
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
      )),
    [],
  );

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.articleMeta}>
          <p>{articleProps.category}</p>
          <div className={classes.views}>
            <p>{articleProps.date}</p>
            <Visibility className={classes.icon} />
            <p>{articleProps.views}</p>
          </div>
        </div>
        <p className={classes.title}>{articleProps.title}</p>
        <div className={classes.imageContainer}>
          <img
            src={articleProps.featuredImg.src}
            alt={articleProps.featuredImg.alt}
            className={classes.image}
          />
        </div>
        <p className={classes.text}>{articleProps.content}</p>
        <p className={classes.line} />
        <div className={classes.author}>
          <p className={classes.authorName}>{articleProps.author}</p>
          <p className={classes.share}>share article</p>
          <Facebook />
          <Twitter className={classes.icon} />
        </div>
      </div>
      <div className={classes.relatedPost}>
        <p className={classes.relatedHeader}>Related Post</p>
        {displayRelatedPosts()}
      </div>
      <div className={classes.subscribe}>
        <Subscribe />
      </div>
    </div>
  );
};
