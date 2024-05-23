import makeStyles from "@mui/styles/makeStyles";
export var useTableActionStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        gap: theme.spacing(1.5),
        color: theme.design.colors.waz_grey1,
        marginBottom: theme.spacing(1),
        alignItems: "end",
    },
    searchInputElement: {
        width: "59%",
    },
    searchInput: {
        background: "".concat(theme.design.colors.waz_white, " !important"),
        fontSize: "".concat(theme.typography.fontSize + 1, "px !important"),
        height: "40px !important",
        padding: 0,
        "&:hover": {
            borderColor: theme.design.colors.primary700,
        },
        "&:focus, &:hover:focus, &:active": {
            borderColor: theme.design.colors.primary700,
        },
    },
    searchInputAdornment: {
        background: theme.design.colors.waz_white,
        paddingLeft: theme.spacing(1.25),
    },
    selectInputElement: {
        width: "17% !important",
    },
    selectInput: {
        padding: "5px 0 0 0 ",
        background: theme.design.colors.waz_white,
        height: "35px !important",
    },
    selectContainer: {
        width: "100%",
        background: "".concat(theme.design.colors.waz_white, " !important"),
    },
    selectControl: {
        height: "40px !important",
        background: theme.design.colors.waz_white,
        "&:hover": {
            borderColor: theme.design.colors.primary700,
        },
        "&:focus, &:hover:focus, &:active": {
            borderColor: theme.design.colors.primary700,
        },
    },
}); });
