import { CoreCartFields, CoreGuestFields } from "../models";
import { SitePaymentType } from "../types";
export declare const useMakeGlobalPayments: () => (cart: CoreCartFields, userPaymentMethod: SitePaymentType, order: any, guest: CoreGuestFields | undefined, block_uuid: string | undefined) => Promise<void>;
