import {  makeStyles } from "@material-ui/styles";
import theme from "../../theme"

export const useStyles = makeStyles(() => ({
    buttonWrapper:{
      margin:theme.spacing(6, 6),
    },
    buttonTop:{
      display:'flex',
      justifyContent:'space-around',
    },
    buttonLeft:{

    },
    buttonRight:{
      marginTop: theme.spacing(26)
   },
    buttonMiddle:{
     marginTop: theme.spacing(45)
    },
    pageDescription:{
       '& span':{
      color:theme.design.colors.red70,
     
       },
       fontFamily:'Nunito',
       fontWeight: 700,
       lineHeight:'87.3px',
       fontStyle:'bold',
       color:theme.design.colors.grey2 ,
       fontSize:'64px',
       width:'343px',
       height:theme.spacing(10),
       
    },
    itemDesc:{
    color:theme.design.colors.grey4,
    font:'Nunito',
    lineHeight:'21px',
       fontStyle:'bold',
       fontSize:'16px',
       fontWeight: 700,
       marginBottom:theme.spacing(2.1)
    }, 
    buttonDesc:{
      color:theme.design.colors.grey2,
      font:'Nunito',
      lineHeight:'21.8px',
         fontStyle:'bold',
         fontSize:'16px',
         fontWeight: 700,
         marginBottom: theme.spacing(0.4)
    },
    buttonRulesWrapper:{
    marginTop:theme.spacing(7.8)
    },
    ruleInfo:{
       fontSize:'16px',
       padding:theme.spacing(4, 2),
       marginBottom:theme.spacing(0.5),
       display:'flex',
       justifyContent:'center',
       background:theme.design.colors.bgLight,
      
       lineHeight:'21px'
       
    },
    ruleHead:{
       display:'inline',
      color:theme.design.colors.grey2,
      font:'Nunito',
      lineHeight:'21.8px',
      fontStyle:'bold',
      fontSize:'16px',
      fontWeight: 700,
   },
    warningIcon:{
    margin:theme.spacing(.1, 1.4, 0, 0)
    },
    ruleDetails:{
      
    },
    buttonBottom:{
    display:'flex',
    justifyContent:'space-evenly',
    margin:theme.spacing(3)
    },
    buttonItem:{
   
    },
    addIcon:{
       width:'56px',
       height:'56px',
       color:theme.design.colors.white,
       background: theme.design.colors.lightRed,
       borderRadius:'50%',
      
    },
    buttonBottomWrapper:{
       marginTop:theme.spacing(4)
    },
    buttonDescIcon:{
      color:theme.design.colors.grey2,
      font:'Nunito',
      lineHeight:'21.8px',
         fontStyle:'bold',
         fontSize:'18px',
         fontWeight: 700,
         marginBottom: theme.spacing(3)
    },
  
  }));