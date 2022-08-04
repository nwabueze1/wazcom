import { Theme } from "@mui/material";

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const menuItemTableStyles = makeStyles((theme: Theme) =>
  createStyles({
    siteTypeSelect: {
      width: "6em",
    },
    option: {
      background: "red"
    },
    dayPicker: {
      border: `1px solid ${theme.design.colors.waz_grey300}`,
      borderRadius: "5px",
      width: "140%",
      height: "40px",
      paddingInline: theme.spacing(2),
    },
  }),
);

  