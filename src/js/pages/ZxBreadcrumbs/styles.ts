import { makeStyles, } from "@material-ui/core/styles";
import theme from "js/theme";

/** !!-- Remember to update the function name !! */
export const BreadCrumbStyles = makeStyles(() => ({
    root: {
       
        fontFamily:theme.typography.fontFamily,
        '& > * + *': {
            marginTop:theme.spacing(2),
          },
    },
    icon:{
        marginRight: theme.spacing(0.5),
        width: 20,
    },
    link:{
        display: "flex",
        fontWeight:"bold",
    }
}));