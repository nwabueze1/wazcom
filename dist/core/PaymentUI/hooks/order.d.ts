import { PaymentType } from "../types";
export declare const useCreateOrder: () => (paymentType: PaymentType | undefined, onSuccess?: () => void) => Promise<any>;
export declare const useUpdateOrder: () => (paymentType: String) => Promise<any>;
