export type DeliveryOptionProps = {
    image?: string;
    title: string;
    description?: string;
    value: string;
    name: string;
    handleChange: (option: "pickup" | "dispatch") => void;
};
