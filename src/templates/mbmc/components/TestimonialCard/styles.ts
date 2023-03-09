import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";

export const useTestimonialCardPropsStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: theme.spacing(1),
      background: theme.design.colors.waz_white,
      borderRadius: "4px",
      border: `1px solid ${theme.design.colors.waz_grey300}`,
      opacity: 0.2,
      boxSizing: "border-box",
      position: "relative",
      margin: theme.spacing(1, 0),
      transition: " boxShadow 1s ease",
      fontFamily: theme.design.font.montserrat,
    },
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      textAlign: "left",
      boxSizing: "border-box",
      padding: theme.spacing(2),
      width: "100%",
    },
    description: {
      marginBottom: theme.spacing(1),
      lineHeight: "22px",
      textOverflow: "ellipsis",
      fontSize: theme.typography.fontSize + 2,
      color: theme.design.colors.waz_grey400,
      opacity: 0.9,
      border: "1px solid transparent",
      transition: "all 0.3s ease-in",
    },
    name: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(0.5),
      lineHeight: "22px",
      fontSize: theme.typography.fontSize,
      color: theme.design.colors.waz_black,
      fontWeight: theme.typography.fontWeightBold,
      border: "1px solid transparent",
      transition: "all 0.3s ease-in",
      width: "fit-content",
    },
    type: {
      textOverflow: "ellipsis",
      fontSize: theme.typography.fontSize - 2,
      color: theme.design.colors.waz_grey400,
      opacity: 0.9,
      border: "1px solid transparent",
      transition: "all 0.3s ease-in",
      width: "fit-content",
    },
    menuHeaderContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
    visible: {
      opacity: 1,
    },
    cardActiveElement: {
      border: "1px dashed",
      borderColor: theme.design.colors.waz_primaryColor100,
    },
  }),
);
