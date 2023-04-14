import { UsePasswordValidationProps } from "../types";
type StateProps = null | boolean;
export declare const usePasswordValidation: ({ config, value }: UsePasswordValidationProps) => {
    validLength: StateProps;
    hasNumber: StateProps;
    hasUpperCase: StateProps;
    hasSpecialChar: StateProps;
};
export {};
