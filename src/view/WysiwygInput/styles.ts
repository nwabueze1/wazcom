import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const useEditPostStyles = makeStyles((theme: Theme) => ({
  root: {},
  header: {
    border: `1px solid ${theme.design.colors.primary700}`,
    borderBottom: `0px solid ${theme.design.colors.primary700}`,
    height: theme.spacing(5.75),
  },
  leftPane: {
    gap: "0px !important",
  },
  formDetailsContent: {
    // background: theme.design.colors.white,
    // border: `1px solid ${theme.design.colors.grey500}`,
    height: "fit-content",
  },
  formContent: {
    padding: theme.spacing(0, 4),
  },
  formDetailsTitle: {
    background: "#FBFBFB",
    borderBottom: `1px solid ${theme.design.colors.grey500}`,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: "space-between",
    alignItems: "center",
  },
  formDetailsButton: {
    margin: 0,
    padding: 0,
  },
  formContentLabel: {
    color: `${theme.design.colors.black}`,
    fontSize: `${theme.typography.fontSize + 4}px`,
    marginBottom: theme.spacing(1),
  },
  formContentAccordion: {
    padding: theme.spacing(0, 2, 0, 2),
    margin: "0 !important",
    borderBottom: `1px solid ${theme.design.colors.grey500}`,
  },
  formDetailsLabel: {
    color: `${theme.design.colors.grey100}`,
    fontSize: `${theme.typography.fontSize + 4}px`,
    marginBottom: theme.spacing(2.5),
    fontWeight: theme.typography.fontWeightMedium,
  },
  formDetailsMediaSelector: {
    border: "1px dashed #CCCFCD",
    borderRadius: 5,
  },
  formDetailsCategory: {
    padding: theme.spacing(2, 2.5),
    borderBottom: `1px solid ${theme.design.colors.grey500}`,
  },
  formDetailsTag: {
    padding: theme.spacing(2, 2.5),
  },
  formInputGroup: {
    paddingLeft: "25%",
  },
  btnContainer: {
    display: "flex",
    gap: theme.spacing(4),
  },
  previewBtn: {
    backgroundColor: theme.design.colors.white,
    color: theme.design.colors.grey100,
    border: `1px solid ${theme.design.colors.grey900}`,
    padding: theme.spacing(1, 2.5),
    fontSize: theme.typography.fontSize + 2,
    boxShadow: "none",
    fontWeight: theme.typography.fontWeightMedium,
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: theme.design.colors.white,
      color: theme.design.colors.grey100,
      boxShadow: "none",
    },
  },
  textArea: {
    resize: "none",
    fontFamily: theme.typography.fontFamily,
    "&::placeholder": {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize + 2,
      lineHeight: "22px",
      color: theme.design.colors.grey300,
    },
  },
  iconField: {
    display: "flex",
    gap: theme.spacing(0.5),
  },
  urlIcon: {
    color: theme.design.colors.grey300,
    fontSize: theme.typography.fontSize + 8,
  },
  textInput: {
    "& .MuiOutlinedInput-root": {
      padding: 0,
    },
  },
  mediaLibrary: {
    height: 172,
  },
  schedulePostsContainer: {
    width: "680px",
    height: "317px",
  },
  schedulePostsHeader: {
    fontSize: theme.typography.fontSize + 4,
    margin: theme.spacing(1.5),
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(2),
    fontWeight: theme.typography.fontWeightMedium,
  },
  schedulePostsBody: {
    padding: theme.spacing(4),
    fontSize: theme.typography.fontSize + 4,
    lineHeight: "150%",
    marginTop: theme.spacing(-2),
  },
  detailsTitle: {
    padding: theme.spacing(1.5, 2.5),
    borderBottom: `1px solid ${theme.design.colors.grey900}`,
    background: theme.design.colors.grey600,
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },
  flexDirection: {
    flexDirection: "column",
  },
  imgUploadContainerError: {
    marginBottom: theme.spacing(5),
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boder: "0px",
  },
  wrapper: {
    height: "80vh",
    width: "80vw",
    backgroundColor: theme.design.colors.waz_white,
    zIndex: 15,
  },
  videoEmbedWrapper: {
    height: "auto",
    width: "60vw",
    backgroundColor: theme.design.colors.waz_white,
    zIndex: 15,
    position: "relative",
    padding: theme.spacing(2),
  },
  closeModal: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: theme.design.colors.waz_white,
    border: `0px solid`,
  },
  inputField: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(2),
  },
  input: {
    width: "100%",
    height: 34,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px",
  },
  inputContainer: {
    background: theme.design.colors.waz_white,
    borderColor: theme.design.colors.grey900,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 3,
    padding: 24,
    paddingBottom: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 70,
  },
  bottonsWrapper: {
    display: "flex",
    marginTop: theme.spacing(2),
  },
  embedButton: {
    marginRight: theme.spacing(2),
  },
}));
