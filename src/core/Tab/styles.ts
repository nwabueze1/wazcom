import { makeStyles } from "@mui/styles";
import { BaseTheme } from "theme";

import { TabStyleProps } from "./types";

export const useTabStyles = makeStyles((theme: BaseTheme) => ({
  root: ({ variant }: TabStyleProps) => ({
    display: 'flex',
    flexDirection: variant?.includes("vertical") ? 'row' : 'column',
    justifyContent: variant?.includes("vertical") ? 'start' : '',
    fontSize: theme.typography.fontSize,
    width: "100%"
  }),
  tabs: ({ variant, width, height }: TabStyleProps) => ({
    width: variant?.includes("vertical") ? (width ?? 'fit-content') : 200,
    height: variant?.includes("vertical") ? (height ?? '100%') : 300,
    minWidth: variant?.includes("vertical") ? 'fit-content' : 200,
    minHeight: variant?.includes("vertical") ? 'fit-content' : 300,
    display: variant?.includes("vertical") ? 'flex' : '',
    flexDirection: variant?.includes("vertical") ? 'column' : 'row',
    justifyContent: variant?.includes("vertical") ? 'start' : '',
    gap: variant?.includes("vertical") ? theme.spacing(2) : '',
    padding: theme.spacing(2),
    background: theme.design.colors.white,
    marginRight: theme.spacing(2),
    borderRadius: theme.spacing(.5),
    boxShadow: "0px 3px 6px ".concat(theme.design.colors.waz_black100)
  }),
  tab: ({ variant, borderColor, borderRadius, borderWidth, backgroundColor, color, borderStyle }: TabStyleProps) => ({
    display: 'flex',
    flexDirection: variant === "vertical-pill" ? 'column' : 'row',
    justifyContent: variant?.includes("vertical") ? 'flex-start' : '',
    alignItems: variant?.includes("vertical") ? 'center' : '',
    gap: theme.spacing(0.5),
    background: variant?.includes("vertical") ? '' : (backgroundColor ?? ''),
    color: variant?.includes("vertical") ? (color ?? theme.design.colors.waz_grey1) : '',
    borderWidth: variant === "vertical-pill" ? 0 : (borderWidth ?? 1),
    borderStyle: borderStyle ?? 'solid',
    borderColor: variant === "vertical" ? (borderColor ?? theme.design.colors.primary700) : theme.design.colors.primary700,
    borderRadius: variant === "vertical" ? theme.spacing(.5) : variant === "vertical-pill" ? `${theme.spacing(4.125)} 0px 0px ${theme.spacing(4.125)}` : (borderRadius ?? 14),
    padding: variant === "vertical-pill" ? `${theme.spacing(1.4)} ${theme.spacing(5.5)} ${theme.spacing(1.4)} ${theme.spacing(2)}` : `${theme.spacing(1.7)} ${theme.spacing(5.5)} ${theme.spacing(1.7)} ${theme.spacing(2)}`,
    fontWeight: variant === "vertical-pill" ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    cursor: 'pointer',
    transition: 'all .5s ease-out',
    '&:hover': {
      color: variant?.includes("vertical") ? theme.design.colors.waz_primaryColor100 : (color ?? theme.design.colors.waz_primaryColor100),
      borderColor: variant?.includes("vertical") ? theme.design.colors.primary500 : (borderColor ?? theme.design.colors.primary500),
    },
  }),
  tabIsActive: ({ variant, backgroundColor, borderColor, color, borderRadius }: TabStyleProps) => ({
    background: variant === "vertical" ? "" : (backgroundColor ?? theme.design.colors.waz_primaryColor100),
    color: variant === "vertical" ? theme.design.colors.waz_primaryColor100 : (color ?? theme.design.colors.waz_white),
    borderColor: variant?.includes("vertical") ? (borderColor ?? theme.design.colors.waz_primaryColor100) : theme.design.colors.primary700,
    '&:hover': {
      color: variant?.includes("vertical") ? (color ?? theme.design.colors.waz_white) : theme.design.colors.waz_primaryColor100,
      borderColor: variant?.includes("vertical") ? (borderColor ?? theme.design.colors.waz_primaryColor100) : theme.design.colors.primary500,
    }
  }),
  contentWrapper: {
    padding: theme.spacing(1.7, 2),
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
