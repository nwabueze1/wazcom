import { OpinionScale } from "../../../OpinionScale";
import { FC } from "react";
import { FormikOpinionInputPropsType } from "./type";
import { usePalletteStyles } from "./usePalletteStyles";
import { FormPallette } from "../../type";
import clx from "classnames";

export const FormikOpinionScale: FC<FormikOpinionInputPropsType> = ({
  formikProps,
  isRequired,
  name,
  ...props
}) => {
  const error = formikProps?.touched?.[name] && formikProps?.["errors"]?.[name];
  const pallettStyles = usePalletteStyles(props?.palette as FormPallette);
  const handleChange = (e: { name: string; value: number }) => {
    formikProps?.setFieldValue(name, Number(e.value));
  };

  return (
    <OpinionScale
      name={name}
      {...props}
      onChange={handleChange}
      value={formikProps?.values?.[name]}
      label={`${props?.placeholder} ${isRequired && "*"}`}
      isError={error as boolean}
      helperText={error as string}
      classNames={{
        ...props?.classNames,
        containedBox: clx(pallettStyles?.container, props?.classNames?.containedBox),
        outlinedBox: clx(pallettStyles?.container, props?.classNames?.outlinedBox),
        boxText: clx(pallettStyles?.text, props?.classNames?.boxText),
        label: clx(pallettStyles?.label, props?.classNames?.label),
      }}
    />
  );
};
