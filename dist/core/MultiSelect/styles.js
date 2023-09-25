import { makeStyles } from "@mui/styles";
export var useMultiSelectStyles = makeStyles(function (theme) { return ({
    root: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        width: "100%",
        "& input.multi-select": {
            position: "absolute",
            top: 0,
            left: 0,
            visibility: "hidden",
            opacity: 0,
        },
        "& input.multi-select:checked ~ .dropdown__list": {
            display: "block",
        },
    },
    label: {
        fontSize: theme.typography.fontSize - 2,
        display: "flex",
        marginBottom: theme.spacing(1),
        color: theme.design.colors.waz_grey,
        alignItems: "center",
        textTransform: "uppercase",
    },
    required: {
        color: theme.design.colors.waz_dangerColor100,
        margin: theme.spacing(-0.5, 0.5, 0, 0.5),
    },
    dropdown: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(1.2, 1.4),
        height: 34,
        minWidth: 145,
        background: theme.design.colors.white100,
        color: theme.design.colors.waz_primaryBlack,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 4,
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.fontSize,
        borderColor: theme.design.colors.waz_primary700,
        "&:hover": {
            borderColor: theme.design.colors.waz_primary500,
        },
        "&:focus, &:hover:focus, &:active": {
            borderColor: theme.design.colors.waz_primary400,
        },
    },
    iconButton: {
        cursor: "pointer",
        all: "unset",
        fontSize: theme.typography.fontSize + 4,
    },
    dropdownList: {
        display: "none",
        padding: theme.spacing(1, 1),
        background: theme.design.colors.waz_white,
        position: "absolute",
        top: 34,
        width: "100%",
        zIndex: 4,
    },
    listItem: {
        display: "flex",
        justifyContent: "space-between",
        gap: 10,
        alignItems: "center",
        marginBottom: theme.spacing(1),
        userSelect: "none",
        "& label": {
            cursor: "pointer",
        },
    },
    dropdownCheckbox: {
        padding: 0,
    },
}); });
