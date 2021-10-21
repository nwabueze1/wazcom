import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

export const useSelectorStyles = makeStyles((theme: BaseTheme) =>
  createStyles({
    siteTypeSelect: {
      width: "14vw",
      height: "58px",
      border: "1px solid #BEBEBE",
      borderRadius: "4px",
      padding: "4px 13px",
      fontSize: "16px",
      color: theme.design.colors.grey,
    },

    error_message: {
      color: "#EA3C53",
      margin: "0.8vh 0 0 0",
      fontSize: "16px",
    },
  }),
);
