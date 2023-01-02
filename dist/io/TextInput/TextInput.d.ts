import { FC } from "react";
import { TextFieldProps, TextAreaProps } from "./types";
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
export declare const TextInput: FC<TextFieldProps>;
export declare const TextArea: FC<Omit<TextAreaProps, "type">>;
export declare const EmailInput: FC<Omit<TextFieldProps, "type">>;
