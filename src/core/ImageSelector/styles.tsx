import { makeStyles } from "@mui/styles";
import { BaseTheme } from "theme";

export const useImageSelectorStyles = makeStyles((theme: BaseTheme) => ({
  root: {
    minHeight: "150px",
    minWidth: "150px",
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover !important",
    backgroundPosition: "center !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "320px",
    height: "320px",
  },
  cameraIcon: {
    color: theme.design.colors.white,
    cursor: "pointer",
    zIndex: 5,
    background: "transparent",
    fontSize: 64,
  },
  circle: {
    borderRadius: "50%",
  },
}));
