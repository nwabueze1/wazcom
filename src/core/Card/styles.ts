import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

export const useCardStyles = makeStyles((theme: BaseTheme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    borderRadius: theme.spacing(.5),

    "& img": {
      height: "110px",
      width: "100%",
      objectFit: "cover",
      objectPosition: "top"
    }
  },
  templateRoot: {
    boxShadow: "0px 3px 15px ".concat(theme.design.colors.waz_black200),
    width: "373px",
    padding: theme.spacing(2),
  },

  serviceTemplateRoot: {
    boxShadow: "0px 3px 15px ".concat(theme.design.colors.waz_black200),
    width: "291px",
    padding: theme.spacing(2),
  },
  serviceRoot: {
    boxShadow: "0px 3px 5px ".concat(theme.design.colors.waz_black300),
    padding: theme.spacing(2),
  },
  overviewRoot: {
    boxShadow: "0px 3px 15px ".concat(theme.design.colors.waz_black200),
    padding: theme.spacing(1.5),
  },
  cardTitle: {
    color: theme.design.colors.waz_black,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize,
  },
  cardContent: {
    color: theme.design.colors.waz_grey1,
    fontSize: "10px",
    textAlign: "left"
  },

  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    gap: theme.spacing(1),
  },
  justifyBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  justifyStart: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  tagsContainer: {
    gap: theme.spacing(.5)
  },
  buttonsContainer: {
    gap: theme.spacing(1)
  },
  leftAlign: {
    textAlign: "left",
    alignItems: "left",
  },
  centerAlign: {
    textAlign: "center",
    alignItems: "center",
  },
  rightAlign: {
    textAlign: "right",
    alignItems: "right",
  },
  regtext: {
    color: theme.design.colors.waz_dangerColor300,
    fontWeight: "bold",
    fontSize: theme.typography.fontSize,
    margin: theme.spacing(2, 0),
  },
  text: {
    textAlign: "justify",
    padding: theme.spacing(0, 2),
    fontSize: theme.typography.fontSize,
  },
}));
