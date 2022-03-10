import { Theme } from "@mui/material/styles";

import makeStyles from "@mui/styles/makeStyles";

export const useTableStyles = makeStyles((theme: Theme) => ({
  root: {},
  tableRoot: {
    position: "relative",
  },
  filterActive: {
    overflow: "hidden",
  },
  tableHead: {
    background: theme.design.colors.gray90,
  },
  tableHeadCell: {
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(1.5, 2),
  },
  tableCell: {
    padding: theme.spacing(1.5, 2),
  },
  controls: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
  filterControls: {
    display: "flex",
    gap: "30px",
  },
  imageContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(5),
  },
  img: {
    width: "120px",
    height: "94px",
  },
  filterControlsButton: {
    backgroundColor: theme.design.colors.white,
    color: theme.design.colors.black,
    height: "fit-content",
    width: "100px",
    display: "flex",
    justifyContent: "space-between",
  },
  errorMessage: {
    fontSize: theme.typography.fontSize + 4,
    lineHeight: "22px",
    textAlign: "center",
    color: theme.design.colors.grey3,
  },
  errorContainer: {
    height: "60vh",
  },
  errorBox: {
    position: "absolute",
    left: "50%",
    top: " 50%",
    transform: "translate(-50%, -50%)",
  },
}));

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));
