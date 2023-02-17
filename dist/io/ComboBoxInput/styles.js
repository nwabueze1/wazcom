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
}); });
