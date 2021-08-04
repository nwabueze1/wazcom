import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { ButtonProps } from "./types";

export const useButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: 0,
      display: "flex",
      borderRadius: theme.spacing(0.5),
      justifyContent: "center",
      alignItems: "center",
      "&:focus": {
        outline: "none",
      },
    },
    wrapper: {
      display: "flex",
      justifyContent: ({ align }: ButtonProps) =>
        align && align == "right" ? "flex-end" : "flex-start",
    },
    align: ({ align }: ButtonProps) => ({
      justifyContent: align && align == "right" ? "flex-end" : "flex-start",
    }),
    title: {},
    progress: {
      color: theme.design.colors.white,
    },
    normal: {
      color: theme.design.colors.white,
      backgroundColor: theme.design.colors.primaryBlue,
      padding: `${theme.typography.fontSize * 0.5}px ${
        theme.typography.fontSize * 3
      }px`,
    },
  }),
);
