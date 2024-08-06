import React, { ReactNode } from "react";
import { ResponsiveBreakPoints } from "./types";
interface CarouselProps {
    children: ReactNode;
    spaceBetween?: number;
    itemsToShow?: number;
    itemPerslide?: number;
    onActiveIndexChange?: (index: number) => void;
    breakpoints?: ResponsiveBreakPoints;
}
export declare const Carousel: React.ForwardRefExoticComponent<CarouselProps & React.RefAttributes<{
    next: () => void;
    prev: () => void;
}>>;
export {};
