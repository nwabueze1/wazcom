import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";
import { HeadsetMic, Height, LineWeight } from "@mui/icons-material";

export const useHaloStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    // width: "60%",
    cursor: "pointer",
    
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      width: "100%",
      display: "flex",

    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  defaultAvatar: {
    height: 32,
    width: 32,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: theme.typography.fontSize + 4,
    color: theme.design.colors.waz_white,
    background: theme.design.colors.waz_orange,
  },

  headerImage: {
    width: "100%",
    height: "560px",
  },
  avatarImage: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },
  heroOverlay: {
    height: "100%",
    zIndex: "1",
    width: "100%",
    position: "absolute",
    top: "0px",
    backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))",
    backgroundColor: "rgba(0,0,0,0)"
  },
  overlayContainer: {
    position: "relative",
  },
  heroContainer: {
    zIndex: "10",
  },
  heroItems: {
    position: "absolute",
    top: "342px",
    left: "76px",
    zIndex: "2",
    width: "80%",
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(-7)
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(-7)
    }
  },
  tags: {
    display: "flex",
    flexDirection: "row",
    color: "white",
    
  },
  tag: {
    color: "white",
    margin: theme.spacing(0.5),
  },
  title: {
    fontSize: "40px",
    fontFamily: "inter",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize * 2,
      lineHeight: "36px",
    },
    width: "100%"
  },
  titleContainer: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(-7)
    },   
  },
  authorName: {
    fontSize: "16px",
    width: "116px",
    lineHeight: "19px",
    fontWeight: 500,
    textTransform: "uppercase",
    color: "white",
  },
  authorInfo: {
    zIndex: "100"
  },
  circleIcon: {
    width: "5px",
    height: "5px",
    color: "white",
    marginLeft: theme.spacing(1.5),
    marginBottom: theme.spacing(0.2)
  },
  date: {
    color: "white",
  },
  body: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    width: "784px",
    margin: "auto",
    padding: "10px",
    marginTop: theme.spacing(3),
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    }
  },
  postContent: {
    lineHeight: "32px"
  },
  socialIcon: {
    width: "30px",
    height: "30px",
    borderRadius: "15px",
    border: "1px solid lightGrey",
    margin: theme.spacing(1.5),
    display: "flex",
    justifyContent: "center",
  },
  topSocialIcons: {
   position: "absolute",
   top: "30px",
   left: "-120px",
    marginTop: theme.spacing(-4)
  },
  icon: {
    marginTop: theme.spacing(0.7),
  },
  authorDetails: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3),
  },
  avatar: {
    width: "56px",
    height: "56px",
  },
  authorText: {
    fontSize: "12px",
    fontWeight: 400,
    color: "#808782",
    LineHeight: "15px",
    textAlign: "center",
  },
  authorNameInfo: {
    color: "black",
    fontSize: "16px",
    lineHeight: "19px",
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  bottomSocialIcons: {
    display: "flex",
    flexDirection: "row",
    marginTop: theme.spacing(-2)
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(-2)
  },
  horizontalLine: {
    width: "32%",
    height: "1px",
    marginTop: theme.spacing(5),
    marginRight: theme.spacing(-2),
    backgroundColor: "black",
    [theme.breakpoints.down("md")]: {
      width: "200px"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: theme.spacing(-0.5)
    },
  },
  relatedPostsLine: {
    marginTop: theme.spacing(2),
    width: "100%",
    // display: "flex",
    // justifyContent: "center",
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(-5)
    },
  },
  relatedPostsTitle: {
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      width: "100px",
      marginLeft: theme.spacing(-5),
      marginTop: theme.spacing(-2)
    },
    [theme.breakpoints.down("md")]: {
      marginLeft:theme.spacing(-5),
      marginRight: theme.spacing(0),
    }
  },
  relatedPostsHeader: {
    display: "flex",
    flexDirection: "row",
    // width: "100%"
  },
  relatedArticleContainer: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: theme.spacing(7),
    },
  },
  relatedPotsContainer: {
    maxWidth: "80%",
    width: "80%",
    margin: "auto"
  },
  name: {
    textAlign: "center",
    marginBottom: theme.spacing(1)
  },
  relatedPostHeadingContainer: {
    display: "flex",
    flexDirection: "row",
    width: "58%",
    margin: "auto"
  },
relatedPostHeading: {

},
hr: {
  height: "1px",
  width: "50%",
  backgroundColor: "black"
}
 

}));

