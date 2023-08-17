import { lighten } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
export var useTaggablesStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        marginBottom: theme.spacing(2),
        "& .MuiAutocomplete-root.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: theme.design.colors.waz_primaryColor100,
            outline: theme.design.colors.waz_primaryColor100,
            "&:hover": {
                borderColor: theme.design.colors.waz_primaryColor100,
                outline: theme.design.colors.waz_primaryColor100,
            },
        },
    },
    renderChipOutside: {
        position: "absolute",
        top: 60,
        display: "flex",
        gap: theme.spacing(2),
        flexWrap: "wrap",
    },
    feedback: {
        marginTop: theme.spacing(2),
    },
    feedbackSuccess: {
        color: theme.design.colors.success100,
    },
    feedbackError: {
        color: theme.design.colors.error100,
    },
    feedbackNeutral: {
        color: theme.design.colors.black,
    },
    chip: {
        background: lighten(theme.design.colors.waz_primaryColor100, 0.8),
        fontWeight: theme.typography.fontWeightMedium,
    },
    chipIcon: {
        background: theme.design.colors.waz_primaryColor100,
    },
}); });
