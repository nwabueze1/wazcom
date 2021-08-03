import { makeStyles } from "@material-ui/core/styles";
import theme from "js/theme";

/** !!-- Remember to update the function name !! */
export const useComponentNameStyles = makeStyles(() => ({
    root: {
        width:"386px",
        height:"325px",
        border:"2px red",
        color:theme.design.colors.grey2,   
    },
    UploadFile:{
        color:theme.design.colors.red70,
        padding:theme.spacing(3,2),
    },
    container:{
        margin:theme.spacing(1),
        textAlign:"center",
    },
    uploadlogo:{
        fontSize:100
    }
}));