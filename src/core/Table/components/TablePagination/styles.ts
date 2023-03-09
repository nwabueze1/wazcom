import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useTablePaginationStyles = makeStyles((theme: Theme) => ({
  text: {
    fontSize: theme.typography.fontSize + 2,
    color: theme.design.colors.waz_greenishGrey2,
  },
  pageCount: {},
  tablePagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  tablePaginationNavigator: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    margin: theme.spacing(0, 1, 0, 0),
  },
  tablePaginationNavigatorText: {},
  tablePaginationNavigatorInput: {
    outline: "none",
    border: `1px solid ${theme.design.colors.waz_greyColor100}`,
    width: 50,
    borderRadius: 4,
    padding: theme.spacing(1),
  },
  pageNumber: {
    borderRadius: 4,
    padding: theme.spacing(0.6, 1.5),
    cursor: "pointer",
  },
  activePage: {
    background: theme.design.colors.waz_greyColor100,
  },
  pages: {
    display: "flex",
    alignItems: "center",
  },
  pageNavigation: {
    display: "flex",
    alignItems: "center",
  },
  pageNavigationIcon: {
    cursor: "pointer",
  },
  deactivatePageNavigationIcon: {
    opacity: 0.3,
    cursor: "default",
  },
}));
