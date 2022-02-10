import makeStyles from "@mui/styles/makeStyles";

export const useEmptyStateStyles = makeStyles(() => ({
  root: {
    width: "100%",
    boxShadow: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  menus: {
    display: "flex",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    objectFit: "cover",
  },
  text: {},
}));
