import { CoreCartFields } from "./models";
export declare const paymentImages: {
    [key: string]: string;
};
export declare const calculateOptionsTotal: (options: any[], quantity: number) => number;
export declare const calculateCartSubTotal: (cart: CoreCartFields, uuid?: string) => number;
export declare const getTotalChargeAmount: (cart: CoreCartFields) => number;
