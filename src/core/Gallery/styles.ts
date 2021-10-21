import { makeStyles } from "@mui/styles";
import { BaseTheme } from "theme";

export const useGalleryStyles = makeStyles((theme: BaseTheme) => ({
  galleryBox: {
    maxWidth: "322px",
    height: "322px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover !important",
    backgroundPosition: "center !important",
    transition: "opacity 0.5s ease-in",
    position: "relative",
  },
  checker: {
    textAlign: "end",
  },
  border: {
    border: `4px solid ${theme.design.colors.red70}`,
  },
  galleryHover: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 5,
    opacity: 1,
    background: "transparent",
    "&:hover": {
      background: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7))",
      "& p": {
        visibility: "visible",
      },
    },
    "& p": {
      visibility: "hidden",
      marginTop: "75%",
      color: theme.design.colors.white,
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "bold",
      cursor: "pointer",
    },
  },
}));
