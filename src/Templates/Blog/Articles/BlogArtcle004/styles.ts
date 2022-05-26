import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useBlogArticle004Styles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  contentContainer: {
    width: "60%",
  },
  relatedArticleContainer: {
    width: "30%",
  },
}));
