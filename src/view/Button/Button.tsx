import { FC } from "react";
import { BsEye } from "react-icons/bs"

import { Button } from "../../core";
import { useButtonStyles } from "./styles";
import { ButtonViewProps } from "./types";

export const ButtonView: FC<ButtonViewProps> = () => {

    const classes = useButtonStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <h1 className={classes.title}>Buttons</h1>
                    <div className={classes.description}>
                        <p className={classes.descriptionText}>Buttons are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in a variety of ways. Button labels express what action will occur when the user interacts with it.</p>
                    </div>
                </div>
                <div className={classes.inputContainer}>
                    <div className={classes.inputs}>
                        <Button
                            // variant={'contained'}
                        >
                            Button
                        </Button>
                    </div>
                    <div className={classes.inputs}>
                        <Button>Button</Button>
                    </div>
                </div>
            </div>
        </div >
    );
};
