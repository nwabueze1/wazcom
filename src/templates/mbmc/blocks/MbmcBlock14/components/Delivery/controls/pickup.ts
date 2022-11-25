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
                                textInput: classes.deliveryInput,
                                feedback: classes.deliveryFeedback,
                            },
                            className: classes.deliveryInputParent,
                            value: formik.values.email,
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
                            value: formik.values.firstname,
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
                            value: formik.values.lastname,
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
