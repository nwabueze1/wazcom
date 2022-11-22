import { FormControls, handleInputChange } from "../../../../components/Form";
import { useDeliveryStyles } from "./styles";

export const usePickupConfig = () => {
    return () => ({
        initialValues: { email: "", first_name: "", last_name: "", phone: "" },
        onSubmit: () => {},
    });
};

export const useDeliveryConfig = () => {
    const getPickupConfig = usePickupConfig();

    return () => {
        const pickupConfig = getPickupConfig();

        return {
            initialValues: {
                ...pickupConfig.initialValues,
                address: "",
                city: "",
                country: "",
                postal_code: "",
            },
            onSubmit: () => {},
        };
    };
};

export const usePickupControls = () => {
    const classes = useDeliveryStyles();

    return (formik: any): FormControls[] => [
        {
            type: "groupedInput",
            properties: {
                name: "PERSONAL INFORMATION",
                controls: [
                    {
                        type: "text",
                        properties: {
                            name: "email",
                            placeholder: "Email Address",
                            type: "email",
                            onChange: ({ value }: { name: string; value: string }) =>
                                handleInputChange(formik, "email", value),
                            classNames: { textInput: classes.deliveryInput},
                            className: classes.deliveryInputParent,
                        },
                    },
                    {
                        type: "text",
                        properties: {
                            name: "first_name",
                            placeholder: "First name",
                            type: "text",
                            onChange: ({ value }: { name: string; value: string }) =>
                                handleInputChange(formik, "first_name", value),
                            classNames: { textInput: classes.deliveryInput},
                            className: classes.deliveryInputParent,
                        },
                    },
                    {
                        type: "text",
                        properties: {
                            name: "last_name",
                            placeholder: "Last name",
                            type: "text",
                            onChange: ({ value }: { name: string; value: string }) =>
                                handleInputChange(formik, "last_name", value),
                            classNames: { textInput: classes.deliveryInput},
                            className: classes.deliveryInputParent,
                        },
                    },
                    {
                        type: "text",
                        properties: {
                            name: "phone",
                            placeholder: "Phone number",
                            type: "tel",
                            onChange: ({ value }: { name: string; value: string }) =>
                                handleInputChange(formik, "phone", value),
                            classNames: { textInput: classes.deliveryInput},
                            className: classes.deliveryInputParent,
                        },
                    },
                ],
            },
        },
    ];
};

export const useDeliveryControls = () => {
    const classes = useDeliveryStyles();
    const getPickupControls = usePickupControls();

    return (formik: any): FormControls[] => {
        const pickupControls = getPickupControls(formik);

        return [
            ...pickupControls,
            {
                type: "groupedInput",
                properties: {
                    name: "SHIPPING INFORMATION",
                    controls: [
                        {
                            type: "text",
                            properties: {
                                name: "address",
                                placeholder: "House Address",
                                type: "text",
                                onChange: ({ value }: { name: string; value: string }) =>
                                    handleInputChange(formik, "address", value),
                                classNames: { textInput: classes.deliveryInput},
                                className: classes.deliveryInputParent,
                            },
                        },
                        {
                            type: "text",
                            properties: {
                                name: "city",
                                placeholder: "City",
                                type: "text",
                                onChange: ({ value }: { name: string; value: string }) =>
                                    handleInputChange(formik, "city", value),
                                classNames: { textInput: classes.deliveryInput},
                                className: classes.deliveryInputParent,
                            },
                        },
                        {
                            type: "text",
                            properties: {
                                name: "country",
                                placeholder: "Country",
                                type: "text",
                                onChange: ({ value }: { name: string; value: string }) =>
                                    handleInputChange(formik, "country", value),
                                classNames: { textInput: classes.deliveryInput},
                                className: classes.deliveryInputParent,
                            },
                        },
                        {
                            type: "text",
                            properties: {
                                name: "postal_code",
                                placeholder: "Postal Code",
                                type: "text",
                                onChange: ({ value }: { name: string; value: string }) =>
                                    handleInputChange(formik, "postal_code", value),
                                classNames: { textInput: classes.deliveryInput},
                                className: classes.deliveryInputParent,
                            },
                        },
                    ],
                },
            },
        ];
    };
};
