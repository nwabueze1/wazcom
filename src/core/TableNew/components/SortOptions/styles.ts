import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useSortOptionsStyles = makeStyles((theme: Theme) => ({
    root: {
        position: "absolute",
        top: 0,
        left: "calc(100% + 5px)",
        background: theme.design.colors.waz_white,
        borderRadius: 3,
        boxShadow: "0px 2px 12px #00000014",
        padding: theme.spacing(0.5, 0, 1, 0),
    },
    sortOption: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1),
        padding: theme.spacing(1, 1.25),
        marginBottom: theme.spacing(0.5),
        background: "transparent",
        transition: "all 0.3s ease-in",
    },
    sortOptionActive: {
        background: theme.design.colors.waz_lightGreen,
    },
    sortOptionRadio: {
        padding: 0,
        color: "rgba(0,0,0,0.06)",

        "&.Mui-checked": {
            color: `${theme.design.colors.waz_primaryColor100} !important`,
        },
    },
    sortOptionText: {
        fontSize: theme.typography.fontSize,
        margin: 0,
        color: theme.design.colors.waz_grey1,
    },
    sortOptionsButtons: {
        display: "flex",
        padding: theme.spacing(0, 1.5),
        gap: theme.spacing(1),
    },
    sortOptionButtonSecondary: {
        fontWeight: `${theme.typography.fontWeightRegular} !important`,
        background: `${theme.design.colors.waz_white} !important`,
        color: `${theme.design.colors.waz_black} !important`,
        border: `1px solid #CEE3D4 !important`,
        fontSize: `${theme.typography.fontSize - 1}px !important`,
        padding: `${theme.spacing(0.75, 1.25)} !important`,
        fontFamily: `${theme.design.font.openSans} !important`,
        width: "unset !important",
        height: "unset !important",

        "&:hover": {
            background: `${theme.design.colors.waz_white} !important`,
        },
    },
    sortOptionButtonPrimary: {
        fontWeight: `${theme.typography.fontWeightRegular} !important`,
        fontSize: `${theme.typography.fontSize - 1}px !important`,
        padding: `${theme.spacing(0.75, 1.5)} !important`,
        fontFamily: `${theme.design.font.openSans} !important`,
        width: "unset !important",
        height: "unset !important",
    },
}));
