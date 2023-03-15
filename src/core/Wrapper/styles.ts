import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useWrapperStyles = makeStyles((theme: Theme) => ({
  root: (props: any) => ({
    background: theme.design.background.waz_primaryWhite,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.design.colors.waz_grey300,
    borderRadius: 3,
    padding: '20px',
    paddingLeft: 24,
    paddingRight: 24,
    minHeight: 120,
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 30,
    maxWidth: "1100px",
    ...props?.style
  }),
}));
