import { makeStyles } from "@mui/styles";
export var useAccordionStyles = makeStyles(function (theme) { return ({
    root: {},
    accordion: {
        boxShadow: "0",
        borderRadius: 4,
    },
    icon: {
        color: theme.design.colors.black,
    },
    summary: {},
    details: {},
}); });
