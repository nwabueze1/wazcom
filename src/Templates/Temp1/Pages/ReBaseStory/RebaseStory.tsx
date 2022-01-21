import React from "react";
import BlogPost from "Templates/Temp1/Components/BlogPost/BlogPost";
import { blogData } from "Templates/Temp1/Components/TemplateData";
import { useRebaseStoryStyles } from "./styles";

export const RebaseStory = () => {
  const classes = useRebaseStoryStyles();
  return (
    <div className={classes.root}>
      <p className={classes.header}>Rebase Story</p>
      {blogData.map(({ src, alt, date, article }, index) => {
        return (
          <div className={classes.rebasePage} key={index}>
            <BlogPost src={src} alt={alt} date={date} article={article} variant={Boolean(index % 2)} />
          </div>
        );
      })}
    </div>
  );
};
