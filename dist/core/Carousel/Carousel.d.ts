import React, { ReactNode } from "react";
import "./styles1.css";
interface CarouselProps {
    children: ReactNode;
    spaceBetween?: number;
    itemsToShow?: number;
    itemPerslide?: number;
}
export declare const Carousel: React.ForwardRefExoticComponent<CarouselProps & React.RefAttributes<{
    next: () => void;
    prev: () => void;
}>>;
export {};
