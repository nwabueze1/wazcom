import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useTableActionStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        gap: theme.spacing(1.5),
        color: theme.design.colors.waz_grey1,
    },
    searchInputElement: {
        width: '50%',
    },
    searchInput: {
        padding: theme.spacing(1.3, 2, 1.3, 0),
        background: theme.design.colors.waz_white,
        fontSize: theme.typography.fontSize + 1,
    },
    searchInputAdornment: {
        background: theme.design.colors.waz_white,
        paddingLeft: theme.spacing(1.25),
    },
    selectInputElement: {
        width: '17% !important',
    },
    selectInput: {
        padding: '5px 0 0 0 ',
        background: theme.design.colors.waz_white,
        height: '35px !important',
    },
    selectInputIcon: {
        fill: theme.design.colors.waz_grey1,
        fontSize: theme.typography.fontSize + 14,
    },
    selectInputLabel: {
        fontSize: theme.typography.fontSize + 1,
        color: theme.design.colors.waz_grey1,
    }
}));
