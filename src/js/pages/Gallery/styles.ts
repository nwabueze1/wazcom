import { makeStyles } from "@material-ui/core/styles";
import theme from "js/theme";

export const useStyles = makeStyles(() => ({
    galleryBox:{
        maxWidth:"322px",
        height:"322px",
        backgroundColor:theme.design.colors.gray20,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center",
        transition:"opacity 0.5s ease-in",
        "&:hover":{
            opacity:0.5,
        }
    },
    text:{
        color:theme.design.colors.white,
        fontWeight:"bold",
        paddingTop:"60%",
        textAlign:"center",
        opacity:0,
        fontSize:theme.typography.fontSize * 1.7,
        "&:hover":{
            opacity:1,
        }
    },
}));
