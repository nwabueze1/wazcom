import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const useContentFormLayoutStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "calc(100vh - 80px)"
  },
  tabIcon: {
    fontSize: theme.typography.fontSize + 2,
    opacity: 0.8,
  },
}));
