import makeStyles from "@mui/styles/makeStyles";
export var useEditorToolbarStyles = makeStyles(function (theme) { return ({
    toolbar: {
        background: theme.design.colors.waz_white,
        flexWrap: "wrap",
        border: "1px solid ".concat(theme.design.colors.waz_primary700, " !important"),
        width: "100%",
        padding: "0 !important",
    },
    toolbarItem: {
        padding: theme.spacing(1, 3, 1, 3),
        borderRight: "1px solid ".concat(theme.design.colors.waz_primary700),
        "&:last-of-type": {
            borderRightColor: "transparent",
        },
    },
}); });
