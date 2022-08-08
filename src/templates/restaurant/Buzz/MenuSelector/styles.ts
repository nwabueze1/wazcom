import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";

export const useMenuSelectorStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "40%",
    "& .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${theme.design.colors.waz_grey300}`,
      borderRadius: "4px",
      padding: theme.spacing(1.5, 2),
    },
  },
  container: {
    width: "100%",
    padding: theme.spacing(0, 2),
    margin: theme.spacing(2, 0),
  },
  options: {
    fontWeight: 600,
    color: theme.design.colors.waz_primaryBlack,
    fontSize: theme.typography.fontSize + 4,
  },
  openingHours: {
    fontSize: theme.typography.fontSize,
    color: theme.design.colors.grey1,
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
