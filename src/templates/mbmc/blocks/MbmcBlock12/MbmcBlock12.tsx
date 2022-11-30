import { useMbmcBlock12Styles } from "./styles";
import { MbmcButton } from "../../components/MbmcButton/MbmcButton";
import { FC, useState } from "react";
import { HandleSend, MbmcBlock12Props } from "./types";
import { TextArea, TextInput } from "../../../../io";
import { notify } from "../../utilities";

export const MbmcBlock12: FC<MbmcBlock12Props> = ({
    layout,
    heading,
    description,
    ctas,
    client,
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
                <MbmcButton {...props} className={classes.button}>
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

    const handleClick: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const hasEmptyField = Object.values(formData).includes("");

        if (hasEmptyField) {
            return setHasError(true);
        }
        setLoading(true);
        try {
            const { name, email, phoneNo, message } = formData;
            await handleSend({ name, email, phoneNo, message }, client);
            setFormData({
                name: "",
                email: "",
                phoneNo: "",
                message: "",
            });
            notify("success", "Your message has been sent successfully, thanks for reaching out.");
        } catch (error) {
            notify("error", "Your email could not be sent, try again later. Thanks");
        }
        setLoading(false);
    };

    const handleSend: HandleSend = async (data, client) => {
        if (!client) throw new Error();
        const { email, message, name, phoneNo } = data;

        switch (client.type) {
            case "emailjs": {
                const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...client.credentials,
                        template_params: {
                            name,
                            to_name: "Mr Baker and Mrs Cook",
                            message,
                            reply_to: email,
                            phone_number: phoneNo,
                        },
                    }),
                });

                if (response.status !== 200) throw new Error();
                break;
            }
            default:
                break;
        }
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
                    <form className={classes.form} onSubmit={handleClick}>
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
                            className={classes.formButton}
                            size="sm"
                            variant="SECONDARY"
                            type="submit"
                            loading={loading}
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
                    </form>
                </div>
            </div>
        </div>
    );
};
