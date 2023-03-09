import makeStyles from "@mui/styles/makeStyles";
export var useEditorToolbarStyles = makeStyles(function (theme) { return ({
    toolbar: {
        background: theme.design.colors.waz_white,
        flexWrap: "wrap",
        border: "1px solid ".concat(theme.design.colors.waz_primary700, " !important"),
        margin: theme.spacing(0, 2, 0, 2),
        borderRadius: 5,
        width: "fit-content",
    },
    toolbarItem: {
        paddingRight: theme.spacing(1),
        borderRight: "1px solid ".concat(theme.design.colors.waz_primary700),
        "&:last-of-type": {
            borderRightColor: "transparent",
        }
    },
}); });
