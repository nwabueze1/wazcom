import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useMenuSelectorStyles = makeStyles<Theme>((theme: Theme) => ({
    root: {
        width: "40%",
        background: theme.design.colors.waz_white,
        border: `1px solid ${theme.design.colors.waz_grey300}`,
        "&.MuiOutlinedInput-notchedOutline": {
            borderRadius: "4px",
            padding: theme.spacing(2, 2),
        },
        "&.MuiSelect-select:focus": {
            background: theme.design.colors.white,
        },
        [theme.breakpoints.down("md")]: {
            width: "60%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    menuItem: {
        background: theme.design.colors.waz_white,
        "&.Mui-selected ": {
            background: theme.design.colors.waz_white,
        },
    },
    container: {
        padding: theme.spacing(0, 2),
        margin: theme.spacing(2, 0),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(0, 4),
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(0, 1),
        },
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
