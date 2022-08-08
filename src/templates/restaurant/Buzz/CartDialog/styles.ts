import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  dialog__close: {
    position: "absolute",
    top: "25px",
    right: "25px",
    zIndex: 99,
  },
  dialog: {
    position: "relative",
    boxSizing: "border-box",
    borderBottomLeftRadius: theme.spacing(1),
    borderBottomRightRadius: theme.spacing(1),
    width: 568,
    maxHeight: "75vh",
    overflowY: "auto",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

    "& .MuiRadio-colorSecondary.Mui-checked": {
      color: theme.design.colors.waz_primaryColor100,
    },

    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      color: theme.design.colors.waz_primaryColor100,
    },

    "&::-webkit-scrollbar": {
      width: "4px",
    },

    "&::-webkit-scrollbar-thumb": {
      background: "rgba(0,0,0,0.2)",
    },

    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "100vh",
      width: "100%",
      justifyContent: "flex-start",
      borderRadius: 0,
    },
  },
  closeIconContainer: {
    height: 32,
    width: 32,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.design.colors.waz_greenishGrey2,
    cursor: "pointer",
    position: "absolute",
    zIndex: 5,
    right: 16,
    top: 16,
  },
  closeIcon: {
    color: theme.design.colors.waz_white,
  },
  dialogImageParent: {
    width: "100%",
    height: "236px",
    position: "relative",
    flexShrink: 0,
  },
  cartImage: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  dialog__name: {
    fontSize: theme.typography.fontSize + 4,
    color: theme.design.colors.primaryBlack,
    fontWeight: theme.typography.fontWeightMedium,
    margin: "32px 0 10px 0",
    width: "90%",
    textTransform: "capitalize",
  },
  dialog__description: {
    fontSize: theme.typography.fontSize,
    width: "90%",
    lineHeight: "24.55px",
    color: theme.design.colors.grey2,
  },
  dialog__actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "20%",
    "& p": {
      margin: 0,
      fontSize: theme.typography.fontSize * 2,
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.fontSize + 4,
      },
    },
  },
  dialogOptions: {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  total: {
    fontSize: theme.typography.fontSize + 4,
    padding: theme.spacing(1, 3),
    textAlign: "center",
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: "21px",
  },
  actions: {
    position: "sticky",
    bottom: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    padding: theme.spacing(3, "5%"),
    background: "rgba(255, 255, 255, 0.7)",
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
    },
  },
  icon: {
    color: theme.design.colors.waz_primaryColor100,
    cursor: "pointer",
    fontSize: theme.typography.fontSize * 2.5,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 4,
    },
  },
  dialog__option: {
    padding: theme.spacing(1, 8),
    fontSize: theme.typography.fontSize + 4,
    fontWeight: theme.typography.fontWeightMedium,
    borderRadius: "4px",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1, 3),
    },
  },
  dialog__option_outline: {
    border: "2px solid #FF4C4C",
    color: "#FF4C4C",
    background: theme.design.colors.waz_white,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      textAlign: "center",
      marginBottom: theme.spacing(2),
    },
  },
  totalItemPrice: {
    background: " rgba(230, 231, 230, 0.5)",
  },
  dialogOptionFilled: {
    background: theme.design.colors.waz_primaryColor100,
    color: theme.design.colors.waz_white,
    border: "none",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      justifyContent: "flex-end",
    },
  },
  errorMsg: {
    color: theme.design.colors.sunRed,
    fontSize: theme.typography.fontSize + 2,
    margin: theme.spacing(1, 0, 1.5),
  },
  dialogBox: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: -9999,
    opacity: 0,
    transition: "opacity 0.5s ease-in",
  },
  dialogActive: {
    zIndex: 9999,
    opacity: 1,
  },
}));
