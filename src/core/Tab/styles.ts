import makeStyles from '@mui/styles/makeStyles';
import theme from "../../theme";

export const useTabStyles = makeStyles({
  root: {},
  tabs: {
    width: "500px",
    color: theme.design.colors.red,
    borderRadius: 9,
  },
});
