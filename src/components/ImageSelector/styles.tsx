import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import theme from "../../theme";

interface styleProps {
  placeholder: string;
}

export const useImageSelectorStyles = makeStyles<Theme, styleProps>(() => ({
  container: {
    minHeight: "325px",
    minWidth: "386px",
    position:"relative",
    background: ({ placeholder }) => `url(${placeholder})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover !important",
    backgroundPosition: "center !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& .cameraIcon": {
      color: theme.design.colors.white,
      cursor: "pointer",
      visibility: "hidden",
      zIndex:5,
      background: "transparent"
    },

    "&:hover": {
      "& .cameraIcon": {
        visibility: "visible",
      },
    },

    "& .selectHover": {
      position:"absolute",
      top:0,
      left:0,
      opacity:1,
      width:"100%",
      height:"100%",
      background: "transparent",
      "&:hover":{
        background:"linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7))",
      }
    }
  },

  circleContainer: {
    height: "321px",
    width: "321px",
    borderRadius: "50%",
    position:"relative",
    background: ({ placeholder }) => `url(${placeholder})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover !important",
    backgroundPosition: "center !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& .cameraIcon": {
      color: theme.design.colors.white,
      cursor: "pointer",
      visibility: "hidden",
      zIndex:5,
      background: "transparent"
    },

    "&:hover": {
      "& .cameraIcon": {
        visibility: "visible",
      },
    },

    "& .selectHover": {
      position:"absolute",
      top:0,
      left:0,
      opacity:1,
      width:"100%",
      height:"100%",
      borderRadius: "50%",
      background: "transparent",
      "&:hover":{
        background:"linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7))",
      }
    }
  },
  
}));
