import { makeStyles, Theme } from "@material-ui/core/styles";
import theme from "js/theme";

export interface StyleProps {
  width?: string;
  borderRadius: string;
}

export const useStyles = makeStyles<Theme, StyleProps>({
  selector: {
    width: ({ width }) => width,
    border: `1px solid ${theme.design.colors.grey1}`,
    borderRadius: ({ borderRadius }) => borderRadius,
    padding: `${theme.spacing(0.25)} ${theme.spacing(2.5)}`,
    fontSize: "16px",
    height: "48px",
    color: "rgba(0,0,0,0.64)",
    boxSizing: "border-box",
    "&active": {
      outlineColor: "red",
    },
  },
  label: {
    outline: "none",
    border: "none",
  },
});
