export interface StyleProps {
    width?: string;
    height?: string;
    fontSize?: number;
    labelPaddingTop?: string;
    labelPaddingBottom?: string;
    marginError?: string;
    inputParrentPadding?: string;
}
export declare const useStyles: (props: StyleProps) => import("@mui/styles").ClassNameMap<string>;
