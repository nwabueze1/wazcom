import { ResponsiveBreakPoints } from "./types";
type CustomThemeProps = {
    gap?: number;
    itemsToShow?: number;
    breakpoints?: ResponsiveBreakPoints;
};
export declare const useCarouselStyles: (props: CustomThemeProps) => import("@mui/styles").ClassNameMap<string>;
export {};
