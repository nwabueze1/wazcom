declare module "@mui/material/styles/createTheme" {
    interface Theme {
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
    }
    interface DeprecatedThemeOptions {
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
    }
}
export declare const theme: any;
declare const _default: import("@mui/material/styles").Theme;
export default _default;
