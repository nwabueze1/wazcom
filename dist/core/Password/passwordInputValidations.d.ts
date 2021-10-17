export interface ValidationProps {
    status: boolean;
    errorText?: string;
}
export interface ValidationArgs {
    name?: string;
    value: string;
    password?: string;
}
export declare const passwordIsValid: ({ value }: ValidationArgs) => ValidationProps;
export declare const passwordIsRepeated: () => ValidationProps;
export declare const isRequired: ({ name, value, }: ValidationArgs) => ValidationProps;
