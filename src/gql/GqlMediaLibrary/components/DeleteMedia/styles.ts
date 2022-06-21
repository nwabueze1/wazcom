import { Theme } from "@mui/material/styles";

import makeStyles from "@mui/styles/makeStyles";

export const useDeleteMediaStyles = makeStyles((theme: Theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    maxWidth: 600,
    maxHeight: 550,
    width: 600,
    backgroundColor: theme.design.colors.waz_white,
    borderRadius: theme.spacing(1),
    overflow: "scroll",
    zIndex: 15,
    paddingBottom: theme.spacing(2),
  },
  deleteHeading: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(3, 0),
    borderBottom: "1px solid rgba(0,0,0,0.06)",
  },
  deleteHeadingText: {
    color: theme.design.colors.waz_dangerColor300,
    marginLeft: theme.spacing(4),
  },
  deleteHeadingIcon: {
    marginRight: theme.spacing(4),
    color: "#999F9B",
    cursor: "pointer",
  },
  deleteContent: {
    padding: theme.spacing(0, 4),
  },
  deleteContentText: {
    margin: theme.spacing(3, 0, 4, 0),
  },
  deleteActions: {
    display: "flex",
    gap: theme.spacing(3),
    justifyContent: "center",
  },
}));
