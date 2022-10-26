import { useMbmcBlock12Styles } from "./styles";
import { MbmcButton } from "../../components/MbmcButton/MbmcButton";
import { FC } from "react";
import { MbmcBlock12Props } from "./types";
import { TextArea, TextInput } from "io";

export const MbmcBlock12: FC<MbmcBlock12Props> = ({ style, layout }) => {
    const classes = useMbmcBlock12Styles({ flexDirection: layout ?? "row" });

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.headerContent}>
                    <h3 className={classes.headerTitle}>We Are Available To Get Your Order</h3>
                    <div className={classes.headerParagraph}>
                        <p className={classes.headerDescription}>
                            If you’d like to talk please call or email us, you can also use the form
                            to get in touch. We’ll get back in touch within 24hrs
                        </p>
                    </div>
                    <div className={classes.headerBtnContainer}>
                        <MbmcButton className={classes.button}>Call us</MbmcButton>
                        <MbmcButton className={classes.button} bgColor="#F25430">
                            Email us
                        </MbmcButton>
                    </div>
                </div>
                    <div className={classes.demarcationContainer}>
                        <span className={classes.demarcation}>OR</span>
                    </div>

                <div className={classes.formContainer}>
                    <form action="" className={classes.form}>
                        <TextInput placeholder="Name" classNames={{ textInput: classes.input }} />
                        <TextInput
                            placeholder="Email address"
                            classNames={{ textInput: classes.input }}
                        />
                        <TextInput
                            placeholder="Phone number"
                            classNames={{ textInput: classes.input }}
                        />
                        <TextArea
                            placeholder="Send a message"
                            classNames={{ textArea: classes.textArea }}
                            minRows={12}
                        />
                        <MbmcButton className={classes.button}>Send</MbmcButton>
                    </form>
                </div>
            </div>
        </div>
    );
};
