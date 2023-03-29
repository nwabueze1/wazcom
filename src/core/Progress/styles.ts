import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { ProgressBarProps } from "./types";

export const useProgressStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    width: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 0,
  },
  label: {
    position: "relative",
    display: "block",
    fontSize: theme.typography.fontSize - 2,
    color: theme.design.colors.waz_grey,
  },
  bar: {
    position: "relative",
    backgroundColor: theme.design.colors.waz_primary900,
    border: `1px solid ${theme.design.colors.waz_primary700}`,
    height: "12px",
    borderRadius: "20px",
    overflow: "hidden",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  progress: (props: ProgressBarProps) => ({
    postion: "absolute",
    height: "10px",
    width: `${props?.value}%` ?? "50%",
    borderRadius: "15px",
    background: theme.design.colors.waz_primary100,
    transition: "width 0.5s ease-in-out",
  }),
}));
