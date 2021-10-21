import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

export interface EmailStyleProps {
  width?: string;
  height?: string;
  fontSize?: number;
  labelPaddingTop?: string;
  labelPaddingBottom?: string;
  marginError?: string;
  inputParrentPadding?: string;
}

export const useEmailStyles = makeStyles<BaseTheme, EmailStyleProps>(() => ({
  label: {
    fontSize: "18px",
    fontWeight: 500,
    color: "rgba(0,0,0,0.64)",
    paddingTop: ({ labelPaddingTop }) => labelPaddingTop,
    paddingBottom: ({ labelPaddingBottom }) => labelPaddingBottom,
  },
  nameContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: ({ width }) => width,
  },
  input_parent: {
    position: "relative",
    paddingTop: ({ inputParrentPadding }) => inputParrentPadding,
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
}));
