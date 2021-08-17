import { makeStyles } from "@material-ui/core/styles";
import theme from "js/theme";

export const useStyles = makeStyles(() => ({
    root: {
        margin:theme.spacing(5,5)
    },
    header:{
        fontWeight:"bold",
        margin:theme.spacing(3,1),
        color:theme.design.colors.grey,
        '& span': {
            color:theme.design.colors.red
        },   
    },
    topcard:{
        display:"flex",
        justifyContent:"space-between",
        margin:theme.spacing(3,0)
    },
    tittle:{
        fontWeight:"bold",
        color:theme.design.colors.red70,
        fontSize:"24px",
        margin:theme.spacing(3,0)
    },
    midcard:{
        margin:theme.spacing(5,0)
    }, 
}));