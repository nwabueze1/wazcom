import { makeStyles } from "@material-ui/core/styles";
import theme from "js/theme";

/** !!-- Remember to update the function name !! */
export const uploadStyles = makeStyles(() => ({
    root: {
        width:"384px",
        borderRadius:"5px",
        border:`2px solid ${theme.design.colors.grey4}`,
        color:theme.design.colors.grey2,   
        fontWeight:'bold',
        padding:theme.spacing(2,3)
    },
    child:{
        borderRadius:"10px",
        padding:theme.spacing(2,0),
        textAlign:"center",
        color:theme.design.colors.grey2,
        margin:theme.spacing(3,0),
        border:`2px dashed ${theme.design.colors.grey4}`,
        "&:hover": {
            border: `2px dashed ${theme.design.colors.red}`
        }
    },
    uploadlogo:{
        fontSize:50,
        color:theme.design.colors.grey3, 
    }, 
    upload:{
        color:theme.design.colors.red
    }
}));