import React, { useCallback, useState } from "react";
import { Hero } from "Templates/Temp2/Component/Hero/Hero";
import { Post } from "../../Component/Post/Post";
import { useHomePageStyles } from "./styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { postData } from "Templates/Temp2/Template2Data";
import { Subscribe } from "Templates/Temp2/Component/Subscribe/Subscribe";
import Intro from "Templates/Temp2/Component/Intro/Intro";
import clx from "classnames"

const HomePage = () => {
  const classes = useHomePageStyles();

  const displayPopularPost = () => {
    return postData.map((post, index) => {
      return (
        <div className={classes.post} key={index}>
          <Post
            src={post.src}
            alt={post.alt}
            date={post.date}
            category={post.category}
            title={post.title}
            details={post.details}
            views={post.views}
          />
        </div>
      );
    });
  };

  const displayGluttenFreePost = useCallback(() => {
    return postData
      .filter((post) => post.category === "Glutten-free")
      .map((post, index) => (
        <Post
          key={index}
          src={post.src}
          alt={post.alt}
          date={post.date}
          category={post.category}
          title={post.title}
          details={post.details}
          views={post.views}
        />
      ));
  }, ["Glutten-free"]);

  return (
    <div className={classes.root}>
      <Hero />
      <div className={classes.container}>
        <p className={classes.header}>Popular Posts</p>
        <div className={classes.postContainer}>{displayPopularPost()}</div>
      </div>
      <div className={classes.container}>
        <div className={clx(classes.header, classes.navigate)}>
          <p>Glutten-free</p>
          <div>
            <button className={classes.btn}>
              <ArrowBackIosIcon />
            </button>
            <button className={classes.btn}>
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
        <div className={classes.postContainer}>{displayGluttenFreePost()}</div>
      </div>
      <div className={classes.container}>
      <div className={clx(classes.header, classes.navigate)}>
          <p>Healthy</p>
          <div>
            <button className={classes.btn}>
              <ArrowBackIosIcon />
            </button>
            <button className={classes.btn}>
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
        <div className={classes.postContainer}>{displayPopularPost()}</div>
      </div>
      <div className={classes.container}>
      <div className={clx(classes.header, classes.navigate)}>
          <p>Vegan</p>
          <div>
            <button className={classes.btn}>
              <ArrowBackIosIcon />
            </button>
            <button className={classes.btn}>
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
        <div className={classes.postContainer}>{displayPopularPost()}</div>
      </div>
      <div className={classes.intro}>
        <Intro />
      </div>
      <div className={classes.subscribe}>
        <Subscribe />
      </div>
    </div>
  );
};

export default HomePage;
