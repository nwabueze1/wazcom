declare global {
    interface Window {
        dataLayer: Record<string, any>[];
    }
}
export declare const useRecordCartAction: () => (block_uuid: string, cart_action: string) => void;
