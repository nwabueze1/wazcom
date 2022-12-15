import { useContext } from "react";
import { FormControls, handleInputBlur, handleInputChange } from "../../../../../components/Form";
import { useDeliveryStyles } from "../styles";
import { dispatchSchema } from "../validators";
import {
    useUpdateGuest,
    useCreateAddress,
    TUpdateGuestVariables,
    TCreateAddressVariables,
} from "../hooks";
import { RestaurantContext } from "../../../../../contexts";
import { usePickupConfig, usePickupControls } from "./pickup";

export const useDispatchConfig = () => {
    const { cart } = useContext(RestaurantContext);
    const getPickupConfig = usePickupConfig();
    const updateGuest = useUpdateGuest();
    const createAddress = useCreateAddress();

    return (onSubmission?: () => void) => {
        const pickupConfig = getPickupConfig();

        return {
            initialValues: {
                ...pickupConfig.initialValues,
                addressline1: cart?.guest?.address?.addressline1 ?? "",
                city: cart?.guest?.address?.city ?? "",
                state: cart?.guest?.address?.state ?? "",
                country: cart?.guest?.address?.country ?? "",
                postcode: cart?.guest?.address?.postcode ?? "",
            },
            validationSchema: dispatchSchema,
            onSubmit: async (variables: TUpdateGuestVariables & TCreateAddressVariables) => {
                const { email, firstname, lastname, phone, ...rest } = variables;
                const guest = await updateGuest({ email, firstname, lastname, phone });

                guest && (await createAddress({ ...rest }, guest, onSubmission));
            },
        };
    };
};

export const useDispatchControls = () => {
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
                                value: formik.values.addressline1,
                                error:
                                    formik?.touched?.guest?.addressline1 &&
                                    Boolean(formik?.errors?.guest?.addressline1),
                                feedback:
                                    formik?.touched?.guest?.addressline1 && formik?.errors?.guest?.addressline1
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
                                value: formik.values.city,
                                error: formik?.touched?.city && Boolean(formik?.errors?.city),
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
                                value: formik.values.state,
                                error: formik?.touched?.state && Boolean(formik?.errors?.state),
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
                                value: formik.values.error,
                                error: formik?.touched?.country && Boolean(formik?.errors?.country),
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
                                value: formik.values.postcode,
                                error:
                                    formik?.touched?.postcode && Boolean(formik?.errors?.postcode),
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
