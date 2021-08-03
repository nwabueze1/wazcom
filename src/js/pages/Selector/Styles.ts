import { makeStyles, Theme } from "@material-ui/core/styles";

export interface StyleProps {
  width?: string;
  borderRadius: string;
}

export const useStyles = makeStyles<Theme, StyleProps>({
  selector: {
    width: ({ width }) => width,
    border: "1px solid #BEBEBE",
    borderRadius: ({ borderRadius }) => borderRadius,
    padding: "2px 20px",
    fontSize: "16px",
    height: "48px",
    color: "rgba(0,0,0,0.64)",
    boxSizing: "border-box",
  },
  label: {
    outline: "none",
    border: "none",
  },
});
