import { makeStyles } from "@material-ui/core/styles";
export var useAccordionStyles = makeStyles(function (theme) { return ({
    root: {
        width: "100%",
        "& .MuiAccordion": {},
        overrides: {},
    },
    expandIcon: {
        color: theme.design.colors.white,
    },
    heading: {
        color: theme.design.colors.white,
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    headerDesc: {
        backgroundColor: theme.design.colors.red50,
    },
}); });
