import { FC } from "react";
import { TextAreaProps, TextFieldProps } from "./types";
/**
 * Text Input IO Component
 *
 * - Should follow the following constraints;
 * -- labels are optional (should show or hide if its provided but can be manually turned off. Manual turn off/on takes precedence over if provided or not).
 * -- startIcons and endIcons
 * -- should expose the following events: onFocus, onEnter
 * -- helperText
 * -- info
 */
/** TODO --  fix components success and error state */
export declare const TextInput: FC<TextFieldProps>;
export declare const TextArea: FC<Omit<TextAreaProps, "type">>;
export declare const EmailInput: FC<Omit<TextFieldProps, "type">>;
export declare const URLInput: FC<Omit<TextFieldProps, "type">>;
export declare const NumberInput: FC<Omit<TextFieldProps, "type">>;
