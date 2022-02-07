import { useArticleStyles } from "./styles";
import { categoryData } from "Templates/Temp5/TemplateData";
import { Container } from "./Container";
import clx from "classnames";

export const Articles = () => {
  const classes = useArticleStyles();
  return (
    <div>
      {categoryData.splice(0, 1).map((article, index) => (
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
      <div className={classes.allContainers}>
        {categoryData.map((article, index) => {
          return (
            <div className={clx(classes.container)} key={index}>
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
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
