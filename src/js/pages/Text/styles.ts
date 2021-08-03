import { makeStyles } from "@material-ui/core/styles";
import theme from "js/theme";

/** !!-- Remember to update the function name !! */
export const useTextStyles = makeStyles(() => ({
    root: {
        fontWeight:700,
        color:theme.design.colors.red70,
        fontFamily:theme.typography.fontFamily
    },
}));