import { Theme } from "@mui/material/styles";

import makeStyles from "@mui/styles/makeStyles";

export const useGqlComboBoxStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: 9,
    fontSize: "1rem",
    fontWeight: 700,
  },
  loader: {
    marginBottom: theme.spacing(2),
    color: theme.design.colors.waz_dangerColor300,
  },
}));
