import { Theme } from "@mui/material/styles";

import makeStyles from "@mui/styles/makeStyles";

export const useCropAndSizeStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(3),
  },
  form: {
    width: "100%",
    padding: theme.spacing(3),
  },
  tooltipIcon: {
    color: theme.design.colors.grey300,
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(0.7),
  },
  placeholderContainer: {
    display: "flex",
    paddingBottom: theme.spacing(0.5),
  },
  radioInputContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    paddingTop: theme.spacing(1.5),

    "& span": {
      color: theme.design.colors.primary100,
    },
  },
  radioIcon: {
    paddingLeft: theme.spacing(0.5),
  },
  radioOption: {
    position: "relative",
    top: -3,
    fontSize: theme.typography.fontSize + 4,
    marginLeft: theme.spacing(1.5),
    textTransform: "capitalize",
    color: theme.design.colors.black200,
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: "150%",
  },
  labelText: {
    color: theme.design.colors.grey100,
    fontSize: theme.typography.fontSize + 4,
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: "150%",
  },
}));
