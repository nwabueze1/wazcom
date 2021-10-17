import { Theme } from "@mui/material/styles";

import makeStyles from '@mui/styles/makeStyles';

export interface SubDomainStyleProps {
  width?: string;
  height?: string;
  fontSize?: number;
  labelPaddingTop?: string;
  labelPaddingBottom?: string;
  labelFontSize?: string;
  marginBottom?: string;
  marginError?: string;
  inputParrentPadding?: string;
}

export const useSubDomainStyles = makeStyles<Theme, SubDomainStyleProps>(
  (theme: Theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      marginBottom: 15,
    },
    label: {
      marginBottom: 9,
      fontSize: "1rem",
      fontWeight: 700,
    },
    nameContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      width: ({ width }) => width,
      marginBottom: ({ marginBottom }) => marginBottom ?? 0,
    },
    input_parent: {
      position: "relative",
      paddingTop: ({ inputParrentPadding }) => inputParrentPadding,
      margin: "0 0 1% 0",
    },
    input: {
      width: ({ width }) => width,
      height: ({ height }) => height,
    },

    customTextField: {
      width: "100%",
      height: ({ height }) => height,
      "& input::placeholder": {
        fontSize: ({ fontSize }) => fontSize,
        color: theme.design.colors.black,
      },

      "&:focus": {
        outline: "none",
      },
    },

    information: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "35%",
      height: "100%",
      paddingTop: "1%",
      background: "#EFEDED",
      border: "1px solid rgba(0,0,0,0.2)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#5C5C5C",
    },

    error_message: {
      color: "#EA3C53",
      margin: ({ marginError }) => (marginError ? marginError : "0.8vh 0 0 0"),
      fontSize: "16px",
    },
  }),
);
