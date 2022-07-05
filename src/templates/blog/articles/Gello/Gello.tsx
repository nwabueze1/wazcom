import { FC, useEffect, useState } from "react";
import { CoreArticleTemplateFields } from "../types";
import { shareDataGello } from "./data";
import { RelatedPostGello } from "./RelatedPost/RelatedPost";
import { getDay } from "../../../../utilities/getTime";
import { useGelloStyles } from "./styles";
import clx from "classnames";

export const Gello: FC<CoreArticleTemplateFields> = ({
  article,
  domain,
  handleClick,
}) => {
  const classes = useGelloStyles();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const blogUrl = loaded && window.location.href;

  const displayRelatedPosts = () =>
    article.related_posts?.map((post, index) => (
      <RelatedPostGello
        key={index}
        article={post}
        domain={domain}
        handleClick={handleClick}
      />
    ));

  const isRelatedPosts = Boolean(
    article.related_posts && article.related_posts.length > 0
  );

  const displaySocialIcons = () => {
    return shareDataGello.map((social, index) => {
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
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className={classes.root}>
        <div
          className={clx(classes.contentContainer, {
            [classes.fullContent]: !isRelatedPosts,
          })}
        >
          <div className={classes.imgContainer}>
            <img
              src={article.featured_image}
              alt={article.title.slice(0, 20)}
              className={classes.featuredImg}
            />
          </div>
          <h1 className={classes.title}>{article.title}</h1>
          <div className={classes.articleInfo}>
            <div className={classes.dateWritten}>
              <div className={classes.bulletPoint} />
              <p className={classes.date}>{getDay(article.created_at)}</p>
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
        {isRelatedPosts && (
          <div className={classes.relatedArticleContainer}>
            <p className={classes.relatedPostHeader}>Related Posts</p>
            <hr className={classes.postLine} />
            <div className={classes.relatedPosts}>{displayRelatedPosts()}</div>
          </div>
        )}
      </div>
    </>
  );
};
