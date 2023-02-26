import { createTheme, Theme as MuiTheme } from "@mui/material/styles";

type ExtendedThemeOptions = {
  include: { [key: string]: any };
  design: {
    font: { [key: string]: any };
    colors: { [key: string]: string };
    background: { [key: string]: string };
    border: { [key: string]: string };
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
      sm: 480,
      md: 769,
      lg: 1025,
      xl: 1440,
      xxl: 1728,
      xxxl: 1920,
    },
  },
  typography: {
    fontWeightMedium: 600,
    fontFamily: ["'Open Sans', sans-serif"].join(","),
    fontSize: 12,
    fontWeightBold: "bold",
    h1: {
      fontSize: "2.25rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1rem",
    },
    h5: {
      fontSize: ".8rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: ".5rem",
      fontWeight: 400,
    },
  },
  styles: {
    maxWidth: 1294,
    tabMaxWidth: 700,
  },
  palette: {
    primary: {
      light: "#59598E",
      main: "#FFFFFF",
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
      mbmc: {
        maxWidth: 1720,
      },
      template2: {
        maxWidth: 1294,
        maxWidthMd: 700,
      },
      templates: {
        maxWidth: 1440,
      },
      template4: {
        font: "Nunito",
      },
    },
  },
  design: {
    font: {
      garamond: "Cormorant Garamond, san-serif",
      lato: "Lato, sans-serif",
      cookie: "Cookie, cursive;",
      raleway: "Raleway, sans-serif",
      dmSans: "DM Sans, sans-serif",
      nunitoSans: "Nunito Sans, sans-serif",
      inter: "Inter, sans-serif",
      bitter: "Bitter, sans-serif",
      merriweather: "Merriweather, sans-serif",
      openSans: "Open Sans, sans-serif",
      lostaMasta: "Losta Masta",
      lostaMastaLight: "Losta Masta Regular",
      montserrat: "Montserrat",
    },
    colors: {
      grey: "#333333",
      error: "#c32611",
      info: "#4961E3",
      warning: "#E0BC24",
      waz_primary20: "#212121",
      waz_primary50: "#216430",
      waz_primary100: "#0A7227",
      waz_primary200: "#23803D",
      waz_primary300: "#3B8E52",
      waz_primary400: "#6CAA7D",
      waz_primary500: "#9DC7A9",
      waz_primary600: "#CEE3D4",
      waz_primary700: "#E7F1E9",
      waz_primary800: "#85B993",
      waz_primary900: "#F7FCF8",
      secondary100: "#F4CDB4",
      info100: "#2F80ED",
      success100: "#0BCE5A",
      success200: "#F3F8F4",
      warning100: "#E2B93B",
      warning200: "#FBF6E7",
      error100: "#F34141",
      black: "#000000",
      black200: "#010E05",
      waz_white: "#FFFFFF",
      waz_white100: "#FAFAFA",
      grey100: "#343E37",
      grey200: "#4D5650",
      grey300: "#999F9B",
      grey400: "#CCCFCD",
      grey500: "#E6E7E6",
      grey600: "#FBFBFB",
      grey900: "#E8E8E8",
      grey700: "#676E69",
      grey800: "#1A261E",
      black300: "rgba(0, 0, 0, 0.5)",
      black400: "rgba(0,0,0,0.06)",
      white200: "rgba(255, 255, 255, 0.3)",

      waz_primaryColor100: "#0A7227",
      waz_primaryColor200: "#014029",
      waz_primaryColor300: "#025939",
      waz_primaryColor700: "#549C68",
      waz_lightGreen: "#F7FCF8",
      waz_dangerColor: baseColors.dangerColor,
      waz_dangerColor100: "#990000",
      waz_dangerColor200: "#ff3333",
      waz_dangerColor300: "#ff5959",
      waz_dangerColor400: "#FF4C4C",
      waz_orangeColor100: "#F25430",
      waz_lightOrange: "#F29F80",
      waz_orangeColor50: "#FAFAFA",
      waz_successColor: baseColors.successColor,
      waz_successColor100: "#22803c",
      waz_successColor200: "#3b8e52",
      waz_successColor300: "#e6f0e9",
      waz_greyColor: "#808080",
      waz_greyColor50: "#F5F5F5",
      waz_greyColor100: "#e5e5e5",
      waz_greyColor150: "#E3DFDF",
      waz_greyColor200: "#8c8c8c",
      waz_greyColor300: "#666666",
      waz_greyColor400: "#333333",
      waz_greyColor500: "#ADADAD",
      waz_greyColor600: "#5A5959",
      waz_whiteAlpha: "#f9f9f9",
      waz_whiteAlpha100: "#F0F0F0",
      waz_black: "#000000",
      waz_black100: "#00000014",
      waz_Grey: "#414141",
      waz_gray: "#BEBEBE",
      waz_blue: "#0889F7",
      waz_blue200: "#2F80ED",
      waz_grey: "#3A3335",
      waz_yellowsea: "#F5A53C",
      waz_greenishGrey: "#999F9B",
      waz_greenishGrey2: "#4D5650",
      waz_grey5: "#E6E7E6",
      waz_grey1: "#343E37",
      waz_mercury: "#CCCFCD",
      waz_primaryBlack: "#010E05",
      waz_grey6: "#FBFBFB",
      waz_grey50: "#EEEEEE",
      waz_grey100: "#808782",
      waz_grey200: "#999F9B",
      waz_grey300: "#E8E8E8",
      waz_grey400: "#4D5650",
      waz_grey500: "#1A261E",
      waz_grey600: "#676E69",
      waz_grey700: " #9B9B9B",
      waz_orange: "#F4CDB4",
      waz_gold: "#CBA735",
      waz_gold100: " #F2EADF",
      waz_brown: "#A54227",
      waz_red: "#C23434",
      waz_peach: "#FAF8F7",
    },
    background: {
      waz_primaryWhite: "#FFFFFF",
      waz_primaryBlack: "#010E05",
    },
    border: {
      waz_grey200: "1px solid #999F9B",
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
