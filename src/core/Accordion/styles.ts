import { makeStyles } from "@mui/styles";
import { BaseTheme } from "theme";

export const useAccordionStyles = makeStyles((theme: BaseTheme) => ({
  root: {},
  accordion: {
    boxShadow: "0",
    borderRadius: 4,
  },
  icon: {
    color: theme.design.colors.waz_black,
  },
}));
