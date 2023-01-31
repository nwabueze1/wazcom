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
    },
    sortOptionRadio: {
        padding: 0,
    },
    sortOptionText: {
        fontSize: theme.typography.fontSize,
    },
    sortOptionsButtons: {
        display: "flex",
        padding: theme.spacing(0, 2),
        gap: theme.spacing(1),
    },
    sortOptionButtonSecondary: {
        fontWeight: theme.typography.fontWeightRegular,
        background: theme.design.colors.waz_white,
        color: theme.design.colors.waz_black,
        border: `1px solid #CEE3D4`,
        fontSize: theme.typography.fontSize,
        padding: theme.spacing(0.75, 1.25),
    },
    sortOptionButtonPrimary: {
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.fontSize,
        padding: theme.spacing(0.75, 1.25),
    },
}));
