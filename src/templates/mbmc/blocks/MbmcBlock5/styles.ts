import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock5Styles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.design.colors.waz_primaryColor300,
    position: "relative",
    width: "100%",
  },
  mbmcContainer: {
    maxWidth: 1720,
    width: "85%",
    margin: "0 auto",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: theme.spacing(5, 0),

    [theme.breakpoints.down("lg")]: {
      width: "90%",
    },

    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(5, 0, 2, 0),
    },
  },
  footerContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: theme.spacing(1),
    wordBreak: "break-word",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  footerSectionTitle: {
    fontSize: theme.typography.fontSize + 6,
    color: theme.design.colors.waz_white,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: theme.design.font.montserrat,
    marginBottom: theme.spacing(2.5),

    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(2),
    },
  },
  footerSocials: {
    display: "flex",
    alignItems: "flex-end",
    margin: theme.spacing(3, 0, 0, 0),
    gap: theme.spacing(2),
  },
  footerLogoSocials: {
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
  },
  footerSection: {
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
  footerSectionLinkIcon: {
    color: theme.design.colors.waz_white,
    fontSize: theme.typography.fontSize + 8,
    opacity: 1,
    marginRight: theme.spacing(1),
  },
  footerSectionLink: {
    color: theme.design.colors.waz_white,
    fontSize: theme.typography.fontSize + 2,
    textDecoration: "none",
    fontFamily: theme.design.font.montserrat,
    opacity: 0.7,
  },
  footerLinks: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "fit-content",
  },
  footerNote: {
    width: "100%",
    textAlign: "center",
    backgroundColor: theme.design.colors.waz_primaryColor200,
    color: theme.design.colors.waz_white,
    fontFamily: theme.design.font.montserrat,
    fontSize: theme.typography.fontSize,
    padding: theme.spacing(2, 0),
    boxSizing: "border-box",
    lineHeight: 1.9,

    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2, "5%", 2, "5%"),
    },
  },
  footerNoteText: {
    opacity: 0.5,
  },
  footerLogoParent: {
    "& > img": {
      maxWidth: 100,
      maxHeight: 100,
    },

    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(2),
    },
  },
  listContainer: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
  },
  activeElement: {
    border: "1px dashed",
    borderColor: theme.design.colors.waz_primaryColor100,
  },
  footerLogo: {
    width: "57px",
    height: "53px",
  },
}));
