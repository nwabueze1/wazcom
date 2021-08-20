import { makeStyles } from "@material-ui/core/styles";
import theme from "js/theme";

export const useStyles = makeStyles(() => ({
    
    formControl: {
        margin: theme.spacing(1),
        width: "354px",
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
}));
