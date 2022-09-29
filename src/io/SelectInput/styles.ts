import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useSelectStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: theme.spacing(1),
    fontSize: "16px",
    color: theme.design.colors.waz_greyColor400,
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  label: {
    display: "flex",
    alignItems: "center",
  },
  required: {
    color: theme.design.colors.waz_dangerColor100,
    margin: theme.spacing(0.5, 0, 0, 0.5),
  },
  selectContainer: {
    display: "flex",
    alignItem: "center",
    justifyContent: "center"
  },
  iconContianer: {
    display: "flex",
    alignItem: "center",
    justifyContent: "center"
  },
  icon: {
    marginRight: theme.spacing(1),
    fontSize: 20
  },
  select: {
    width: "100%",
    "& .MuiMenuItem-root": {
      background: "none",
    },
    "&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
      borderColor: theme.design.colors.waz_primaryColor100,
      outline: theme.design.colors.waz_primaryColor100,
      "&:hover": {
        borderColor: theme.design.colors.waz_primaryColor100,
        outline: theme.design.colors.waz_primaryColor100
      },
    },
  },
  optionLabel: {
    display: "flex",
    alignItem: "center",
    justifyContent: "center"
  }
}));
