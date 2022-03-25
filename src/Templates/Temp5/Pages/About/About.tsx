import { useArticleStyles } from "./Styles";
import {
  aboutHeroImage,
  aboutImage,
  aboutPageData,
} from "Templates/Temp5/TemplateData";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import { ArticleProps } from "./types";

export const AboutPage: React.FC<ArticleProps> = ({ article, site }) => {
  const classes = useArticleStyles();
  const author = `${site?.user?.firstname} ${site?.user?.lastname}`;
  const defaultBlogImage =
    "https://ik.imagekit.io/uwaknajbdrm/https:/cdn.twistedfood.co.uk/2021/01/a1dbbd66-thumbnal01.jpg?ik-sdk-version=react-1.0.9&tr=w-1843%2Ch-756";
  return (
    <section className={classes.root}>
      <div className={classes.header}>{article.title}</div>
      <img
        className={classes.hero}
        src={article.featured_image ?? `${defaultBlogImage}`}
      />
      <div className={classes.content}>
        dangerouslySetInnerHTML={{ __html: article.content }}
      </div>
      <img
        className={classes.image}
        src={article.featured_image ?? `${defaultBlogImage}`}
      />
      <div className={classes.imageText}>{aboutPageData}</div>
      <hr className={classes.horizontalLine} />
      <div className={classes.footerSection}>
        <h2 className={classes.author}>{author}</h2>
        <p className={classes.category}>
          Categories: {article.category?.slug as string}
        </p>
        <p className={classes.share}>Share article</p>
        <div className={classes.icons}>
          <Facebook />
          <Twitter />
        </div>
      </div>
    </section>
  );
};
