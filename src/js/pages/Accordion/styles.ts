import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      paddingBottom:theme.spacing(10),
     
      '& .MuiAccordion':{
      
      },

      overrides:{

      }
    },

    heading: {
     color:theme.design.colors.white,
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    headerDesc:{
        backgroundColor:theme.design.colors.red50,
    },

    addTable:{
      margin:theme.spacing(0, 5),
    }
    
  }),
);

export default useStyles