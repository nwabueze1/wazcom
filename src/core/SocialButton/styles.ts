import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.design.colors.white,
    margin: theme.spacing(2, 5),

    "& .icon": {
      width: "45px",
      height: "45px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      border: `1px solid ${theme.design.colors.grey400}`,
      borderRadius: "50%",
    },

    "& .MuiAvatar-img": {
      width: "auto",
      height: "auto",
    },
  },
}));
