import { FC } from "react";
import { CustomRadioInputProps } from "./types";
import { useCustomRadioInputStyles } from "./styles";
import { RadioButtonInput } from "../RadioButtonInput";
import clx from "classnames";

export const CustomRadioInput: FC<CustomRadioInputProps> = ({
  name,
  label,
  value,
  onChange,
  className,
}) => {
  const classes = useCustomRadioInputStyles();

  const handleChange = ({ value }: { name: string; value: boolean }) => {
    onChange?.({ name: name ?? "", value });
  };

  const handleComponentClick = () => {
    onChange?.({ name: name ?? "", value: true });
  };

  return (
    <div
      className={clx(classes.root, className, value && classes.inputActive)}
      onClick={handleComponentClick}
    >
      <RadioButtonInput
        className={classes.inputRadio}
        value={value}
        name={name}
        onChange={handleChange}
      />
      <p className={classes.inputLabel}>{label}</p>
    </div>
  );
};
