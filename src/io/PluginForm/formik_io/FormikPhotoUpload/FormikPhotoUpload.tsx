import { FC, useMemo, useState } from "react";
import { FormikPhotoUploadType } from "./type";
import { ImageSelectorInput } from "../../../ImageSelectorInput";
import { createApolloClient } from "../../../../helpers/graphQL";
import { useCustomStyles } from "./useCustomStyles";
import { FormPallette } from "../../type";
import { handleUploadFile } from "../helper";
import clx from "classnames";

export const FormikPhotoUpload: FC<FormikPhotoUploadType> = ({
  name,
  label,
  formikProps,
  isRequired,
  client,
  form_uuid,
  classNames,
  ...props
}) => {
  const [loading, setLoading] = useState(false);
  const gqlClient = useMemo(
    () => client ?? createApolloClient("http://localhost:8000/graphql"),
    [client],
  );
  const isError = formikProps?.touched?.[name] && formikProps?.errors?.[name];
  const classes = useCustomStyles(props?.palette as FormPallette);

  return (
    <ImageSelectorInput
      label={label?.concat(isRequired ? " *" : "")}
      name={name}
      loading={loading}
      uploadFn={(args) =>
        handleUploadFile({ ...args, client: gqlClient, form_uuid, setLoading, formikProps })
      }
      isError={Boolean(isError)}
      helperText={formikProps?.errors?.[name] && String(formikProps?.errors?.[name])}
      classNames={{
        container: clx(classes.container, classNames?.container),
        selectButton: clx(classes.selectFileButton, classNames?.selectButton),
        helperText: clx(classes.helperText, classNames?.helperText),
        label: clx(classes.label, classNames?.label),
        changeFileButton: clx(classes.changeFileButton, classNames?.changeFileButton),
        text: clx(classes.label, classNames?.text),
      }}
      url={formikProps?.values?.[name]}
      {...props}
    />
  );
};
