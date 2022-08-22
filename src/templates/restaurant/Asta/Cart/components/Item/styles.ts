import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { StyleProps } from "./types";

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "130px",
      display: "flex",
      alignItems: "center",
      background: "#fff",
      borderRadius: "4px",
      borderBottom: `1px solid ${theme.design.colors.waz_grey300}`,
      boxSizing: "border-box",
      position: "relative",
      padding: theme.spacing(2),
      cursor: ({ isOpen }) => (isOpen ? "pointer" : "default"),
      margin: theme.spacing(1, 0),
      transition: " boxShadow 1s ease",
      "&:hover": {
        boxShadow: ({ isOpen }) =>
          isOpen ? "0px 5px 18px -2px rgba(68, 68, 68, 0.12)" : "none",
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
      width: "70%",
    },
    imageWrapper: {
      width: "30%",
      height: "100%",
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
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      boxSizing: "border-box",
    },

    title: {
      fontSize: theme.typography.fontSize + 4,
      textOverflow: "ellipsis",
      lineHeight: "150%",
      color: theme.design.colors.waz_black,
      textTransform: "capitalize",
    },
    description: {
      lineHeight: "19px",
      fontSize: theme.typography.fontSize,
      height: 36,
      color: theme.design.colors.waz_grey400,
      opacity: 0.9,
      display: "-webkit-box",
      "-webkit-line-clamp": 1, // amount of line you want
      "-webkit-box-orient": "vertical",
      overflow: "hidden"
    },
    amount: {
      fontSize: theme.typography.fontSize + 4,
      fontWeight: 600,
      color: theme.design.colors.black,
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
      padding: "0 5px",
      opacity: 0,
      zIndex: -9999,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transition: "opacity 0.5s ease-in",
      border: "1px solid #EEEEEE",
      "&:before": {
        position: "absolute",
        top: "-22px",
        left: "70px",
        display: "block",
        content: "''",
        border: "11px solid #EEEEEE",
        borderRightColor: "transparent",
        borderLeftColor: "transparent",
        borderTopColor: "transparent",
      },
    },
    icon: {
      color: theme.design.colors.waz_primaryColor100,
      cursor: "pointer",
      fontSize: theme.typography.fontSize + 10,
    },
    optionsContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& p": {
        margin: theme.spacing(0, 1),
        fontSize: theme.typography.fontSize + 4,
      },
    },
    closeIconContainer: {
      borderRadius: "50%",
      background: theme.design.colors.waz_grey300,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
    },
    closeIcon: {
      color: theme.design.colors.waz_greenishGrey2
    },
    optionsGroup: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
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
