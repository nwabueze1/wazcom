import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { ButtonProps } from "./types";

export const useButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize:'16px',
      textTransform:'capitalize',
      fontWeight:600,
      minWidth:theme.spacing(36),
      minHeight:theme.spacing(7.5),
      background:theme.design.colors.lightRed,
      border: 0,
      display: "flex",
      borderRadius: theme.spacing(1),
      justifyContent: "center",
      alignItems: "center",
      "&:focus": {
        outline: "none",
      },
    },
    wrapper: {
      display: "flex",
      justifyContent: ({ align }: ButtonProps) =>
        align && align == "right" ? "flex-end" : "flex-start",
    },
    align: ({ align }: ButtonProps) => ({
      justifyContent: align && align == "right" ? "flex-end" : "flex-start",
    }),
    title: {},
    progress: {
      color: theme.design.colors.white,
    },
    normal: {
      color: theme.design.colors.white,
      backgroundColor: theme.design.colors.primaryBlue,
      padding: `${theme.typography.fontSize * 0.5}px ${
        theme.typography.fontSize * 3
      }px`,
      minWidth:theme.spacing(30),
      minHeight:theme.spacing(7),
    },
    small: {
      color: theme.design.colors.white,
      padding: `${theme.typography.fontSize * 0.5}px ${
        theme.typography.fontSize * 3
      }px`,
      minWidth:theme.spacing(30),
      minHeight:theme.spacing(6),
    },
    medium: {
      color: theme.design.colors.white,
      padding: `${theme.typography.fontSize * 0.5}px ${
        theme.typography.fontSize * 3
      }px`,
      minWidth:theme.spacing(38),
      minHeight:theme.spacing(7.5),
    },
    large: {
      color: theme.design.colors.white,
      padding: `${theme.typography.fontSize * 0.5}px ${
        theme.typography.fontSize * 3
      }px`,
      minWidth:theme.spacing(40),
      minHeight:theme.spacing(8),
    },
    hover: {
    backgroundColor:theme.design.colors.maroon,
    },
    
    active:{
      backgroundColor:theme.design.colors.orange,
    },
    disable:{
      backgroundColor:theme.design.colors.paleGrey,
    },
    transparent:{
      backgroundColor:'transparent',
      color:theme.design.colors.lightRed,
      border: `2px solid ${theme.design.colors.lightRed}`
    }, 
    hoverOutline:{
      backgroundColor:theme.design.colors.red10,
      color:theme.design.colors.maroon,
      border: `2px solid ${theme.design.colors.maroon}`

    }, 
    activeOutline:{
      backgroundColor:theme.design.colors.red20,
      color:theme.design.colors.lightRed,
      border: `2px solid ${theme.design.colors.lightRed}`
    }
    
  }),
);
