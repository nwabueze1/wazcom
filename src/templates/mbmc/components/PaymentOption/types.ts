export type PaymentOptionProps = {
    img?: string;
    title: string;
    value: string;
    name: string;
    handleChange: (paymentOption: string) => void;
};
