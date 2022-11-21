import {
    TextInputProps as WazTextInputProps,
  } from "../../../../../io";
  
  export type CommonControlProps = {
    label?: string;
    onChange: (e: React.ChangeEvent<any>) => void;
    errorMessage?: string;
  };
  
  export type TextInputProps = {
    type: "text";
    properties: WazTextInputProps & CommonControlProps;
  };
  
  export type FormControls = TextInputProps;
  
  export type FormControlProps = FormControls;
  