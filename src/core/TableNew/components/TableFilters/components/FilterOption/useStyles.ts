import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useFilterOptionStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 12,
    flex: 1,
    "& *": {
      fontFamily: theme.design.font.tomatoGrotesk.concat(" !important"),
    },
  },
  rootSelectInput: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  control: {
    height: 46,
    borderRadius: 8,
    background: "#FFF !important",
  },
  option: {
    padding: theme.spacing(2),
    background: "#FFF !important",
    borderBottom: "0.5px solid #DBDFE7",
    fontFamily: theme.design.font.tomatoGrotesk.concat(" !important"),
    cursor: "pointer",
    "&:hover": {
      background: "#F5F7F9 !important",
    },
    "&:last-child": {
      borderBottom: "none",
    },
  },
  textInput: {
    height: "auto",
    flex: 1,
    width: "auto",
    borderRadius: 8,
    background: "#FFF !important",
    "&:has(input:disabled)": {
      background: "#F5F7F9 !important",
    },
    "& input": {
      fontFamily: theme.design.font.tomatoGrotesk,
    },
  },
  rootTextInputContainer: {
    flex: 1,
  },
  trashButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    "& svg": {
      width: 18,
      height: 18,
      color: "#E61437",
    },
    "&:disabled": {
      cursor: "auto",
      "& svg": {
        color: theme.design.colors.waz_brand600,
      },
    },
  },
  base: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
}));
