import {
  createTheme,
  adaptV4Theme,
  Theme as MuiTheme,
} from "@mui/material/styles";




type ExtendedThemeOptions = {
  include: { [key: string]: any };
  design: {
    font: { [key: string]: any };
    colors: { [key: string]: string };
  };
};

declare module "@mui/material/styles/createTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends ExtendedThemeOptions {}

  // allow configuration using `createMuiTheme`
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DeprecatedThemeOptions extends ExtendedThemeOptions {}
}

export type BaseTheme = MuiTheme & ExtendedThemeOptions;

export const theme: any = {
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
      maxWidth: 1294,
      tabMaxWidth: 700,
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
      brandon: (weight: 400) => ({
        "font-family": '"Nunito", sans-serif',
        "font-weight": weight,
      }),
      title: '"auto-pro-new", sans-serif',
      regular: '"Nunito", sans-serif',
    },
    colors: {
      Grey:'#414141',
      red70: "#FF4C4C",
      red90: "#FF1919",
      gray: "#BEBEBE",
      bgLight: "#EDF0F5",
      width: "1366px",
      blue: "#0889F7",
      lightGrey: "#F5F5F5",
      paleGrey: "#E4E4E4",
      orange: "#E8505B",
      darkBlue: "#274C77",
      red: "#FF0000",
      lightRed: "#FF4C4C",
      sunRed: "#FF4C4C",
      honey: "#F7FFF7",
      grey: "#3A3335",
      grey2: "#4F4F4F",
      grey4: "#BDBDBD",
      grey5: "#E0E0E0",
      fauxGrey: "#5C5C5C",
      maroon: "#A33F50",
      charcoal: "#2A2D34",
      harvestGold: "#F2DBB5",
      silver: "#BDBDBD",
      white: "#FFFFFF",
      offWhite: "#D6D6D6",
      fauxBlack: "#121212",
      magicMint: "#FEDAA2",
      black: "#000000",
      bglight: "#EDF0F5",
      grey1: "#BEBEBE",
      red20: "#FFCCCC",
      red10: "#FFE5E5",
      red50: "#FF8080",
      red100: "#FF0000",
      red80: "#FF3333",
      red60: "#FF6666",
      red40: "#FF8080",
      red30: "#FFB2B2",
      info: "#2F80ED",
      success: "#27AE60",
      warning: "#E2B93B",
      error: "#FF0000",
      simpleblack: "#2D2D2D",
      pureblack: "#000000",
      gray100: "#333333",
      gray80: "#5C5C5C",
      gray60: "#ADADAD",
      gray40: "#D6D6D6",
      gray30: "#E5E5E5",
      gray20: "#EBEBEB",
      gray10: "#F5F5F5",
      goldensand: "#F2D07B",
      lightgoldensand: "#F1E584",
      lemon: "#D5F199",
      green1: "#CDFFCD",
      green2: "#90A46B",
      green3: "#27AE60",
      darkorange: "#F4900C",
      lightorange: "#FFAA00",
      grey80: "#5C5C5C",
      yellowsea: "#F5A53C",
      grayline: "#AAAAAA",
      terracotta: "#CA684D"

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
