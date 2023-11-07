import { makeStyles } from "@mui/styles";
export var useQuestionInputStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        inputContainer: {
            fontFamily: theme.typography.fontFamily,
            height: "auto",
        },
        addressFieldSet: {
            fontSize: theme.typography.fontSize,
        },
        errorBorder: {
            borderColor: (_b = (_a = theme.design) === null || _a === void 0 ? void 0 : _a.colors) === null || _b === void 0 ? void 0 : _b.error,
        },
        fieldSet: {
            margin: 0,
            borderRadius: 4,
            display: "grid",
            border: "1px solid ".concat(theme.design.colors.waz_primary700),
            gap: theme.spacing(1),
            "&.error": {
                borderColor: theme.design.colors.error,
            },
        },
        legend: {
            color: theme.design.colors.waz_grey,
            marginTop: theme.spacing(0.5),
            fontSize: theme.typography.fontSize,
            textTransform: "uppercase",
        },
        label: {
            marginLeft: theme.spacing(1),
        },
        ratingLabel: {
            margin: theme.spacing(1.5, 0),
        },
    });
});
