import {  makeStyles} from "@material-ui/styles";
import theme from "../../theme";

 const useStyles = makeStyles(() => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    '& .Mui-selected': {
      backgroundColor: 'transparent',
      color: theme.design.colors.gray80,
      fontSize:theme.typography.fontSize * 1.125,
      fontWeight: 'bold'
     },
     '& ul':{
      fontSize:'16px',
     },
     
     description:{
      fontFamily:'Nunito',
      color:theme.design.colors.gray4,
      fontSize:theme.typography.fontSize * 1,
      padding:theme.spacing(1, 0),
    }
  },
  pageNumber:{
    fontFamily:'Nunito',
    color:theme.design.colors.gray80,
    fontSize:theme.typography.fontSize * 1,
    fontWeight: 'bold',
  },
  
  }));
  export default useStyles