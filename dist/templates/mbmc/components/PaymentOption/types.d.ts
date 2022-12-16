export declare type PaymentOptionProps = {
    img?: string;
    title: string;
    value: string;
    name: string;
    config: {
        [key: string]: string;
    };
    handleChange: (paymentOption: string) => void;
};
