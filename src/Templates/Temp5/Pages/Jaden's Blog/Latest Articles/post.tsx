import { useArticleStyles } from "./styles";
import { latestPostData } from "Templates/Temp5/TemplateData";
import { Container } from "./container";

export const Articles = () => {
  const classes = useArticleStyles();
  return (
    <div>
      {latestPostData.map((article, index) => (
        <Container
          className={classes.wrapper}
          key={index}
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
        />
      ))}
    </div>
  );
};
