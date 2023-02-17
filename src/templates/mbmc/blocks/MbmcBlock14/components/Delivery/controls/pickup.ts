import { useContext } from "react";
import { FormControls, handleInputBlur, handleInputChange } from "../../../../../components/Form";
import { useDeliveryStyles } from "../styles";
import { pickupSchema } from "../validators";
import { useUpdateGuest, TUpdateGuestVariables } from "../hooks";
import { RestaurantContext } from "../../../../../contexts";

export const usePickupConfig = () => {
    const { cart } = useContext(RestaurantContext);
    const updateGuest = useUpdateGuest();

    return (onSubmission?: () => void) => {
        return {
            initialValues: {
                email: cart?.guest?.email ?? "",
                firstname: cart?.guest?.firstname ?? "",
                lastname: cart?.guest?.lastname ?? "",
                phone: cart?.guest?.phone ?? "",
            },
            validationSchema: pickupSchema,
            onSubmit: async (variables: TUpdateGuestVariables) => {
                await updateGuest(variables, onSubmission, true);
            },
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
                                input: classes.deliveryInput,
                            },
                            className: classes.deliveryInputParent,
                            value: formik.values.email,
                            isError: formik?.touched?.email && Boolean(formik?.errors?.email),
                            helperText:
                                formik?.touched?.email && formik?.errors?.email
                                    ? formik.errors.email
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
                                input: classes.deliveryInput,
                            },
                            className: classes.deliveryInputParent,
                            value: formik.values.firstname,
                            isError:
                                formik?.touched?.firstname && Boolean(formik?.errors?.firstname),
                            helperText:
                                formik?.touched?.firstname && formik?.errors?.firstname
                                    ? formik.errors.firstname
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
                                input: classes.deliveryInput,
                            },
                            className: classes.deliveryInputParent,
                            value: formik.values.lastname,
                            isError: formik?.touched?.lastname && Boolean(formik?.errors?.lastname),
                            helperText:
                                formik?.touched?.lastname && formik?.errors?.lastname
                                    ? formik.errors.lastname
                                    : undefined,
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
                            onBlur: () => {
                                handleInputBlur(formik, "phone");
                            },
                            classNames: {
                                input: classes.deliveryInput,
                            },
                            className: classes.deliveryInputParent,
                            value: formik.values.phone,
                            isError: formik?.touched?.phone && Boolean(formik?.errors?.phone),
                            helperText:
                                formik?.touched?.phone && formik?.errors?.phone
                                    ? formik.errors.phone
                                    : undefined,
                        },
                    },
                ],
            },
        },
    ];
};
