/// <reference types="react" />
import { BlockCta } from "../types";
export declare const renderCtas: (ctas: BlockCta[], mode: "view" | "edit", blockIndex: number, handleClick?: ((element: string) => void) | undefined, activeElement?: string | undefined) => JSX.Element[];
