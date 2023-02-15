import makeStyles from "@mui/styles/makeStyles";
export var useComboBoxStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        marginBottom: theme.spacing(2),
        "& .MuiAutocomplete-root .Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: theme.design.colors.waz_primaryColor100,
            outline: theme.design.colors.waz_primaryColor100,
            "&:hover": {
                borderColor: theme.design.colors.waz_primaryColor100,
                outline: theme.design.colors.waz_primaryColor100,
            },
        },
    },
    helperText: {
        marginTop: theme.spacing(2),
        fontSize: theme.typography.fontSize,
    },
    renderInput: {
        "& input.MuiOutlinedInput-input.MuiInputBase-input": {
            padding: theme.spacing(0),
        },
    },
    tagsParent: {
        marginTop: theme.spacing(2),
    },
    subCategoryBox: {
    // display: "flex",
    },
    subCategoryTagsParent: {
        display: "flex",
    },
    subCategoryInput: {
        display: "flex",
        alignItems: "center",
    },
    subCategoryTags: {
        display: "flex",
        gap: theme.spacing(1),
    },
    tag: {
        marginBottom: theme.spacing(1),
    },
    boxMargin: {
        height: "30px",
        width: "41px",
        borderLeft: "1px solid ".concat(theme.design.colors.waz_primary700),
        borderBottom: "1px solid ".concat(theme.design.colors.waz_primary700),
    },
    inputContainer: {
        display: "flex"
    },
    label: {
        fontSize: theme.typography.fontSize - 2,
        marginBottom: 0
    },
    item: {
        fontSize: theme.typography.fontSize
    },
    checkbox: {
        "& span": {
            fontSize: theme.typography.fontSize + 4,
            "&.Mui-checked": {
                color: theme.design.colors.waz_primary100,
            },
        },
    },
}); });
