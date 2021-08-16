import { makeStyles } from "@material-ui/core/styles";
import theme from "js/theme";

export const useMenuCardStyles = makeStyles(() => ({
    root: {
        width: "500px",
        borderRadius:"15px",
        fontFamily:"nunito",
        opacity:1,
        transition:"opacity 0.5s ease-in"
    },
    mealname:{
        fontWeight:"bold",
        marginTop:theme.spacing(4)
    },
    price:{
        fontSize:"12px",
        color:theme.design.colors.red100
    },
    cardcontents:{
        margin:theme.spacing(1.25),
        display:"flex",
        justifyContent:"space-between"
    },
    mealdetail:{
        marginLeft:theme.spacing(2),
        textAlign:"left"
    },
    outerbar:{
        width:"142px",
        height:"142px",
    },
    imgfield:{
        height:"142px",
        borderRadius:"50%",
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center"
    },
    details:{
        margin:theme.spacing(1.25,0),
        fontSize:"14px"
    },
    icons:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        marginLeft:theme.spacing(4),
    },
    disableState:{
        opacity:0.1
    }
}));
