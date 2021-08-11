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
      fontSize:'18px',
      fontWeight: 700
     },
  },
  pageNumber:{
    fontFamily:'Nunito',
    color:theme.design.colors.gray80,
    fontSize:'16px',
    fontWeight: 700,

  }
  }));
  export default useStyles