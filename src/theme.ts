import { createTheme, Theme as MuiTheme } from "@mui/material/styles";

type ExtendedThemeOptions = {
  include: { [key: string]: any };
  design: {
    font: { [key: string]: any };
    colors: { [key: string]: string };
  };
};

declare module "@mui/material/styles" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends ExtendedThemeOptions {}

  // allow configuration using `createMuiTheme`
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ThemeOptions extends ExtendedThemeOptions {}
}

export type BaseTheme = MuiTheme & ExtendedThemeOptions;

export const baseColors = {
  dangerColor: "#FF0000",
  successColor: "#0A7227",
  greyColor: "#808080",
  whiteColor: "#FFFFFF",
};

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
          dmSans: "DM Sans, sans-serif",
          NunitoSans: "Nunito Sans, sans-serif",
        },
      },
      template4: {
        font: "Nunito",
      },
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
      primaryColor100: "#0A7227",
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
      white: "#FFFFFF",
      whiteColor200: "#f9f9f9",
      black: "#010E05",
      Grey: "#414141",
      gray: "#BEBEBE",
      blue: "#0889F7",
      grey: "#3A3335",
      yellowsea: "#F5A53C",
      greenishGrey: "#999F9B",
      greenishGrey2: "#4D5650",
      grey5: "#E6E7E6",
      grey1: "#343E37",
      mercury: "#CCCFCD",
      primaryBlack: "#010E05",
      grey6: "#FBFBFB",
      grey120: "#808782",
      grey130: "#999F9B",
      grey140: "#E8E8E8",
      grey150: "#4D5650",
      grey160: "#1A261E",
      grey170: "#676E69",
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

export default createTheme(theme);
