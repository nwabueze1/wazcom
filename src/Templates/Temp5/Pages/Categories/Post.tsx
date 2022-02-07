import { Footer } from "Templates/Temp5/components/Footer/Footer";
import { NavBar } from "Templates/Temp5/components/NavBar/NavBar";
import Articles from "./Articles";
import { useArticleStyles } from "./styles";

export const CategoryPage = () => {
  const classes = useArticleStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <div className={classes.header}>Categories</div>
      <ul className={classes.unorderedLists}>
        <li className={classes.listItem}>Popular Posts</li>
        <li className={classes.listItem}>Opinion </li>
        <li className={classes.listItem}>North America</li>
        <li className={classes.listItem}>Asia </li>
        <li className={classes.listItem}>South America</li>
        <li className={classes.listItem}>Africa</li>
      </ul>
      <Articles /> 
      <Footer />
    </div>
  );
};
