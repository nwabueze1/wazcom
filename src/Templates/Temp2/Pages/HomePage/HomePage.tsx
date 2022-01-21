import React from "react";
import { Hero } from "Templates/Temp2/Component/Hero/Hero";
import { Post } from "../../Component/Post/Post";
import { useHomePageStyles } from "./styles";
import { postData } from "Templates/Temp2/Template2Data";
import { Subscribe } from "Templates/Temp2/Component/Subscribe/Subscribe";
import Intro from "Templates/Temp2/Component/Intro/Intro";

const HomePage = () => {
  const classes = useHomePageStyles();

  const displayPopularPost = () => {
    return postData.map((pop, index) => {
      return (
        <div className={classes.post} key={index}>
          <Post
            src={pop.src}
            alt={pop.alt}
            date={pop.date}
            category={pop.category}
            title={pop.title}
            details={pop.details}
            views={pop.views}
            
          />
        </div>
      );
    });
  };

  return (
    <div className={classes.root}>
      <Hero />
      <div className={classes.container}>
        <p className={classes.header}>Popular Posts</p>
        <div className={classes.popularPost}>{displayPopularPost()}</div>
      </div>
      <div className={classes.container}>
        <p className={classes.header}>Glutten-free</p>
        <div className={classes.popularPost}>{displayPopularPost()}</div>
      </div>
      <div className={classes.container}>
        <p className={classes.header}>Healthy</p>
        <div className={classes.popularPost}>{displayPopularPost()}</div>
      </div>
      <div className={classes.container}>
        <p className={classes.header}>Vegan</p>
        <div className={classes.popularPost}>{displayPopularPost()}</div>
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
