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
      marginBottom: theme.spacing(3)
    },
    headerImage: {
      width: "100%",
      height: "500px",
      objectFit: "cover"
    },
    postContent: {
      fontSize: theme.typography.fontSize + 4,
      lineHeight: "32px",
      marginTop: theme.spacing(4)
    },
    title: {
      fontSize: theme.typography.fontSize + 30,
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: "48px",
      marginBottom: theme.spacing(5)
    },
    date: {
      fontSize: theme.typography.fontSize,
    },
    circle: {
      color: theme.design.colors.waz_red,
      height: "10px",
      width: "10px"
    },
    socialIcons: {
      width: "30px",
      height: "30px",
      borderRadius: "15px",
      backgroundColor: theme.design.colors.waz_grey300,
      margin: theme.spacing(2),
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
      marginTop: theme.spacing(-3),
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(0),
        marginLeft: theme.spacing(-2)
      }
    },
    icon: {
      margin: "auto 0",
      marginTop: theme.spacing(0.8)
    },
    relatedPosts: {
      width: "100%",
    },
    relatedPostsContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    relatedPostsHeader: {
      width: "77%",
      margin: "0 auto",
      [theme.breakpoints.down("md")]: {
        width: "90%",
      },
    },
    relatedPostsHeading: {
      fontSize: theme.typography.fontSize + 6,
      fontWeight: theme.typography.fontWeightBold
    },
    relatedPostsItems: {
      width: "80%",
      display: "flex",
      flexDirection: "row",
      [theme.breakpoints.down("md")]: {
        width: "90%",
        flexWrap: "wrap",
        marginLeft: theme.spacing(2)
      },
      justifyItems: "center",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        width: '90%',
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
    }
  }));
  
  