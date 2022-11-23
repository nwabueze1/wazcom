import { FormControls } from "./FormControl/types";
export declare type FormProps = {
    className?: string;
    controls: FormControls[];
    onSubmit: () => void;
    submitButtonText?: string;
};
