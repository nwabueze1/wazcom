import { FormControls, handleInputBlur, handleInputChange } from "../../../../components/Form";
import { useDeliveryStyles } from "./styles";
import { pickupSchema, deliverySchema } from "./validators";

export const usePickupConfig = () => {
    return (onSubmission?: () => void) => ({
        initialValues: { email: "", firstname: "", lastname: "" },
        validationSchema: pickupSchema,
        onSubmit: (variables: any) => {},
    });
};

export const useDeliveryConfig = () => {
    const getPickupConfig = usePickupConfig();

    return () => {
        const pickupConfig = getPickupConfig();

        return {
            initialValues: {
                ...pickupConfig.initialValues,
                phone: "",
                addressline1: "", 
                city: "",
                state: "",
                country: "",
                postcode: "",
            },
            validationSchema: deliverySchema,
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
                            onBlur: () => {
                                handleInputBlur(formik, "email");
                            },
                            classNames: {
                                textInput: classes.deliveryInput,
                                feedback: classes.deliveryFeedback,
                            },
                            className: classes.deliveryInputParent,
                            error: formik?.touched?.email && Boolean(formik?.errors?.email),
                            feedback:
                                formik?.touched?.email && formik?.errors?.email
                                    ? { status: "error", text: formik.errors.email }
                                    : undefined,
                        },
                    },
                    {
                        type: "text",
                        properties: {
                            name: "firstname",
                            placeholder: "First name",
                            type: "text",
                            onChange: ({ value }: { name: string; value: string }) =>
                                handleInputChange(formik, "firstname", value),
                            onBlur: () => {
                                handleInputBlur(formik, "firstname");
                            },
                            classNames: {
                                textInput: classes.deliveryInput,
                                feedback: classes.deliveryFeedback,
                            },
                            className: classes.deliveryInputParent,
                            error: formik?.touched?.firstname && Boolean(formik?.errors?.firstname),
                            feedback:
                                formik?.touched?.firstname && formik?.errors?.firstname
                                    ? { status: "error", text: formik.errors.firstname }
                                    : undefined,
                        },
                    },
                    {
                        type: "text",
                        properties: {
                            name: "lastname",
                            placeholder: "Last name",
                            type: "text",
                            onChange: ({ value }: { name: string; value: string }) =>
                                handleInputChange(formik, "lastname", value),
                            onBlur: () => {
                                handleInputBlur(formik, "lastname");
                            },
                            classNames: {
                                textInput: classes.deliveryInput,
                                feedback: classes.deliveryFeedback,
                            },
                            className: classes.deliveryInputParent,
                            error: formik?.touched?.lastname && Boolean(formik?.errors?.lastname),
                            feedback:
                                formik?.touched?.lastname && formik?.errors?.lastname
                                    ? { status: "error", text: formik.errors.lastname }
                                    : undefined,
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
                                name: "phone",
                                placeholder: "Phone number",
                                type: "tel",
                                onChange: ({ value }: { name: string; value: string }) =>
                                    handleInputChange(formik, "phone", value),
                                onBlur: () => {
                                    handleInputBlur(formik, "phone");
                                },
                                classNames: {
                                    textInput: classes.deliveryInput,
                                    feedback: classes.deliveryFeedback,
                                },
                                className: classes.deliveryInputParent,
                                error: formik?.touched?.phone && Boolean(formik?.errors?.phone),
                                feedback:
                                    formik?.touched?.phone && formik?.errors?.phone
                                        ? { status: "error", text: formik.errors.phone }
                                        : undefined,
                            },
                        },
                        {
                            type: "text",
                            properties: {
                                name: "addressline1",
                                placeholder: "House Address",
                                type: "text",
                                onChange: ({ value }: { name: string; value: string }) =>
                                    handleInputChange(formik, "addressline1", value),
                                onBlur: () => {
                                    handleInputBlur(formik, "addressline1");
                                },
                                classNames: {
                                    textInput: classes.deliveryInput,
                                    feedback: classes.deliveryFeedback,
                                },
                                className: classes.deliveryInputParent,
                                error:
                                    formik?.touched?.addressline1 &&
                                    Boolean(formik?.errors?.addressline1),
                                feedback:
                                    formik?.touched?.addressline1 && formik?.errors?.addressline1
                                        ? { status: "error", text: formik.errors.addressline1 }
                                        : undefined,
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
                                onBlur: () => {
                                    handleInputBlur(formik, "city");
                                },
                                classNames: {
                                    textInput: classes.deliveryInput,
                                    feedback: classes.deliveryFeedback,
                                },
                                className: classes.deliveryInputParent,
                                error:
                                    formik?.touched?.city &&
                                    Boolean(formik?.errors?.city),
                                feedback:
                                    formik?.touched?.city && formik?.errors?.city
                                        ? { status: "error", text: formik.errors.city }
                                        : undefined,
                            },
                        },
                        {
                            type: "text",
                            properties: {
                                name: "state",
                                placeholder: "State",
                                type: "text",
                                onChange: ({ value }: { name: string; value: string }) =>
                                    handleInputChange(formik, "state", value),
                                onBlur: () => {
                                    handleInputBlur(formik, "state");
                                },
                                classNames: {
                                    textInput: classes.deliveryInput,
                                    feedback: classes.deliveryFeedback,
                                },
                                className: classes.deliveryInputParent,
                                error:
                                    formik?.touched?.state &&
                                    Boolean(formik?.errors?.state),
                                feedback:
                                    formik?.touched?.state && formik?.errors?.state
                                        ? { status: "error", text: formik.errors.state }
                                        : undefined,
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
                                onBlur: () => {
                                    handleInputBlur(formik, "country");
                                },
                                classNames: {
                                    textInput: classes.deliveryInput,
                                    feedback: classes.deliveryFeedback,
                                },
                                className: classes.deliveryInputParent,
                                error:
                                    formik?.touched?.country &&
                                    Boolean(formik?.errors?.country),
                                feedback:
                                    formik?.touched?.country && formik?.errors?.country
                                        ? { status: "error", text: formik.errors.country }
                                        : undefined,
                            },
                        },
                        {
                            type: "text",
                            properties: {
                                name: "postcode",
                                placeholder: "Postal Code",
                                type: "text",
                                onChange: ({ value }: { name: string; value: string }) =>
                                    handleInputChange(formik, "postcode", value),
                                onBlur: () => {
                                    handleInputBlur(formik, "postcode");
                                },
                                classNames: {
                                    textInput: classes.deliveryInput,
                                    feedback: classes.deliveryFeedback,
                                },
                                className: classes.deliveryInputParent,
                                error:
                                    formik?.touched?.postcode &&
                                    Boolean(formik?.errors?.postcode),
                                feedback:
                                    formik?.touched?.postcode && formik?.errors?.postcode
                                        ? { status: "error", text: formik.errors.postcode }
                                        : undefined,
                            },
                        },
                    ],
                },
            },
        ];
    };
};
