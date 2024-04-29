import makeStyles from "@mui/styles/makeStyles";
export var useImagePropertyStyles = makeStyles(function (theme) { return ({
    form: {
        width: "calc(100% - 24px)",
        padding: theme.spacing(2.5, 3),
        boxSizing: "border-box",
    },
    formControl: {
        marginBottom: theme.spacing(2),
    },
    formLabel: {
        fontSize: theme.typography.fontSize,
        textTransform: "capitalize",
    },
    formButtons: {
        display: "flex",
        gap: theme.spacing(2),
    },
    tooltipIcon: {
        color: theme.design.colors.grey300,
        marginLeft: theme.spacing(1),
    },
    placeholderContainer: {
        display: "flex",
    },
    textArea: {
        "& textarea": {
            resize: "vertical",
        },
    },
    tooltipContent: {
        fontSize: theme.typography.fontSize - 2,
        textTransform: "initial"
    }
}); });
