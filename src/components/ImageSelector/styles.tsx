import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import theme from "js/theme";

interface styleProps {
  placeholder: string;
}

export const useimageUploaderStyles = makeStyles<Theme, styleProps>(() => ({
  container: {
    height: "325px",
    width: "386px",
    background: ({ placeholder }) => `url(${placeholder})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover !important",
    backgroundPosition: "center !important",

    "& .cameraIcon": {
      color: theme.design.colors.white,
      display: "flex",
      justifyContent: "center",
      paddingTop: "40%",
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
