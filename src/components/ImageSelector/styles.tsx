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
    },

    "&:hover": {
      "& .cameraIcon": {
        visibility: "visible",
      },
    },
  },
  circleContainer: {
    height: "321px",
    width: "321px",
    borderRadius: "50%",
  },
}));
