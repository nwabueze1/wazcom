import { Theme, makeStyles } from "@material-ui/core/styles";

export type TextareaStyleProps = {
  width?: string;
  height?: string;
  fontSize?: number;
  labelPaddingTop?: string;
  labelPaddingBottom?: string;
  labelFontSize?: string;
  marginBottom?: string;
  marginError?: string;
  inputParrentPadding?: string;
};

export const useTextareaStyles = makeStyles((theme: Theme) => ({
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
  },
  input_parent: {
    position: "relative",
    margin: "0 0 1% 0",
  },
  input: {},

  customTextField: {
    width: "100%",
    "& input::placeholder": {
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
    fontSize: "16px",
  },
}));
