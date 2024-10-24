import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useTableActionStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    gap: theme.spacing(1.5),
    color: theme.design.colors.waz_grey1,
    marginBottom: theme.spacing(1),
    alignItems: "center",
    fontFamily: theme.design.font.tomatoGrotesk,
  },
  searchInputElement: {
    width: "24%",
  },
  searchInput: {
    background: `${theme.design.colors.waz_white} !important`,
    fontSize: `${theme.typography.fontSize + 1}px !important`,
    height: "40px !important",
    padding: 0,

    "&:hover": {
      borderColor: theme.design.colors.primary700,
    },
    "&:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.primary700,
    },
  },
  searchInputAdornment: {
    background: theme.design.colors.waz_white,
    paddingLeft: theme.spacing(1.25),
  },
  selectInputElement: {
    width: "17% !important",
  },
  selectInput: {
    padding: "5px 0 0 0 ",
    background: theme.design.colors.waz_white,
    height: "35px !important",
  },
  selectContainer: {
    width: "100%",
    background: `${theme.design.colors.waz_white} !important`,
  },
  selectControl: {
    height: "40px !important",
    background: theme.design.colors.waz_white,

    "&:hover": {
      borderColor: theme.design.colors.primary700,
    },
    "&:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.primary700,
    },
  },
  conditionFiltersContainer: {
    display: "flex",
    gap: theme.spacing(2),
    background: theme.design.colors.waz_white,
    flex: 1,
    borderRadius: "6px 6px 6px 0px",
    cursor: "pointer",
    overflow: "hidden",
  },
  conditionFilter: {
    position: "relative",
    fontSize: theme.typography.fontSize,
    padding: theme.spacing(0.9, 2.5),
    whiteSpace: "nowrap",
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    background: "none",
    border: "none",
    color: theme.design.colors.waz_brand600,
    textTransform: "capitalize",
    fontWeight: 400,
    fontFamily: theme.design.font.tomatoGrotesk,
  },
  conditionFilterActive: {
    fontWeight: 600,
    color: theme.design.colors.waz_brand900,
    background: theme.design.colors.waz_brand50,
    borderBottom: "2px solid #229954",
  },
  conditionFilterCount: {
    fontWeight: 600,
    fontSize: theme.typography.fontSize,
    background: theme.design.colors.waz_brand1100,
    padding: 8,
    borderRadius: "50%",
    height: 18,
    width: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  conditionFilterCountActive: {
    background: theme.design.colors.waz_brand1000,
    color: theme.design.colors.waz_brand900,
  },
}));
