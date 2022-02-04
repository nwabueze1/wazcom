import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useArticleStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "90%",
    height: "100%",
    fontFamily: "Lato",
    margin: "auto",
  },
  header: {
    display: "flex",
    fontFamily: "Lato",
    fontSize: "32px",
    justifyContent: "center",
  },
  unorderedLists: {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-between",
    margin: "auto",
    width: "50%",
    marginTop: "32px",
    color: "#999999",
    fontSize: "20px",
    
  },

  listItem:{
    "&:hover": {
      color: "black",
    
    },
  },
  container: {
    width: "90%",
    margin: "auto",
    marginTop: "67px",
  },
  containerImage: { width: "42%", height: "35vh" },
  head: {
    marginTop: "20px",
    width: "42%",
    display: "flex",
    justifyContent: "space-between",
  },
  catergory: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  containerInfo: {
    width: "45%",
  },
  containerHeader: { fontSize: "24px", fontWeight: 600 },
  containerParagraph: { fontSize: "16px", lineHeight: "24px", width: "90%" },
  views: {
    display: "flex",
    justifyContent: "flex-end",
    width: "10%",
  },

  date: {
    width: "70%",
    display: "flex",
    justifyContent: "flex-end",
  },
  readmoreBtn: {
    marginTop: "20px",
    fontSize: "16px",
    fontWeight: 600,
  },
}));
