import { RatingInput } from "../../../RatingInput";
import { FC } from "react";
import { FormikRatingInputPropsType } from "./type";

export const FormikRatingInput: FC<FormikRatingInputPropsType> = ({
  isRequired,
  name,
  formikProps,
  variant,
  label,
  ...props
}) => {
  const isInvalid = formikProps?.touched?.[name] && formikProps?.errors?.[name];

  const handleChange = (e: { name: string; value: number }) => {
    formikProps?.setFieldValue(name, Number(e.value));
  };

  return (
    <RatingInput
      {...props}
      variant={variant}
      name={name}
      value={formikProps?.values?.[name]}
      onChange={handleChange}
      isError={isInvalid as boolean}
      helperText={isInvalid as string}
      label={`${label} ${isRequired && "*"}`}
    />
  );
};
