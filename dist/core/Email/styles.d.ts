export interface EmailStyleProps {
    width?: string;
    height?: string;
    fontSize?: number;
    labelPaddingTop?: string;
    labelPaddingBottom?: string;
    marginError?: string;
    inputParrentPadding?: string;
}
export declare const useEmailStyles: (props: EmailStyleProps) => import("@material-ui/styles").ClassNameMap<string>;
