import { makeStyles } from "@material-ui/core/styles";
import theme from "js/theme";

export const useStyles = makeStyles(() => ({
  selected: {
  },
  rootMenuItem: {
    "&$selected": {
      backgroundColor: "red",
        "&:hover": {
          backgroundColor: theme.design.colors.white
         }
      },
    '&:hover':{
      backgroundColor:theme.design.colors.gray40
    }
  },
    formControl: {
        margin: theme.spacing(1),
        minWidth: "354px",
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },  
}));
