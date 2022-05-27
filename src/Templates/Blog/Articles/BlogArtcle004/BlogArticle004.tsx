import { FC, useEffect, useState } from "react";
import { defaultBlogImage } from "utilities/images";
import { ArticleProps } from "../types";
import { shareData } from "./data";
import { RelatedPost } from "./RelatedPost/RelatedPost";
import { useBlogArticle004Styles } from "./styles";

export const BlogArticle004: FC<ArticleProps> = ({ article, site }) => {
  const classes = useBlogArticle004Styles();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const blogUrl = loaded && window.location.href;

  const displayRelatedPosts = () =>
    article.related_posts?.map((post, index) => (
      <RelatedPost key={index} article={post} domain={""} />
    ));

  const displaySocialIcons = () => {
    return shareData.map((social, index) => {
      return (
        <a
          key={index}
          href={`${social.href}${blogUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          <img src={social.src} alt={social.alt} />
        </a>
      );
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <div className={classes.imgContainer}>
          <img
            src={article.featured_image ?? `${defaultBlogImage}`}
            alt="featuredImg"
            className={classes.featuredImg}
          />
        </div>
        <h1 className={classes.title}>{article.title}</h1>
        <div className={classes.articleInfo}>
          <div className={classes.avatarContainer}>
            <img
              src={site?.cover_image ?? `${defaultBlogImage}`}
              alt=""
              className={classes.avatarImage}
            />
          </div>
          <p className={classes.written}>
            Written by <span className={classes.writersName}>Olaiya Basit</span>
          </p>
          <div className={classes.dateWritten}>
            <div className={classes.bulletPoint} />
            <p className={classes.date}>October 25, 2019</p>
          </div>
        </div>
        <hr className={classes.line} />
        <div
          dangerouslySetInnerHTML={{ __html: article.content }}
          className={classes.content}
        />
        <div className={classes.shareRoot}>
          <div className={classes.shareContainer}>
            <hr className={classes.shareLine} />
            <div className={classes.icons}>{displaySocialIcons()}</div>
            <hr className={classes.shareLine} />
          </div>
          <p className={classes.shareText}>Share post</p>
        </div>
      </div>
      <div className={classes.relatedArticleContainer}>
        <p className={classes.relatedPostHeader}>Related Posts</p>
        <hr className={classes.postHr} />
        <div className={classes.relatedPosts}>{displayRelatedPosts()}</div>
      </div>
    </div>
  );
};
