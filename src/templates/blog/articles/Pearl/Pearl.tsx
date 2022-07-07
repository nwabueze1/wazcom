import { FC, useEffect, useState } from "react";
import { parseDate } from "../../../../utilities/getTime";
import { Footer } from "../common/Footer/Footer";
import { CoreArticleTemplateFields } from "../types";
import { shareDataPearl } from "./data";
import { RelatedPostPearl } from "./RelatedPost/RelatedPost";
import { usePearlStyles } from "./styles";

export const Pearl: FC<CoreArticleTemplateFields> = ({
  article,
  site,
  handleClick,
  domain,
}) => {
  const classes = usePearlStyles();
  const [loaded, setLoaded] = useState(false);
  const blogUrl = loaded && window.location.href;

  useEffect(() => {
    setLoaded(true);
  }, []);

  const displayTags = () =>
    article?.tags?.map((tag, index) => (
      <div key={index} className={classes.tag}>
        {tag?.name}
      </div>
    ));

  const displayRelatedPosts = () =>
    article.related_posts
      ?.slice(0, 3)
      .map((post, index) => (
        <RelatedPostPearl
          key={index}
          article={post}
          domain={domain}
          site={site}
          handleClick={handleClick}
        />
      ));

  const displaySocialIcons = () => {
    return shareDataPearl.map((social, index) => {
      return (
        <a
          key={index}
          href={`${social.href}${blogUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          <p className={classes.socialIcon}>{social.icon}</p>
        </a>
      );
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.hero}>
        <img
          src={article.featured_image}
          alt={article.title}
          className={classes.featuredImage}
        />
        <div className={classes.heroContent}>
          <div className={classes.tags}>{displayTags()}</div>
          <h1 className={classes.title}>{article.title}</h1>
          <p className={classes.postedTime}>{parseDate(article.created_at)}</p>
        </div>
        <div className={classes.overlay} />
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.leftColumn}>
          <div className={classes.iconContainer}>{displaySocialIcons()}</div>
          <div
            className={classes.content}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          <div className={classes.iconContainer}>{displaySocialIcons()}</div>
        </div>
        <div className={classes.rightColumn}>
          <h3 className={classes.relatedPost}>Related Posts</h3>
          <div>{displayRelatedPosts()}</div>
        </div>
      </div>
      <Footer name={site?.name as string} className={classes.footer} />
    </div>
  );
};
