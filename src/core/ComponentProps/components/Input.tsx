import { FC } from "react";
import { useComponentPropsComponentStyles } from "./styles";
import { ComponentInputProp as ComponentInputProps } from "./types";
import { TextInput } from "../../../io";

export const ComponentInput: FC<ComponentInputProps> = ({ value }) => {
  const classes = useComponentPropsComponentStyles();

  return <TextInput value={value} className={classes.textFieldRoot}></TextInput>;
};
