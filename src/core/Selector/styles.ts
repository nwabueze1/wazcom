import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useSelectorStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        gap: 0,
    },
    selectorOption: {
        fontSize: theme.typography.fontSize,
        background: theme.design.colors.waz_lightGreen,
        boxShadow: "inset 0px 3px 6px #00000029",
        color: theme.design.colors.waz_grey600,
        width: "unset",
        height: "unset",
        padding: theme.spacing(1, 1.5),
        fontFamily: theme.design.font.openSans,
        fontWeight: theme.typography.fontWeightRegular,

        "&:hover, &:focus": {
            background: theme.design.colors.grey98,
        },
    },
    selectorOptionActive: {
        background: theme.design.colors.waz_primary400,
        color: theme.design.colors.waz_white,

        "&:hover, &:focus": {
            background: theme.design.colors.waz_primary400,
        },
    },
    selectorOptionInitial: {
        borderRadius: theme.spacing(0.5, 0, 0, 0.5),
    },
    selectorOptionFinal: {
        borderRadius: theme.spacing(0, 0.5, 0.5, 0),
    },
    selectorIcon: {
        position: "relative",
        top: 0.5,
        left: 4,
    },
}));