import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useTablePaginationV2Styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    background: theme.design.colors.waz_white,
    padding: theme.spacing(2.5),
  },
  paginationDirection: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.5),
    color: theme.design.colors.waz_brand700,
    transition: "all 0.3s ease-in",
    cursor: "auto",
    background: "none",
    border: "none",
    padding: 0,
    fontWeight: 500,
    textTransform: "capitalize",
    fontSize: theme.typography.fontSize + 2,
    fontFamily: theme.design.font.tomatoGrotesk,
  },
  paginationDirectionActive: {
    color: theme.design.colors.waz_brand800,
    opacity: 1,
    cursor: "pointer",
  },
  paginationDirectionIcon: {
    fontSize: theme.typography.fontSize + 4,
  },
  paginationRows: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),

    "& p": {
      fontSize: theme.typography.fontSize,
      color: theme.design.colors.waz_black,
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  paginationSelect: {
    width: `60px !important`,
    marginBottom: "0 !important",
  },
  paginationSelectInput: {
    padding: "0px 0 0 0",
    background: theme.design.colors.waz_white,
    height: "30px !important",
  },
  paginationSelectInputIcon: {
    fill: theme.design.colors.waz_grey1,
    fontSize: theme.typography.fontSize + 14,
  },
  paginationSelectInputLabel: {
    fontSize: theme.typography.fontSize + 1,
  },
  paginationPages: {
    display: "flex",
    alignItems: "flex-end",
    gap: theme.spacing(0.5),
  },
  paginationPage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: theme.typography.fontSize,
    transition: "all 0.3s ease-in",
    borderRadius: 6,
    cursor: "pointer",
    color: theme.design.colors.waz_brand600,
    width: 40,
    height: 40,
    fontFamily: theme.design.font.tomatoGrotesk,
  },
  paginationPageActive: {
    background: theme.design.colors.waz_brand50,
    color: theme.design.colors.waz_brand500,
  },
  elipsisContainer: {
    display: "flex",
  },
  elipsis: {
    width: 19,
    height: 20,
    display: "flex",
    alignItems: "center",
  },
}));
