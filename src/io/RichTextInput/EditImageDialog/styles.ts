import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useEditImageDialogStyles = makeStyles((theme: Theme) => ({
  editMediaModal: {
    backgroundColor: theme.design.colors.waz_white,
    width: "33%",
    height: "67%",
    margin: theme.spacing(0, "auto"),
    borderRadius: "6px",
    marginTop: theme.spacing(30),
    padding: theme.spacing(3),
    border: "none",
    [theme.breakpoints.down("md")]: {
      width: "60%",
      height: "50%",
    },
  },
  editMediaInput: {
    height: "40px",
    width: "100%",
    margin: theme.spacing(0, "auto"),
    marginTop: theme.spacing(3),
    borderRadius: "5px",
    paddingInline: theme.spacing(1),
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  editMediaSizeInput: {
    width: "100%",
    height: "40px",
    marginTop: theme.spacing(3),
    margin: theme.spacing(0, "auto"),
    borderRadius: "5px",
    paddingInline: theme.spacing(1),
  },
  editMediaSizeContainer: {
    display: "flex",
    flexDirection: "row",
  },
  editButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    justifyItems: "center",
    gap: theme.spacing(2),
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(-1)
  },
  editMediaSubmitBtn: {
    backgroundColor: theme.design.colors.waz_primaryColor100,
    width: "70px",
    height: "30px",
    color: theme.design.colors.waz_white,
    '&:hover': {
      background: theme.design.colors.waz_primaryColor100
    },
  },
  editMediaCancelBtn: {
    backgroundColor: theme.design.colors.waz_grey100,
    width: "70px",
    height: "30px",
    color: theme.design.colors.waz_white,
    '&:hover': {
      background: theme.design.colors.waz_grey100,
    },
  },
  editImageHeader: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize + 3,
  },
  deviceHeader: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(-1),
    marginLeft: theme.spacing(1)
  }
}));
