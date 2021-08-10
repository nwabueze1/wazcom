import { makeStyles, } from "@material-ui/core/styles";
import theme from "js/theme";

/** !!-- Remember to update the function name !! */
export const BreadCrumbStyles = makeStyles(() => ({
    root: {
        fontFamily:theme.typography.fontFamily,
        display:'flex'
    },
    link:{
        display: "flex",
        fontWeight:"bold",
        color:theme.design.colors.grey80
    },
    navicon:{
        paddingTop:theme.spacing()
    }
}));