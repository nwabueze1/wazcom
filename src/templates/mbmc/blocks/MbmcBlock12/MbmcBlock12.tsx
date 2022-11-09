import { useMbmcBlock12Styles } from "./styles";
import { MbmcButton } from "../../components/MbmcButton/MbmcButton";
import { FC, useRef, useState } from "react";
import { MbmcBlock12Props } from "./types";
import { TextArea, TextInput } from "io";
import emailjs from "@emailjs/browser";
import { Loader } from "core";

export const MbmcBlock12: FC<MbmcBlock12Props> = ({
    style,
    layout,
    heading,
    description,
    ctas,
    handleSend,
}) => {
    const classes = useMbmcBlock12Styles({ flexDirection: layout ?? "row" });
    const [loading, setLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [formData, setFormData] = useState<{ [key: string]: string }>({
        name: "",
        email: "",
        phoneNo: "",
        message: "",
    });

    const displayCtas = () => {
        return (ctas ?? []).map(({ text, rIcon, lIcon, ...props }, index) => (
            <div className={classes.btnParent} key={index}>
                <MbmcButton {...props}>
                    {lIcon} {text} {rIcon}
                </MbmcButton>
            </div>
        ));
    };

    const handleChange = (data: { name: string; value: any }) => {
        const { name, value } = data;
        setHasError(false);
        setIsSubmitted(false);

        setFormData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleClick = async () => {
        const hasEmptyField = Object.values(formData).includes("");

        if (hasEmptyField) {
            return setHasError(true);
        }
        setLoading(true);
        try {
            const { name, email, phoneNo, message } = formData;
            await handleSend?.(name, email, phoneNo, message);
            setFormData({
                name: "",
                email: "",
                phoneNo: "",
                message: "",
            });
            setIsSubmitted(true);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.headerContent}>
                    <h3 className={classes.headerTitle}>{heading}</h3>
                    <div className={classes.headerParagraph}>
                        <p className={classes.headerDescription}>{description}</p>
                    </div>
                    <div className={classes.headerBtnContainer}>{displayCtas()}</div>
                </div>
                <div className={classes.demarcationContainer}>
                    <span className={classes.demarcation}>OR</span>
                </div>

                <div className={classes.formContainer}>
                    <form action="" className={classes.form}>
                        <TextInput
                            placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={classes.formInput}
                            classNames={{ textInput: classes.formTextInput }}
                        />
                        <TextInput
                            placeholder="Email address"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={classes.formInput}
                            classNames={{ textInput: classes.formTextInput }}
                        />
                        <TextInput
                            placeholder="Phone number"
                            type="phone"
                            name="phoneNo"
                            value={formData.phoneNo}
                            onChange={handleChange}
                            className={classes.formInput}
                            classNames={{ textInput: classes.formTextInput }}
                        />
                        <TextArea
                            placeholder="Send a message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={classes.formInput}
                            classNames={{ textArea: classes.formTextArea }}
                            minRows={12}
                        />
                        <MbmcButton
                            onClick={handleClick}
                            className={classes.formButton}
                            size="sm"
                            type="SECONDARY"
                        >
                            Send
                        </MbmcButton>
                        {hasError && (
                            <p className={classes.error}>
                                *Error Occurred, please fill all fields with correct data and try
                                again
                            </p>
                        )}
                        {isSubmitted && (
                            <p className={classes.success}>Message sent successfully</p>
                        )}
                        {loading && <Loader />}
                    </form>
                </div>
            </div>
        </div>
    );
};
