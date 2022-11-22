import React from "react";
import { FormProps } from "./types";
import { FormControl } from "./FormControl";
import { MbmcButton } from "../MbmcButton";
import { useFormStyles } from "./styles";

export const Form: React.FC<FormProps> = ({
    className,
    controls,
    onSubmit,
    submitButtonText = "Save",
}) => {
    const classes = useFormStyles();
    const displayControls = () =>
        controls.map((control, index) => <FormControl key={index} {...control} />);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit();
    };

    return (
        <form onSubmit={handleSubmit} className={className}>
            {displayControls()}
            <MbmcButton variant="SECONDARY" size="sm" type="submit" className={classes.formButton}>
                {submitButtonText}
            </MbmcButton>
        </form>
    );
};
