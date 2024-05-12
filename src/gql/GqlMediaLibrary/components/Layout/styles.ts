import { Theme } from "@mui/material/styles";

import makeStyles from "@mui/styles/makeStyles";

export const useLayoutStyles = makeStyles((theme: Theme) => ({
    root: {
        height: 28,
        display: "flex",
        padding: theme.spacing(0, 2),
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        cursor: "pointer",
    },
    innerBox: {
        width: 10,
        height: 8,
        background: theme.design.colors.waz_primary800,
    },
    active: {
        background: theme.design.colors.waz_primary100,
    },
}));
