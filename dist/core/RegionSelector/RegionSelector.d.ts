import { FC } from "react";
import { RegionSelectorProps } from "./types";
declare global {
    interface Window {
        google: any;
    }
}
export declare const RegionSelector: FC<RegionSelectorProps>;
