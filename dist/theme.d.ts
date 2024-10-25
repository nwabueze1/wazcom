import { Theme as MuiTheme } from "@mui/material/styles";
type ExtendedThemeOptions = {
    include: {
        [key: string]: any;
    };
    design: {
        font: {
            garamond: string;
            lato: string;
            cookie: string;
            raleway: string;
            dmSans: string;
            nunitoSans: string;
            inter: string;
            bitter: string;
            merriweather: string;
            openSans: string;
            lostaMasta: string;
            lostaMastaLight: string;
            montserrat: string;
            tomatoGrotesk: string;
        };
        colors: {
            [key: string]: string;
        };
        background: {
            [key: string]: string;
        };
        border: {
            [key: string]: string;
        };
    };
};
declare module "@mui/material/styles" {
    interface Theme extends ExtendedThemeOptions {
    }
    interface ThemeOptions extends ExtendedThemeOptions {
    }
}
export type BaseTheme = MuiTheme & ExtendedThemeOptions;
export declare const baseColors: {
    dangerColor: string;
    successColor: string;
    greyColor: string;
    whiteColor: string;
};
export declare const theme: any;
declare const _default: MuiTheme;
export default _default;
