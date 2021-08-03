import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      marginBottom: theme.spacing(2.5),
    },
    label: {
      marginBottom: theme.spacing(1),
      fontSize: `${Math.round(theme.typography.fontSize * 1.3)}px`,
      fontWeight: theme.typography.fontWeightMedium,
    },
    input: {
      cursor: "text",
      display: "inline-flex",
      position: "relative",
      fontSize: theme.typography.fontSize,
      boxSizing: "border-box",
      alignItems: "center",
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightRegular,
      lineHeight: "1.1876em",
      "&::-webkit-input-placeholder": {
        fontSize: `${Math.round(theme.typography.fontSize * 1.143)}px`,
      },
    },
  }),
);
