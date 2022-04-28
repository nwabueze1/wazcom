import { createTheme, adaptV4Theme } from "@mui/material/styles";
export var baseColors = {
  dangerColor: "#FF0000",
  successColor: "#0A7227",
  greyColor: "#808080",
  whiteColor: "#FFFFFF",
};
export var theme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ["Poppins, sans-serif"].join(","),
    fontSize: 12,
    fontWeightBold: "bold",
    h2: {
      fontSize: "3rem",
      fontWeight: 500,
    },
    h3: {},
    h4: {},
    h5: {
      fontSize: ".8rem",
      fontWeight: 500,
    },
    h6: {},
  },
  styles: {
    maxWidth: 1294,
    tabMaxWidth: 700,
  },
  palette: {
    primary: {
      light: "#59598E",
      main: "#38385F",
      dark: "#2E2E48",
      contrastText: "#fff",
    },
  },
  include: {
    "@keyframes gradient": {
      from: { width: 0 },
      to: { width: "100%" },
    },
    styles: {
      template2: {
        maxWidth: 1294,
        maxWidthMd: 700,
        font: {
          garamond: "Cormorant Garamond, san-serif",
          lato: "Lato, sans-serif",
          cookie: "Cookie, cursive;",
          raleway: "Raleway, sans-serif",
        },
      },
      template4: {
        font: "Nunito",
      },
    },
    anim: {
      zIndex: 1,
      padding: "8px 25px",
      background: "none",
      overflow: "hidden",
      position: "relative",
      verticalAlign: "middle",
      MozOsxFontSmoothing: "grayscale",
      "-webkit-backface-visibility": "hidden",
      color: "#274C77",
      borderColor: "#FFFFFF",
      transition: "border-color 0.3s, color 0.3s",
      "-webkit-transition": "border-color 0.3s, color 0.3s",
      "-webkit-transition-timing-function": "cubic-bezier(0.2, 1, 0.3, 1)",
      transitionTimingFunction: "cubic-bezier(0.2, 1, 0.3, 1)",
      border: "4px solid",
      fontWeight: 600,
      letterSpacing: "2px",
      textTransform: "uppercase",
      fontSize: 16,
      "&::before": {
        content: "''",
        position: "absolute",
        top: "0",
        left: "0",
        width: "150%",
        height: "100%",
        background: "#37474f",
        zIndex: "-1",
        WebkitTransform: "rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0)",
        transform: "rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0)",
        WebkitTransformOrigin: "0% 100%",
        transformOrigin: "0% 100%",
        WebkitTransition:
          "-webkit-transform 0.3s, opacity 0.3s, background-color 0.3s",
        transition: "transform 0.3s, opacity 0.3s, background-color 0.3s",
      },
      "&:hover, &:focus": {
        color: "#FFFFFF",
        borderColor: "#274C77",
      },
      "&:hover:before, &:focus": {
        opacity: "1",
        backgroundColor: "#274C77",
        WebkitTransform: "rotate3d(0, 0, 1, 0deg)",
        transform: "rotate3d(0, 0, 1, 0deg)",
        WebkitTransitionTimingFunction: "cubic-bezier(0.2, 1, 0.3, 1)",
        transitionTimingFunction: "cubic-bezier(0.2, 1, 0.3, 1)",
      },
    },
    title: {
      fontWeight: 600,
      letterSpacing: "2px",
    },
    subTitle: {
      fontWeight: 500,
    },
  },
  design: {
    font: {
      brandon: function (weight) {
        return {
          "font-family": '"Nunito", sans-serif',
          "font-weight": weight,
        };
      },
      title: '"auto-pro-new", sans-serif',
      regular: '"Nunito", sans-serif',
    },
    colors: {
      dangerColor: baseColors.dangerColor,
      dangerColor100: "#990000",
      dangerColor200: "#ff3333",
      dangerColor300: "#ff5959",
      successColor: baseColors.successColor,
      successColor100: "#22803c",
      successColor200: "#3b8e52",
      successColor300: "#e6f0e9",
      greyColor: "#808080",
      greyColor100: "#e5e5e5",
      greyColor200: "#8c8c8c",
      greyColor300: "#666666",
      greyColor400: "#333333",
      whiteColor200: "#f9f9f9",
      Grey: "#414141",
      gray: "#BEBEBE",
      blue: "#0889F7",
      grey: "#3A3335",
      yellowsea: "#F5A53C",
      greenishGrey: "#999F9B",
      greenishGrey2: "#4D5650",
      grey5: "#E6E7E6",
      white: "#FFFFFF",
      primaryColor100: "#0A7227",
      mercury: "#CCCFCD",
      black: "#010E05",
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: 64,
        lineHeight: "75.14px",
      },
      h2: {
        fontSize: 40,
        lineHeight: "46.96px",
      },
      h3: {
        fontSize: 32,
        lineHeight: "37.57px",
      },
      h4: {
        fontSize: 24,
        lineHeight: "28.18px",
        fontWeight: 700,
      },
    },
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiChip: {
      root: {
        width: "auto",
      },
    },
    MuiOutlinedInput: {
      root: {
        minHeight: 40,
        position: "relative",
        "& $notchedOutline": {
          borderColor: "rgba(0, 0, 0, 0.23)",
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "#4A90E2",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderColor: "rgba(0, 0, 0, 0.23)",
          },
        },
        "&$focused $notchedOutline": {
          borderColor: "rgba(255, 0, 0, 0.2)",
          boxSizing: "border-box",
          boxShadow: "0px 0px 8px rgba(255, 0, 0, 0.2)",
        },
      },
      input: {
        padding: "8px 12px",
        minHeight: 40,
        fontSize: ".9rem",
        lineHeight: "13pt",
        boxSizing: "border-box",
      },
      notchedOutline: {
        borderWidth: 0.3,
        borderStyle: "solid",
        borderColor: "#ADADAD",
        transition: "border-color box-shadow .3s",
      },
    },
  },
};
export default createTheme(adaptV4Theme(theme));
