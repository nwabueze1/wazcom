import { RatingInput } from "../../../RatingInput";
import { FC } from "react";
import { FormikRatingInputPropsType } from "./type";
import { FormPallette } from "../../type";
import clx from "classnames";
import { usePallette } from "./usePallette";
import { usePluginInputGroup } from "../usePluginInputGroupStyles";

export const FormikRatingInput: FC<FormikRatingInputPropsType> = ({
  isRequired,
  name,
  formikProps,
  variant,
  label,
  ...props
}) => {
  const isInvalid = formikProps?.touched?.[name] && formikProps?.errors?.[name];
  const palletteStyles = usePallette(props?.palette as FormPallette);
  const classes = usePluginInputGroup();

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
      label={`${label} ${isRequired ? "*" : ""}`}
      classNames={{
        ...props?.classNames,
        label: clx(classes.ratingLabel, palletteStyles?.label, props?.classNames?.label),
        rating: clx(palletteStyles?.rating, props?.classNames?.rating),
      }}
    />
  );
};
