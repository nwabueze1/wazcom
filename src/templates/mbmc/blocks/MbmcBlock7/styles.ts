import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock7Styles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.design.colors.waz_white,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
    padding: theme.spacing(12, 0),

    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(8, 0),
    },
    [theme.breakpoints.down("md")]: {
      height: "100%",
      padding: theme.spacing(5, 0),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4, 0),
    },
  },
  headerContent: {
    width: "85%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginBottom: theme.spacing(2),
    maxWidth: 1720,
  },
  headerTitle: {
    color: theme.design.colors.waz_primaryColor300,
    fontSize: theme.typography.fontSize * 4,
    letterSpacing: 0,
    textTransform: "capitalize",
    font: "normal normal medium 68px/100px Losta Masta;",
    margin: 0,
    textAlign: "center",
    marginBottom: theme.spacing(2),
    fontFamily: theme.design.font.lostaMasta,
    border: "1px solid transparent",

    [theme.breakpoints.down(1450)]: {
      fontSize: theme.typography.fontSize * 3,
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.fontSize * 2,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize * 2,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize * 1.5,
      fontWeight: 800,
      marginBottom: theme.spacing(1),
      width: "100%",
    },
  },
  headerDescription: {
    color: theme.design.colors.waz_greyColor600,
    textAlign: "center",
    fontSize: theme.typography.fontSize + 6,
    width: "38%",
    fontFamily: theme.design.font.montserrat,
    marginBottom: theme.spacing(6),
    border: "1px solid transparent",

    [theme.breakpoints.down(1450)]: {
      fontSize: theme.typography.fontSize + 3,
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.fontSize + 3,
      marginBottom: theme.spacing(4),
      width: "70%",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 2,
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  imageContainer: {
    width: "100%",
    borderRadius: 4,
    objectFit: "cover",
    height: "23.7vw",
    maxHeight: "341px",

    [theme.breakpoints.down("sm")]: {
      height: "116px",
    },
  },
  flexGrow: {
    gridRow: "1 / span 2",
    gridColumn: "3/3",
    height: "100%",
  },
  smallImageContainer: {
    height: "340px",
  },
  mobileImageContainer: {
    width: "100%",
    height: "116px",
    objectFit: "cover",
    borderRadius: 4,
  },
  mobileCardContainer: {
    width: "85%",
    maxWidth: 1720,
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: theme.spacing(1),
    height: "fit-content",
  },
  block7ActiveElement: {
    border: "1px dashed",
    borderColor: theme.design.colors.waz_primaryColor100,
  },
}));
