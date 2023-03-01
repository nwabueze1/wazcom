import * as Yup from "yup";
var phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
export var pickupSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required").min(1, "First name is required"),
    lastname: Yup.string().required("Last name is required").min(1, "Last name is required"),
    email: Yup.string().required("Email is required").email("Invalid email address"),
    phone: Yup.string()
        .required("Phone number is required")
        .matches(phoneRegExp, "Invalid phone number"),
});
export var dispatchSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required").min(1, "First name is required"),
    lastname: Yup.string().required("Last name is required").min(1, "Last name is required"),
    email: Yup.string().required("Email is required").email("Invalid email address"),
    phone: Yup.string()
        .required("Phone number is required")
        .matches(phoneRegExp, "Invalid phone number"),
    addressline1: Yup.string().required("Address is required").min(1, "Address is required"),
    country: Yup.string().required("Country is required").min(1, "Country is required"),
    state: Yup.string().required("State is required").min(1, "Country is required"),
    city: Yup.string().required("City is required").min(1, "City is required"),
    postcode: Yup.string().required("Postal code is required").min(1, "Zip code is required"),
});
