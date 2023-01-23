import { FormControls } from "./FormControl/types";
export type FormProps = {
    className?: string;
    controls: FormControls[];
    onSubmit: () => void;
    submitButtonText?: string;
    networkOperation?: string;
};
