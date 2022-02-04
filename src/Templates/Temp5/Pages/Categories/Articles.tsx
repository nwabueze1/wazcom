import { useArticleStyles } from "./styles";
import { categoryData } from "Templates/Temp5/TemplateData";
import { Container } from "./Container";

export const Articles = () => {
  const classes = useArticleStyles();
  return (
    <div className={classes.allContainers}>
      {categoryData.map((article, index) => {
        return (
          <Container
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
        );
      })}
    </div>
  );
};

export default Articles;
