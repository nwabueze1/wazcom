import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useRichInputStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    position: "relative"
  },
  required: {
    color: theme.design.colors.waz_dangerColor100,
    margin: theme.spacing(0.5, 0, 0, 0.5),
  },
  editor: {
    zIndex: 1
  },
  editorError: {
    border: "1px solid red",
    zIndex: 1
  },
  wrapper: {
    zIndex: 15,
    height: "70%",
    width: "70%",
    margin: theme.spacing(0, "auto"),
    marginTop: theme.spacing(6)
  },
  editMediaModal: {
    backgroundColor: theme.design.colors.waz_white,
    width: "20%",
    height: "32%",
    margin: theme.spacing(0, "auto"),
    borderRadius: "6px",
    marginTop: theme.spacing(30),
    padding: theme.spacing(3),
    border: "none",
    [theme.breakpoints.down("md")]: {
      width: "60%"
    },
  },
  editMediaInput: {
    Height: "40px",
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
    Height: "40px",
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
  }
}));
