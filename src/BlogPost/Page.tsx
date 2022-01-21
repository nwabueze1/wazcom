import { menuData } from "./data";
import { useBlogStyles } from "./styles";
import clx from "classnames";
import Container from "./BlogContainer";

const Page = () => {
  const classes = useBlogStyles();
  return (
    <>
      {menuData.map(({ alt, src }, index) => {
        return (
          <div key={index}>
            <div
              className={clx(
                classes.container,
                index != 1 && classes.BlogArticle,
              )}
            >
              <div className={classes.menuBox}>
                <img className={classes.image} src={src} alt={alt} />
              </div>
              <Container />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Page;
