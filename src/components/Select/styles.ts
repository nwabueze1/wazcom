import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

export const useSelectStyles = makeStyles(() => ({
  selected: {
  },
  root: {
    "&$selected": {
        "&:hover": {
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
        },
    },
    activeOption:{
      backgroundColor:theme.design.colors.red70
    },
}));
