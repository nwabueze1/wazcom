import React, { ReactNode } from "react";
interface CarouselProps {
    children: ReactNode;
    spaceBetween?: number;
    itemsToShow?: number;
    itemPerslide?: number;
    onActiveIndexChange?: (index: number) => void;
}
export declare const Carousel: React.ForwardRefExoticComponent<CarouselProps & React.RefAttributes<{
    next: () => void;
    prev: () => void;
}>>;
export {};
