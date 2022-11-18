import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock10Styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.design.colors.waz_gold100,
        overflow: "hidden",
        padding: theme.spacing(3, 8),
        width: "calc(100% - 128px)",
        gap: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: theme.design.font.montserrat,

        [theme.breakpoints.down("md")]: {
            height: "100%",
            padding: theme.spacing(2, 4),
            width: "calc(100% - 64px)",
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1),
            height: "fit-content",
            width: "calc(100% - 16px)",
        },
    },
    tagsContainer: {
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    tag: {
        display: 'flex',
        alignItems: 'center',
        paddingRight: theme.spacing(1),
    },
    tagImage: {
        margin: theme.spacing(0, 1, 0, 1.5),
        border: "1px solid transparent",
        transition: "all 0.3s ease-in",
    },
    tagText: {
        fontSize: theme.typography.fontSize,
        color: theme.design.colors.waz_black,
        fontWeight: theme.typography.fontWeightMedium,
        border: "1px solid transparent",
        transition: "all 0.3s ease-in",
    },
    border: {
        borderRight: "1px solid hsla(12, 73%, 56%, 1)",
    },
    block10ActiveElement: {
        border: "1px dashed",
        borderColor: theme.design.colors.waz_primaryColor100,
    },
}));
