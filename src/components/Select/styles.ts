import { makeStyles } from "@material-ui/core/styles";
import theme from "js/theme";

export const useStyles = makeStyles(() => ({
  selected: {
  },
  root: {
    "&$selected": {
      // backgroundColor:theme.design.colors.red70,
        "&:hover": {
          backgroundColor: theme.design.colors.red70
         }
      },
  },
    formControl: {
        margin: theme.spacing(1),
        minWidth: "354px",
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },  
      optionItems: {
        border:theme.spacing(3),
        backgroundColor: `${theme.design.colors.red70} !important`,
        '&:hover': {
            backgroundColor:` ${theme.design.colors.red70} !important`,
        },
    },
    activeOption:{
      backgroundColor:theme.design.colors.red70
    },
}));
