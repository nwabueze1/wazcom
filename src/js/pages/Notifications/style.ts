import theme from "js/theme";
import { makeStyles, } from "@material-ui/core/styles";

/** !!-- Remember to update the function name !! */
export const useStyles = makeStyles(() => ({
    
    notificationCard:{
        borderRadius:'10px',
        padding:theme.spacing(.5, .5, 3, .5),
        border:'8px',
    },
    
    card:{
        width:'256px',
        backgroundColor:theme.design.colors.white,
        marginRight:'40px'
    },
    notificationHead:{
        display:'flex',
        alignItems:'center',
        backgroundColor:theme.design.colors.success,
        width:'248px',
        padding:theme.spacing(0, .5),
        height:'32px',
        borderRadius: 8,
    },
    back:{
        backgroundColor:theme.design.colors.red40
    },
    success:{
        backgroundColor:theme.design.colors.success,
    },
    failed:{
        backgroundColor:theme.design.colors.red40,
    },
    failedBg:{
        backgroundColor:theme.design.colors.gray20,
    },
    
    plainBg:{
        backgroundColor:theme.design.colors.gray20,
    },
    plain:{
        backgroundColor:theme.design.colors.gray40,
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
        marginLeft:theme.spacing(1),
        fontWeight:400,
    },
    notificationInfo:{
padding:theme.spacing(1)
    },
    notificationHeading:{
        color:theme.design.colors.pureblack,
        fontWeight:'bold',
        fontFamily:'nunito',
        fontSize:'14px',
        marginLeft:'8px'
    },
    notificationText:{
        color:theme.design.colors.gray80,
        fontFamily:'Nunito',
    fontSize:'12px',
    marginLeft:theme.spacing(1),
    },
    status:{
        color:theme.design.colors.gray80,
        fontFamily:'Nunito',
        fontWeight:'bold',
    fontSize:'16px',
    marginTop:theme.spacing(2)
   
    }
  
}));
export default useStyles;