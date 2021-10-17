import { makeStyles } from "@material-ui/styles";
export var useAccordionStyles = makeStyles(function (theme) { return ({
    root: {},
    accordion: {
        backgroundColor: theme.design.colors.grey10,
        boxShadow: "0",
        borderRadius: 4,
        border: "1px solid " + theme.design.colors.red50,
    },
    icon: {
        color: theme.design.colors.white,
    },
    summary: {
        backgroundColor: theme.design.colors.red50,
        // color: theme.design.colors.white,
    },
    schedule: {
    // fontSize: "1.4rem",
    // fontFamily: " 'Nunito', sans-serif",
    // fontWeight: "bold",
    // margin: "0",
    },
    details: {},
}); });
