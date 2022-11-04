export type DeliveryOptionProps = {
    img?: string;
    title: string;
    description?: string;
    value: string;
    name: string;
    handleChange: (data: { name: string; value: any }) => void;
};
