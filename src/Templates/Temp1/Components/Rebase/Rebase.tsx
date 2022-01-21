import React from "react";
import { useRebaseStyles } from "./styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { blogData } from "../../TemplateData";
import { useHistory } from "react-router-dom";
import { Typography } from "@mui/material";

const Rebase = () => {
  const classes = useRebaseStyles();
  const  router = useHistory()
  const displayBlogList = () => {
    return blogData.map(({ date, article }, index) => (
      <div className={classes.blogBase} key={index}>
        <p className={classes.blogDate}>{date}</p>
        <div className={classes.articleParent}>
          <p>{article}</p>
          <ArrowRightAltIcon />
        </div>
      </div>
    ));
  };
  return (
    <div className={classes.root}>
      <Typography className={classes.header}>Rebase Blog</Typography>
      <div className={classes.container}>
        <div className={classes.content}>
          <p className={classes.body}>
            Check our blog for recipes, press, and to learn more about what goes
            on in our kitchen.
          </p>
        </div>
        <div className={classes.buttonContainer}>
          <button className={classes.button}  onClick={() => router.push("/templates/blog")}>Check Blog</button>
        </div>
      </div>
      <div className={classes.blogList}>{displayBlogList()}</div>
    </div>
  );
};

export default Rebase;
