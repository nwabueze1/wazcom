import { useMbmcBlock12Styles } from "./styles";
import { MbmcButton } from "../../components/MbmcButton/MbmcButton";
import { FC } from "react";
import { MbmcBlock12Props } from "./types";
import { TextArea, TextInput } from "io";

export const MbmcBlock12: FC<MbmcBlock12Props> = ({
    style,
    layout,
    heading,
    description,
    ctas,
}) => {
    const classes = useMbmcBlock12Styles({ flexDirection: layout ?? "row" });

    const displayCtas = () => {
        return (ctas ?? []).map(({ text, rIcon, lIcon, ...props }, index) => (
            <div className={classes.btnParent} key={index}>
                <MbmcButton {...props}>
                    {lIcon} {text} {rIcon}
                </MbmcButton>
            </div>
        ));
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
                            className={classes.formInput}
                            classNames={{ textInput: classes.formTextInput }}
                        />
                        <TextInput
                            placeholder="Email address"
                            type="email"
                            className={classes.formInput}
                            classNames={{ textInput: classes.formTextInput }}
                        />
                        <TextInput
                            placeholder="Phone number"
                            type="phone"
                            className={classes.formInput}
                            classNames={{ textInput: classes.formTextInput }}
                        />
                        <TextArea
                            placeholder="Send a message"
                            className={classes.formInput}
                            classNames={{ textArea: classes.formTextArea }}
                            minRows={12}
                        />
                        <MbmcButton className={classes.formButton} size="sm" type="SECONDARY">
                            Send
                        </MbmcButton>
                    </form>
                </div>
            </div>
        </div>
    );
};
