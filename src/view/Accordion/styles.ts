import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const AccordionStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  container: {
    width: 426,
  },
  accordionStatesContainer: {
    display: "flex",
    gap: 40,
  },
}));
