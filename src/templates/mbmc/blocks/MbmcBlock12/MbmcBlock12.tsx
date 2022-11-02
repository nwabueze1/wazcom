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
            <MbmcButton key={index} {...props}>
                {lIcon} {text} {rIcon}
            </MbmcButton>
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
