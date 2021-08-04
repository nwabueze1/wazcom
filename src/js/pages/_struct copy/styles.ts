import { makeStyles,  } from "@material-ui/core/styles";
import theme from "js/theme";

/** !!-- Remember to update the function name !! */
export const useComponentNameStyles = makeStyles(() => ({
    root: {
        '& > * + *': {
            marginTop:theme.spacing(2),
          },
    },
    icon:{
        marginRight: theme.spacing(0.5),
        width: 20,
    },
}));