import { TCreateAddressVariables } from "./types";
import { CoreGuestFields } from "../../../../../models";
export declare const useCreateAddress: () => (variables: TCreateAddressVariables, guest: CoreGuestFields, onSuccess?: () => void) => Promise<void>;
