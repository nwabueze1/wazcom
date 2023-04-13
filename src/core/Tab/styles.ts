import { makeStyles } from "@mui/styles";
import { BaseTheme } from "theme";

import { TabStyleProps } from "./types";

export const useTabStyles = makeStyles((theme: BaseTheme) => ({
  root: ({ variant }: TabStyleProps) => ({
    display: "flex",
    flexDirection: variant?.includes("vertical") ? "row" : "column",
    justifyContent: variant?.includes("vertical") ? "start" : "",
    fontSize: theme.typography.fontSize,
    width: "100%",
  }),
  tabs: ({ variant, width }: TabStyleProps) => ({
    width: variant?.includes("vertical") ? width ?? "fit-content" : "fit-content",
    minWidth: variant?.includes("vertical") ? "fit-content" : 200,
    display: "flex",
    flexDirection: variant?.includes("vertical") ? "column" : "row",
    justifyContent: variant?.includes("vertical") ? "start" : "",
    gap: variant?.includes("vertical") ? theme.spacing(2) : theme.spacing(1),
    padding: variant?.includes("vertical") ? theme.spacing(2) : theme.spacing(0.5, 1),
    background: variant?.includes("vertical")
      ? theme.design.colors.white
      : theme.design.colors.waz_primary900,
    marginRight: theme.spacing(2),
    borderRadius: theme.spacing(0.5),
    boxShadow: variant?.includes("vertical")
      ? "0px 3px 6px ".concat(theme.design.colors.waz_black100)
      : "none",
    border: "1px solid transparent",
    borderColor: variant === "horizontal" ? theme.design.colors.waz_primary700 : "transparent",
  }),
  tab: ({ variant }: TabStyleProps) => ({
    display: "flex",
    flexDirection: variant === "vertical-pill" ? "column" : "row",
    justifyContent: variant?.includes("vertical") ? "flex-start" : "",
    alignItems: variant?.includes("vertical") ? "center" : "",
    gap: theme.spacing(0.5),
    color: variant?.includes("vertical") ? theme.design.colors.waz_grey1 : "",
    borderWidth: variant === "vertical-pill" ? 0 : 1,
    borderStyle: "solid",
    borderColor: theme.design.colors.waz_primary700,
    borderRadius:
      variant === "vertical"
        ? theme.spacing(0.5)
        : variant === "vertical-pill"
        ? `32px 0px 0px 32px`
        : 14,
    padding: variant?.includes("vertical")
      ? theme.spacing(1.5, 5.5, 1.5, 2)
      : theme.spacing(0.75, 2),
    fontWeight:
      variant === "vertical-pill"
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
    cursor: "pointer",
    transition: "all .5s ease-out",
    "&:hover": {
      color: variant?.includes("vertical")
        ? theme.design.colors.waz_primaryColor100
        : theme.design.colors.waz_primaryColor100,
      borderColor: theme.design.colors.waz_primary500,
    },
  }),
  tabIsActive: ({ variant }: TabStyleProps) => ({
    background: variant === "vertical" ? "" : theme.design.colors.waz_primaryColor100,
    color:
      variant === "vertical"
        ? theme.design.colors.waz_primaryColor100
        : theme.design.colors.waz_white,
    borderColor: variant?.includes("vertical")
      ? theme.design.colors.waz_primaryColor100
      : theme.design.colors.primary700,
    "&:hover": {
      color:
        variant === "vertical"
          ? theme.design.colors.waz_primaryColor100
          : theme.design.colors.waz_white,
      borderColor: variant?.includes("vertical")
        ? theme.design.colors.waz_primaryColor100
        : theme.design.colors.primary500,
    },
  }),
  contentWrapper: {
    padding: theme.spacing(1.5, 2),
    background: theme.design.colors.white,
    flex: "100",
    borderRadius: theme.spacing(0.5),
  },
  content: {
    display: "none",
  },
  contentIsActive: {
    display: "block",
  },
}));
