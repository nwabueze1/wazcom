import { Footer } from "Templates/Temp5/components/Footer/Footer";
import { NavBar } from "Templates/Temp5/components/NavBar/NavBar";
import { listItems } from "Templates/Temp5/TemplateData";
import Articles from "./Articles";
import { useArticleStyles } from "./styles";

export const CategoryPage = () => {
  const classes = useArticleStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <div className={classes.header}>Categories</div>
      <ul className={classes.unorderedLists}>
        {listItems.map((item, index) => {
          <div>
            <li>{item.Continent1}</li>
            <li>{item.Continent2}</li>
            <li>{item.Continent3}</li>
            <li>{item.Continent4}</li>
            <li>{item.Continent5}</li>
            <li>{item.Continent6}</li>
          </div>;
        })}
      </ul>
      <Articles />
      <Footer />
    </div>
  );
};
