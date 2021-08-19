import theme from "js/theme";
import { makeStyles, } from "@material-ui/core/styles";

/** !!-- Remember to update the function name !! */
export const useStyles = makeStyles(() => ({
    notificationCard:{
        backgroundColor:theme.design.colors.black,
        width:'256px',
        borderRadius:'10px',
        padding:theme.spacing(.5)
    },
   
    success:{
        display:'flex',
        alignItems:'center',
        backgroundColor:theme.design.colors.success,
        width:'248px',
        height:'32px',
        borderRadius: 8,
    },
    cancel:{
        backgroundColor:theme.design.colors.white,
        color:theme.design.colors.lightRed,
        marginLeft:'auto',
        borderRadius: '50%',
    }, 
    alarm:{
        color:theme.design.colors.gray80,
    },
    report:{
        color:theme.design.colors.gray80,
        fontFamily:'Nunito',
    fontSize:'14px',
        marginLeft:'8px'
    },
    notificationInfo:{

    },
    notificationHeading:{
        color:theme.design.colors.pureblack,
        fontFamily:'Nunito',
        fontSize:'14px',
        marginLeft:'8px'
    },
    notificationText:{
        color:theme.design.colors.gray80,
        fontFamily:'Nunito',
    fontSize:'14px',
    marginLeft:'8px'
    },
    status:{
        color:theme.design.colors.gray80,
        fontFamily:'Nunito',
        fontWeight:'bold',
    fontSize:'18px',
   
    }
  
}));
export default useStyles;