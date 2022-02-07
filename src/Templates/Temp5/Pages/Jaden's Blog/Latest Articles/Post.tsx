import { NavLink } from "react-router-dom";
import { useArticleStyles } from "./styles";
import { Container } from "../../Container";
import { postData } from "Templates/Temp5/TemplateData";

export const LatestArticles = () => {
  const classes = useArticleStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>Latest stories</div>
      <div className={classes.allContainer}>
        {postData.map((articles, index) => {
          return index === 0 ? (
            <div className={classes.container}>
              <img
                className={classes.img}
                src={
                  "https://s3.eu-west-2.amazonaws.com/medusa.com/templates/tamaz-tokmadze-sEnUVVqGmgY-unsplash+3.png"
                }
                alt="a"
              />
         
            </div>
          ) : (
            <>
            
            
            </>
          );
        })}
      </div>
    </div>
  );
};
