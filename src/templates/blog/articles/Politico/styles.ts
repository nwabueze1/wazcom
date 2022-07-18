import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const usePoliticoStyles = makeStyles<Theme>((theme: Theme) => ({
    root: {
      marginBottom: theme.spacing(4),
      fontFamily: theme.design.font.bitter,
      display: "flex",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      backgroundColor: theme.design.colors.waz_peach
    },
    tag: {
      color: theme.design.colors.waz_red,
    },
    content: {
      width: "60%",
      marginTop: theme.spacing(7),
      [theme.breakpoints.down("md")]: {
        width: "90%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "90%",
      }
    },
    tagContainer: {
      display: "flex",
      flexDirection: "row",
      gap: theme.spacing(2),
      marginBottom: theme.spacing(3),
      textTransform: "capitalize"
    },
    headerImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    postContent: {
      fontSize: theme.typography.fontSize + 4,
      lineHeight: "32px",
      marginTop: theme.spacing(4)
    },
    title: {
      fontSize: theme.typography.fontSize + 28,
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: "60px",
      marginBottom: theme.spacing(5)
    },
    date: {
      fontSize: theme.typography.fontSize,
      fontWeight: theme.typography.fontWeightRegular,
      marginBottom: theme.spacing(-4),
      marginTop: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(0),
        marginTop: theme.spacing(0),
      },
    },
    circle: {
      color: theme.design.colors.waz_red,
      height: "7px",
      width: "7px"
    },
    socialIcons: {
      width: "40px",
      height: "40px",
      borderRadius: "20px",
      backgroundColor: theme.design.colors.waz_grey300,
      margin: theme.spacing(1),
      display: "flex",
      justifyContent: "center",
    },
    authorInfo: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column"
      }
    },
    socialIconsContainer: {
      display: "flex",
      flexDirection: "row",
      marginTop: theme.spacing(-2),
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(1.5),
        marginLeft: theme.spacing(-1),
        marginBottom: theme.spacing(1.5)
      }
    },
    icon: {
      margin: "auto 0",
      marginTop: theme.spacing(1.5)
    },
    relatedPosts: {
      width: "100%",
    },
    relatedPostsContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      justifyItems: "center",

    },
    relatedPostsHeader: {
      width: "85%",
      margin: "0 auto",
      [theme.breakpoints.down("md")]: {
        width: "90%",
      },
    },
    relatedPostsHeading: {
      fontSize: theme.typography.fontSize + 6,
      fontWeight: theme.typography.fontWeightBold,
      fontFamily: theme.design.font.bitter
    },
    relatedPostsItems: {
      width: "85%",
      display: "flex",
      flexDirection: "row",
      gap: theme.spacing(5),
      justifyItems: "center",
      marginTop: theme.spacing(1),
      [theme.breakpoints.down("md")]: {
        width: "90%",
        flexWrap: "wrap",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        width: '100%',
      }
    },
    hr: {
      width: "100%",
      height: "1px",
      backgroundColor: theme.design.colors.waz_grey500,
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    main: {
      backgroundColor: theme.design.colors.waz_peach,
    },
  }));
  
  