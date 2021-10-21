import { makeStyles } from "@mui/styles";
import { BaseTheme } from "theme";

export const useAccordionStyles = makeStyles((theme: BaseTheme) => ({
  root: {},
  accordion: {
    backgroundColor: theme.design.colors.grey10,
    boxShadow: "0",
    borderRadius: 4,
    border: `1px solid ${theme.design.colors.red50}`,
  },
  icon: {
    color: theme.design.colors.white,
  },
  summary: {
    backgroundColor: theme.design.colors.red50,
  },
  details: {},
}));
