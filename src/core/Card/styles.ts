import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

export const useCardStyles = makeStyles((theme: BaseTheme) => ({


  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: theme.spacing(1),
  },
  column: {
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
    padding: theme.spacing(2.25, 2),
    width: "365px",
  },
  overviewRoot: {
    boxShadow: "0px 3px 15px ".concat(theme.design.colors.waz_black200),
    padding: theme.spacing(1.5),
  },
  titleContainer: {
    gap: theme.spacing(2),
  },
  cardTitle: {
    fontWeight: theme.typography.fontWeightBold,
  },
  cardLabel: {
    color: theme.design.colors.waz_grey200,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightBold,
  },
  templateCardTitle: {
    color: theme.design.colors.waz_black,
    fontSize: theme.typography.fontSize,
  },
  serviceTemplateCardTitle: {
    color: theme.design.colors.waz_black,
    fontSize: theme.typography.fontSize,
  },
  serviceCardTitle: {
    color: theme.design.colors.waz_primaryBlack,
    fontSize: theme.typography.fontSize + 4,
    paddingBottom: theme.spacing(1),
  },
  overviewCardTitle: {
    color: theme.design.colors.waz_primaryBlack,
    fontSize: theme.typography.fontSize * 2,
  },

  cardContent: {
    color: theme.design.colors.waz_grey1,
    textAlign: "left"
  },


  templateContent: {
    fontSize: theme.typography.fontSize - 2,
  },
  serviceTemplateContent: {
    fontSize: theme.typography.fontSize - 2,

  },
  serviceContent: {
    fontSize: theme.typography.fontSize + 2,
    paddingBottom: theme.spacing(1),
  },
  overviewContent: {
    fontSize: theme.typography.fontSize - 4,
  },
  rateContainer: {
    gap: theme.spacing(.5),
  },
  rateContent: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightBold,
  },
  ascendingRate: {
    color: theme.design.colors.waz_primary100,
  },
  descendingRate: {
    color: theme.design.colors.waz_dangerColor300,
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
