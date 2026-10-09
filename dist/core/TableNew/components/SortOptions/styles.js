import makeStyles from "@mui/styles/makeStyles";
export var useSortOptionsStyles = makeStyles(function (theme) { return ({
    root: {
        position: "absolute",
        top: 0,
        right: "calc(100% + 5px)",
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
            color: "".concat(theme.design.colors.waz_primaryColor100, " !important"),
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
        fontWeight: "".concat(theme.typography.fontWeightRegular, " !important"),
        background: "".concat(theme.design.colors.waz_white, " !important"),
        color: "".concat(theme.design.colors.waz_black, " !important"),
        border: "1px solid #CEE3D4 !important",
        fontSize: "".concat(theme.typography.fontSize - 1, "px !important"),
        padding: "".concat(theme.spacing(0.75, 1.25), " !important"),
        fontFamily: "".concat(theme.design.font.openSans, " !important"),
        width: "unset !important",
        height: "unset !important",
        "&:hover": {
            background: "".concat(theme.design.colors.waz_white, " !important"),
        },
    },
    sortOptionButtonPrimary: {
        fontWeight: "".concat(theme.typography.fontWeightRegular, " !important"),
        fontSize: "".concat(theme.typography.fontSize - 1, "px !important"),
        padding: "".concat(theme.spacing(0.75, 1.5), " !important"),
        fontFamily: "".concat(theme.design.font.openSans, " !important"),
        width: "unset !important",
        height: "unset !important",
    },
}); });
