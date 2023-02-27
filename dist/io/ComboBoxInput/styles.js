import makeStyles from "@mui/styles/makeStyles";
export var useComboBoxStyles = makeStyles(function (theme) { return ({
    root: {},
    comboBoxLabel: {
        display: "block",
        marginBottom: theme.spacing(1.5),
        fontSize: theme.typography.fontSize - 2,
    },
    comboBoxRequired: {
        color: theme.design.colors.waz_dangerColor100,
        margin: theme.spacing(-.5, .5, 0, .5),
    },
    comboBoxOptions: {
        margin: theme.spacing(0.5, 0, 0, 0),
        padding: theme.spacing(1, 0),
        background: theme.design.colors.waz_white,
        borderRadius: 3,
        boxShadow: "0px 1px 4px #00000014",
    },
    comboBoxOption: {
        padding: theme.spacing(1, 1.25),
        background: "transparent",
        transition: "all 0.3s ease-in",
        cursor: "pointer",
        "&:hover": {
            background: theme.design.colors.waz_primary900,
        },
        "& .label": {
            marginBottom: theme.spacing(0.5),
            fontSize: theme.typography.fontSize,
        }
    }
}); });
