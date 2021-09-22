import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useSelectorStyles = makeStyles((theme: Theme) =>
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
