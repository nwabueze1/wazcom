import { Theme } from "@mui/material/styles";

import makeStyles from "@mui/styles/makeStyles";

export const useImageSelectorStyles = makeStyles((theme: Theme) => ({
  container: {
    height: "100%",
    backgroundColor: theme.design.colors.lightGrey,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      "& .cameraIcon": {
        visibility: "visible",
      },
    },
  },
  circle: {
    borderRadius: "50%",
    border: `3px solid ${theme.design.colors.white}`,
  },
  icon: {
    color: theme.design.colors.black,
    cursor: "pointer",
    opacity: 0,
    zIndex: 5,
    background: "transparent",
    fontSize: "2vw",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    backgroundColor: theme.design.colors.white,
    zIndex: 15,
  },
  label: {
    marginBottom: theme.spacing(1),
    fontSize: "1rem",
  },
  cameraIconSm: {
    fontSize: 20,
  },
  cameraIconMd: {
    fontSize: 40,
  },
  cameraIconLg: {
    fontSize: 60,
  },
  cameraIconXl: {
    fontSize: 80,
  },
  sizeSm: {
    width: "100px",
    height: "100px",
  },
  sizeMd: {
    width: "200px",
    height: "200px",
  },
  sizeLg: {
    width: "300px",
    height: "300px",
  },
  sizeXl: {
    width: "400px",
    height: "400px",
  },
}));
