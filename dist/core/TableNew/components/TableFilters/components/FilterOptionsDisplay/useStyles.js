import { makeStyles } from "@mui/styles";
export var useStyles = makeStyles(function (theme) { return ({
    root: {
        padding: theme.spacing(3, 2, 2),
        "& *": {
            fontFamily: theme.design.font.tomatoGrotesk,
        },
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1.4),
    },
    title: {
        fontSize: 12,
        fontWeight: 400,
        fontFamily: theme.design.font.tomatoGrotesk,
        color: theme.design.colors.waz_brand800,
    },
    filter: {
        display: "flex",
        gap: 4,
        padding: "2px 10px",
        borderRadius: theme.spacing(2),
        border: "0.3px solid rgba(37, 165, 90, 0.20)",
        background: theme.design.colors.waz_brand50,
        alignItems: "center",
    },
    filterText: {
        fontSize: 10,
        color: "#28434F",
        fontFamily: theme.design.font.tomatoGrotesk,
        "&.label": {
            color: "#ACBCC4",
        },
    },
    filterIcon: {
        "& svg": {
            color: "#28434F",
            width: 14,
            height: 14,
        },
    },
    filterRemove: {
        padding: 0,
        height: 14,
        width: 14,
        borderRadius: "50%",
        background: "#ACBCC4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        "& svg": {
            color: theme.design.colors.waz_white,
            width: 12,
            height: 12,
        },
    },
}); });
