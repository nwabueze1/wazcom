import makeStyles from "@mui/styles/makeStyles";
export var useFilterSelectorStyles = makeStyles(function (theme) { return ({
    root: {
        background: theme.design.colors.waz_white,
        boxShadow: "0px 1px 4px #00000014",
        borderRadius: 3,
        width: 170,
        padding: theme.spacing(1, 1, 2, 1),
    },
    filterOperatorHeading: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    filterInput: {
        marginBottom: "0 !important",
    },
    filterTextInput: {
        padding: theme.spacing(0.75, 1),
        fontSize: theme.typography.fontSize,
    },
    filterSelectInputElement: {
        width: '200% !important',
    },
    filterSelectInput: {
        padding: theme.spacing(0, 5, 0, 0),
        height: '30px !important',
        fontSize: theme.typography.fontSize,
    },
    filterSelectInputLabel: {
        fontSize: theme.typography.fontSize,
    },
    filterOperator: {
        marginBottom: theme.spacing(1.5),
    },
    filterOperatorCheck: {
        padding: 0,
        color: "".concat(theme.design.colors.waz_primaryColor100, " !important"),
    },
    filterButtons: {
        display: "flex",
        gap: theme.spacing(1),
    },
    filterButtonSecondary: {
        fontWeight: theme.typography.fontWeightRegular,
        background: theme.design.colors.waz_white,
        color: theme.design.colors.waz_black,
        border: "1px solid #CEE3D4",
        fontSize: theme.typography.fontSize - 1,
        padding: theme.spacing(0.5, 1),
        "&:hover": {
            background: theme.design.colors.waz_white,
        }
    },
    filterButtonPrimary: {
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.fontSize - 1,
        padding: theme.spacing(0.5, 1),
        textTransform: "unset",
    },
}); });
