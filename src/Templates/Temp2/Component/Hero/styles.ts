import makeStyles from '@mui/styles/makeStyles';
import { Theme } from "@mui/material/styles";

export const useHeroStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    fontFamily: "Cormorant Garamond",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
      position: "relative",
      width: "100%",
      height: "100%",
      objectFit: "cover"
  },
  heroText: {
      margin: "0, auto",
      textAlign: "center",
      color: theme.design.colors.white,
      zIndex: 2,
      position: "absolute",
      top: "45%",
      [theme.breakpoints.down("md")]: {
        top: "20%",
        fontSize: theme.typography.fontSize * 4,
      }, 
      [theme.breakpoints.down("sm")]: {
        top: "15%",
      },
  },
  welcome: {
      fontSize: theme.typography.fontSize * 5 + 4,
      margin: 0,
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.fontSize * 4,
        marginBottom: theme.spacing(1)
      },  
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.fontSize + 12,
      }, 
  },
  content: {
    fontSize: theme.typography.fontSize + 10,
    margin: theme.spacing(3, 0),
    [theme.breakpoints.down("md")]: {
      width: "70%",
      margin: "auto"
    }, 
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 4,
    }, 
  },
  subscribe: {
    background: theme.design.colors.terracotta,
    borderRadius: 0,
    padding: theme.spacing(1,3),
    fontSize: theme.typography.fontSize + 8,
    marginTop:theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 4,
      marginTop:theme.spacing(6)
    }, 
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 4,
      marginTop: 0,
    }, 
  }
}));