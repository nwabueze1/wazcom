import { makeStyles } from "@mui/styles";
export var useSelectorStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        gap: 0,
    },
    selectorOption: {
        fontSize: "".concat(theme.typography.fontSize, "px !important"),
        background: "".concat(theme.design.colors.waz_lightGreen, " !important"),
        boxShadow: "inset 0px 3px 6px #00000029",
        color: "".concat(theme.design.colors.waz_grey600, " !important"),
        width: "unset !important",
        height: "unset !important",
        padding: "".concat(theme.spacing(1, 1.5), " !important"),
        fontFamily: theme.design.font.openSans,
        fontWeight: "".concat(theme.typography.fontWeightRegular, " !important"),
        "&:hover, &:focus": {
            background: "".concat(theme.design.colors.grey98, " !important"),
        },
    },
    selectorOptionActive: {
        background: "".concat(theme.design.colors.waz_primary400, " !important"),
        color: "".concat(theme.design.colors.waz_white, " !important"),
        "&:hover, &:focus": {
            background: "".concat(theme.design.colors.waz_primary400, " !important"),
        },
    },
    selectorOptionInitial: {
        borderRadius: "".concat(theme.spacing(0.5, 0, 0, 0.5), " !important"),
    },
    selectorOptionFinal: {
        borderRadius: "".concat(theme.spacing(0, 0.5, 0.5, 0), " !important"),
    },
    selectorIcon: {
        position: "relative",
        top: 0.5,
        left: 4,
    },
}); });
