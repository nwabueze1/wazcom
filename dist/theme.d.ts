import { Theme as MuiTheme } from "@mui/material/styles";
type ExtendedThemeOptions = {
    include: {
        [key: string]: any;
    };
    design: {
        font: {
            [key: string]: any;
        };
        colors: {
            [key: string]: string;
        };
        shadow: {
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
