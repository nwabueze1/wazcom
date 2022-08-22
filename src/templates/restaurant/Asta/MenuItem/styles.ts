import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { StyleProps } from "./types";

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: {
      width: "49%",
      height: "156px",
      display: "flex",
      alignItems: "center",
      background: theme.design.colors.waz_white,
      borderRadius: "4px",
      border: `1px solid ${theme.design.colors.waz_grey300}`,
      opacity: 0.2,
      boxSizing: "border-box",
      position: "relative",
      cursor: ({ isOpen }) => (isOpen ? "pointer" : "default"),
      margin: theme.spacing(1, 0),
      transition: " boxShadow 1s ease",
      "&:hover": {
        boxShadow: ({ isOpen }) =>
          isOpen ? "0px 5px 18px -2px rgba(68, 68, 68, 0.12)" : "none",
      },
      [theme.breakpoints.down("lg")]: {
        width: "48%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: 306,
      },
    },
    noMargin: {
      margin: "1% 0",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      textAlign: "left",
      boxSizing: "border-box",
      padding: theme.spacing(2, 1.5),
      width: "60%",
      height: "100%"
    },
    imageWrapper: {
      width: "40%",
      height: 130,
      display: "flex",
      borderTopRightRadius: "4px",
      borderTopLeftRadius: "4px",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      marginRight: theme.spacing(1),
      [theme.breakpoints.down("xs")]: {
        height: "100px",
        width: "100px",
      },
    },
    image: {
      width: "100%",
      height: "auto",
      objectFit: "cover",
      boxSizing: "border-box",
    },

    title: {
      fontSize: theme.typography.fontSize + 4,
      margin: 0,
      textOverflow: "ellipsis",
      lineHeight: "25px",
      color: theme.design.colors.waz_black,
      textTransform: "capitalize",
    },
    description: {
      marginTop:4,
      marginBottom: theme.spacing(1.5),
      lineHeight: "22px",
      textOverflow: "ellipsis",
      fontSize: theme.typography.fontSize,
      height: 50,
      color: theme.design.colors.waz_grey400,
      opacity: 0.9,
      display: "-webkit-box",
      "-webkit-line-clamp": 2, // amount of line you want
      "-webkit-box-orient": "vertical",
      overflow: "hidden"
    },
    amount: {
      fontSize: theme.typography.fontSize + 4,
      fontWeight: 600,
      color: theme.design.colors.black,
      position: "absolute",
      bottom: "20px",
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.fontSize + 4,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.fontSize,
      },
    },
    options_parent: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
    },
    options: {
      position: "absolute",
      top: "125%",
      left: "-70px",
      background: theme.design.colors.white,
      width: "120px",
      height: "92px",
      borderRadius: "10px",
      boxShadow: "0px 5px 18px -2px rgba(68, 68, 68, 0.12)",
      padding: theme.spacing(0, 1),
      opacity: 0,
      zIndex: -9999,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transition: "opacity 0.5s ease-in",
      border: `1px solid ${theme.design.colors.waz_grey50}`,
      "&:before": {
        position: "absolute",
        top: "-22px",
        left: "70px",
        display: "block",
        content: "''",
        border: `11px solid ${theme.design.colors.waz_grey50}`,
        borderRightColor: "transparent",
        borderLeftColor: "transparent",
        borderTopColor: "transparent",
      },
    },
    options_active: {
      opacity: 1,
      zIndex: 10,
    },
    option: {
      height: "50%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      padding: "0 10px",
      fontSize: "16px",
      cursor: "pointer",
    },
    option_edit: {
      borderBottom: "1px solid rgba(0,0,0,0.16)",
    },
    option_delete: {
      color: theme.design.colors.red,
    },
    visible: {
      opacity: "1",
    },
  })
);
