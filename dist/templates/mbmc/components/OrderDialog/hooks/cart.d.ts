import { TAddToCartVariables } from "./types";
export declare const useCreateCart: () => () => Promise<any>;
export declare const useAddToCart: () => (variables: TAddToCartVariables, onClose?: (() => void) | undefined, setContextProps?: ((contextProps: {
    [key: string]: any;
}) => void) | undefined) => Promise<void>;
