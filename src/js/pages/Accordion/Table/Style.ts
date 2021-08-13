import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
   '& .MuiTableCell':{
     color:'red'
   },
   head:{
     color:'red'
   }
     
    },
   
  }),
);

export default useStyles;