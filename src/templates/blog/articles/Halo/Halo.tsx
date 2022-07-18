import { useState, useEffect, FC } from 'react';
import { useHaloStyles } from './styles';
import { Chip } from '@mui/material';
import Circle from "@mui/icons-material/Circle";
import { shareDataHalo } from './data';
import { CoreArticleTemplateFields } from "../types";
import {RelatedPostHalo} from "./RelatedPost/RelatedPost"
import { getDay } from "../../../../utilities/getTime";

export const Halo: FC<CoreArticleTemplateFields> = ({ article, site, domain, }) =>{
    const classes =  useHaloStyles()
    const [loaded, setLoaded] =  useState(false)
    const blogUrl = loaded && window.location.href;
  
    useEffect(() => {
        setLoaded(true);
      }, []);

      const isRelatedPosts = Boolean(
        article.related_posts && article.related_posts.length > 0
      );

      const displayRelatedPosts = () =>
    article.related_posts?.map((post, index) => (
      <RelatedPostHalo key={index} article={post} domain={domain} />
    ));

    const displayTags = () =>
    article?.tags?.map((tag, index) => (
      <Chip
      className={classes.tag}
      label={tag?.name}
      variant="outlined"
      key={index}
    />
    ));

    const displayTopSocialIcons = () => {
        return shareDataHalo.map((social, index) => {
          return (
            <div className={classes.topSocialIcon} key={index}>
                <a
              href={`${social.href}${blogUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              <img className={classes.icon} src={social.src} alt={social.alt} />
            </a>
            </div>
          );
        });
      };
      const displayBottomSocialIcons = () => {
        return shareDataHalo.map((social, index) => {
          return (
            <div className={classes.bottomSocialIcon} key={index}>
                <a
              href={`${social.href}${blogUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              <img className={classes.icon} src={social.src} alt={social.alt} />
            </a>
            </div>
          );
        });
      };

  return (
    <>
     <head>
     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
        </head>
      <div className={classes.root}>
       
        <div className={classes.overlayContainer}>
          <div className={classes.heroContainer}>
            <img
              className={classes.headerImage}
              src={article?.featured_image}
              alt={article.title.slice(0, 20)}
            />

            <div className={classes.heroItems}>
              <div className={classes.titleContainer}>
                {displayTags()}
                <h1 className={classes.title}>{article?.title}</h1>
                <div className={classes.authorInfo}>
                  <p>
                    <span>
                      <Circle className={classes.circleIcon} />{" "}
                      <span className={classes.date}>
                        {getDay(article?.created_at)}
                      </span>{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.heroOverlay}></div>
        </div>
        <div className={classes.body}>
          <div className={classes.topSocialIconsContainer}>{displayTopSocialIcons()}</div>
          <div
            className={classes.postContent}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
        <div className={classes.authorDetails}>
          <div>
          <p className={classes.authorText}>Writen By</p>
            <div className={classes.bottomSocialIconsContainer}>
              {displayBottomSocialIcons()}
            </div>
          </div>
        </div>
      
         <div className={classes.relatedPostsHeader}>
          <span className={classes.relatedPostsLine}>
            <p className={classes.relatedPostsHeading}>
              RELATED POSTS
            </p>
            <div className={classes.hr} />
          </span>
        </div>
        <div className={classes.relatedPostsContainer}>
          {isRelatedPosts && (
            <div className={classes.relatedPostsItems}>
              {displayRelatedPosts()}
            </div>
          )}
        </div>
      </div>
    </>
  );
}