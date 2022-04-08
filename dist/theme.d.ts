import { Theme as MuiTheme } from "@mui/material/styles";
declare type ExtendedThemeOptions = {
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
    };
};
declare module "@mui/material/styles/createTheme" {
    interface Theme extends ExtendedThemeOptions {
    }
    interface DeprecatedThemeOptions extends ExtendedThemeOptions {
    }
}
export declare type BaseTheme = MuiTheme & ExtendedThemeOptions;
export declare const baseColors: {
    dangerColor: string;
    successColor: string;
    greyColor: string;
    whiteColor: string;
};
export declare const theme: any;
declare const _default: MuiTheme;
export default _default;
