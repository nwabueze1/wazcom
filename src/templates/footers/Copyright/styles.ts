import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useCopyrightStyles = makeStyles<Theme>((theme: Theme) => ({
    root: {
        background: theme.design.colors.waz_grey500,
        padding: theme.spacing(1.5),
        display: 'flex',
        justifyContent: 'center',
        color: theme.design.colors.waz_white,
        fontSize: theme.typography.fontSize - 1,
    },
}));
