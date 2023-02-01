import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useTableActionStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        gap: theme.spacing(1.5),
    },
    searchInputElement: {
        width: '50%',
    },
    searchInput: {
        padding: theme.spacing(1, 2),
        background: theme.design.colors.waz_white,
    },
    selectInputElement: {
        width: '17% !important',
    },
    selectInput: {
        padding: theme.spacing(0, 5, 0, 0),
        background: theme.design.colors.waz_white,
        height: '36px !important',
    }
}));
