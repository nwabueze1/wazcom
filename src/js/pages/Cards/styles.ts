import { makeStyles } from "@material-ui/core/styles";
import theme from "js/theme";

export const useCardStyles = makeStyles(() => ({
    root: {
        maxWidth: 384,
        pading:theme.spacing(1,1),
        textAlign:"center",
        borderRadius:"25px"
    },
    media:{
          height:"100px",
          width:"30%"
     },
     regtext:{
         color:theme.design.colors.sunRed,
         fontWeight:"bold",
         margin:theme.spacing(2,0)
     },
     text:{
         padding:theme.spacing(0,2)
     }
}));
