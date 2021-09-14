declare module "@material-ui/core/styles/createTheme" {
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
    interface ThemeOptions {
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
declare const _default: import("@material-ui/core/styles").Theme;
export default _default;
