import { useArticleStyles } from "./styles";
import { latestPostData } from "Templates/Temp5/TemplateData";
import { Container } from "./container";
import clx from "classnames";
import Visibility from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

export const Articles = () => {
  const classes = useArticleStyles();
  return (
    <div>
      <div className={classes.leftContainer}>
        <img
          className={classes.img}
          src="https://s3.eu-west-2.amazonaws.com/medusa.com/templates/tamaz-tokmadze-sEnUVVqGmgY-unsplash+3.png"
        />
        <div className={classes.post}>
          <div className={classes.head}>
            <div className={classes.class}>Glutten-free</div>
            <p className={classes.time}>July 7, 2021</p>
            <span className={classes.sight}>
              <Visibility />
              32
            </span>
          </div>

          <div className={classes.info}>
            <h1 className={classes.containerHeader}>
              Backpacking through Europe
            </h1>
            <p className={classes.containerParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
              ut fermentum
            </p>
            <Link to="/template5/gallery" className={classes.readmoreBtn}>
              Read more
            </Link>
          </div>
        </div>
      </div>
      {latestPostData.map((article, index) => (
        <div className={clx(classes.wrapper)} key={index}>
          <Container
            img={{
              src: article.image.src,
              alt: article.image.alt,
            }}
            title={article.title}
            text={""}
            date={article.date}
            description={article.details}
            category={article.category}
            views={article.views}
          />{" "}
        </div>
      ))}
    </div>
  );
};
