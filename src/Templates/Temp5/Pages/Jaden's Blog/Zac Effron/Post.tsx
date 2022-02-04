import { Button } from "core";
import { about, articleData } from "Templates/Temp5/TemplateData";

import { useArticleStyles } from "./styles";

export const ZacEffron = () => {
  const classes = useArticleStyles();
  return (
    <div className={classes.root}>
      <div className={classes.post}>
        <div className={classes.textContainer}>
          <div className={classes.header}>
            <h1 className={classes.title}>{about.title}</h1>
            <p className={classes.description}>{articleData.description}</p>
            <Button className={classes.btn}>Read More</Button>
          </div>
        </div>
        <img className={classes.img} src={about.image.src} />
      </div>
    </div>
  );
};
