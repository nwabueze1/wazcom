import { makeStyles } from "@mui/styles";
export var useTagStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        alignItems: "center",
        width: "fit-content",
        "& p": {
            margin: 0,
        },
    },
    tagInactive: {
        padding: theme.spacing(0.5, 1.5),
        borderRadius: theme.spacing(1.5),
        background: theme.design.colors.waz_white100,
        color: theme.design.colors.waz_grey1,
        border: "1px solid ".concat(theme.design.colors.waz_primary700),
        fontSize: theme.typography.fontSize - 2,
        width: "fit-content",
    },
    tagActive: {
        padding: theme.spacing(0.5, 1.5),
        borderRadius: theme.spacing(1.5),
        color: theme.design.colors.waz_grey1,
        background: theme.design.colors.waz_primary700,
        border: "1px solid ".concat(theme.design.colors.waz_primary700),
        fontSize: theme.typography.fontSize - 2,
        width: "fit-content",
    },
    taggable: {
        fontSize: theme.typography.fontSize,
        padding: theme.spacing(0.5, 0.5, 0.5, 1),
    },
    tagIconParent: {
        width: 18,
        height: 18,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme.design.colors.waz_white,
        borderRadius: "50%",
        marginLeft: "".concat(theme.spacing(1), " !important"),
        cursor: "pointer",
    },
    tagIcon: {},
}); });
