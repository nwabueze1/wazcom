import { OpinionScale } from "../../../OpinionScale";
import { FC } from "react";
import { FormikOpinionInputPropsType } from "./type";

export const FormikOpinionScale: FC<FormikOpinionInputPropsType> = ({
  formikProps,
  isRequired,
  name,
  ...props
}) => {
  const error = formikProps?.touched?.[name] && formikProps?.["errors"]?.[name];

  const handleChange = (e: { name: string; value: number }) => {
    formikProps?.setFieldValue(name, Number(e.value));
  };

  return (
    <OpinionScale
      name={name}
      {...props}
      onChange={handleChange}
      value={formikProps?.values?.[name]}
      label={`${name} ${isRequired && "*"}`}
      isError={error as boolean}
      helperText={error as string}
    />
  );
};
