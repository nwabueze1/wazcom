import { makeStyles } from "@material-ui/core";
import theme from "js/theme";

export const useStyles = makeStyles(() => ({
    root:{
        margin:theme.spacing(6),
        color:theme.design.colors.grey4,
    },
    header:{
        fontWeight:"bold",
        margin:theme.spacing(5,3),
        color:theme.design.colors.grey,
        '& span': {
            color:theme.design.colors.red
        },
       
    },
    inputsize:{
        width:"320px"
    },
    textbox:{
        minWidth:"320px",
        height:"268px",
        border: `1px solid ${theme.design.colors.silver}`,
        borderRadius:"5px",
        padding:theme.spacing(3)
    },
    bottominput:{
        display:'flex',
        justifyContent:'space-between',
        margin:theme.spacing(9,0)
    },
    bottomright:{
        border:`0.5px solid ${theme.design.colors.silver}`,
        borderRadius:"5px",
        margin:theme.spacing(2),
        padding:theme.spacing(3),
        width:"369px"
    }, 
    inputrule:{
        minWidth:"392px",      
        display:"flex",
        backgroundColor:theme.design.colors.bglight,
        marginLeft:theme.spacing(8),
        padding: theme.spacing(1, 1),
    },
    icon:{
        marginRight:theme.spacing(3),
        color:theme.design.colors.black
    },
    input:{
        color:theme.design.colors.black,
        fontWeight:700
    },
}))