import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useSelectorStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        gap: 0,
    },
    selectorOption: {
        fontSize: `${theme.typography.fontSize}px !important`,
        background: `${theme.design.colors.waz_lightGreen} !important`,
        boxShadow: "inset 0px 3px 6px #00000029",
        color: `${theme.design.colors.waz_grey600} !important`,
        width: "unset !important",
        height: "unset !important",
        padding: `${theme.spacing(1, 1.5)} !important`,
        fontFamily: theme.design.font.openSans,
        fontWeight: `${theme.typography.fontWeightRegular} !important`,

        "&:hover, &:focus": {
            background: `${theme.design.colors.grey98} !important`,
        },
    },
    selectorOptionActive: {
        background: `${theme.design.colors.waz_primary400} !important`,
        color: `${theme.design.colors.waz_white} !important`,

        "&:hover, &:focus": {
            background: `${theme.design.colors.waz_primary400} !important`,
        },
    },
    selectorOptionInitial: {
        borderRadius: `${theme.spacing(0.5, 0, 0, 0.5)} !important`,
    },
    selectorOptionFinal: {
        borderRadius: `${theme.spacing(0, 0.5, 0.5, 0)} !important`,
    },
    selectorIcon: {
        position: "relative",
        top: 0.5,
        left: 4,
    },
}));