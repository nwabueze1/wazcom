import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useEditorStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "50vh",
    position: "relative",
    overflowY: "auto",
  },
  wordCount: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    fontSize: theme.typography.fontSize * 0.83,
    background: theme.design.colors.waz_white,
    border: `1px solid ${theme.design.colors.waz_primary700}`,
    padding: theme.spacing(0.75, 2, 0.75, 0),
    height: theme.spacing(1.5),
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "100%",
  },
  editor: {
    color: theme.design.colors.waz_grey1,
    fontSize: theme.typography.fontSize + 2,
    overflow: "auto",
    height: "100vh",
    position: "relative",
    paddingBottom: theme.spacing(3),
  },
  quillEditor: {
    "& img": {
      position: "relative",
      width: "100%",
      objectFit: "cover",
    },

    "& .ql-container": {
      border: `0px solid ${theme.design.colors.waz_primary700} !important`,
    },
    "& .ql-editor .ql-video": {
      position: "relative",
      left: "20%",
      width: "60%",
      height: 400,
    },
    "& .ql-editor": {
      paddingLeft: theme.spacing(2),
      "& p": {
        marginBottom: "15px",
        lineHeight: 1.7,
        fontSize: "15px",
      },
    },
  },
}));
