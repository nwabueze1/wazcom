import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";
import { fontSize } from "@mui/system";

export const useCategoriesStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
   fontFamily:theme.include.styles.font.garamond,
    maxWidth: theme.include.styles.maxWidth,
    margin: "0 auto"
  },
 tab: {
   fontWeight: theme.typography.fontWeightBold,
   fontSize:theme.typography.fontSize + 20,
   [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize + 6
  },
 },
 tabs: {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  gap: theme.spacing(12),
  margin: theme.spacing(3, 0),
  color: theme.design.colors.grayline,
  fontSize: theme.typography.fontSize + 6,
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize,
    gap: theme.spacing(8),
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    gap: theme.spacing(7),
    margin: theme.spacing(3, "auto"),
    justifyContent: "flex-start",
    overflow: "scroll",

    "-ms-overflow-style": "none" /* for Internet Explorer, Edge */,
    scrollbarWidth: "none" /* for Firefox */,
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
},
menus: {
  display: "flex",
  flexWrap: "wrap",
  marginTop: theme.spacing(5),
  gap: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    width: "95%",
    margin: "auto",
  },
},
loadMore: {
textAlign: "center",
color: theme.design.colors.terracotta,
textDecoration: "underline",
fontSize: theme.typography.fontSize + 8,
margin: theme.spacing(10, 0)
},
subscribe: {
  margin: theme.spacing(10, 0),
},
active: {
  fontWeight: theme.typography.fontWeightBold,
  color: theme.design.colors.black,
},
}));