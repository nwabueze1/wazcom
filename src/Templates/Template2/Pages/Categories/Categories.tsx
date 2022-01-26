import React, { useState, useCallback } from "react";
import { useCategoriesStyles } from "./styles";
import clx from "classnames";
import { categoriesTab, postData } from "Templates/Template2/Template2Data";
import { Post } from "Templates/Template2/Component/Post/Post";
import { Subscribe } from "Templates/Template2/Component/Subscribe/Subscribe";

export const Categories = () => {
  const classes = useCategoriesStyles();
  const [activeCategory, setActiveCategory] = useState<string>("Glutten-free");

  const displayTabs = () => {
    return categoriesTab.map((tab, index) => (
      <p
        onClick={() => {
          setActiveCategory(tab);
        }}
        key={index}
        className={clx(classes.tab, {
          [classes.active]: activeCategory === tab,
        })}
      >
        {tab}
      </p>
    ));
  };

  const displayPost = useCallback(() => {
    return postData
      .filter((post) => post.category === activeCategory)
      .map((post, index) => (
        <Post
          key={index}
          date={post.date}
          category={post.category}
          title={post.title}
          details={post.details}
          views={post.views}
          image={{
            src: post.image.src,
            alt: post.image.alt,
          }}
        />
      ));
  }, [activeCategory]);

  return (
    <div className={classes.root}>
      <div className={classes.tabs}>{displayTabs()}</div>
      <div className={classes.menus}>{displayPost()}</div>
      <p className={classes.loadMore}>Load More</p>
      <div className={classes.subscribe}>
        <Subscribe />
      </div>
    </div>
  );
};
