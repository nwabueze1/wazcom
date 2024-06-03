import { FC, useMemo, useState } from "react";
import { FormikPhotoUploadType } from "../FormikPhotoUpload";
import { FileSelectorInput } from "../../../FileSelectorInput";
import { createApolloClient } from "../../../../helpers/graphQL";
import { handleUploadFile } from "../helper";
import { useFormikDocumentsUploadStyles } from "./styles";
import { FormPallette } from "../../type";
import clx from "classnames";

export const FormikDocumentUpload: FC<FormikPhotoUploadType> = ({
  name,
  label,
  formikProps,
  form_uuid,
  client,
  isRequired,
  classNames,
  ...props
}) => {
  const [loading, setLoading] = useState(false);
  const gqlClient = useMemo(
    () => client ?? createApolloClient("http://localhost:8000/graphql"),
    [client],
  );
  const isError = formikProps?.touched?.[name] && formikProps?.errors?.[name];
  const classes = useFormikDocumentsUploadStyles(props?.palette as FormPallette);

  return (
    <FileSelectorInput
      label={label?.concat(isRequired ? " *" : "")}
      name={name}
      loading={loading}
      isError={Boolean(isError)}
      helperText={formikProps?.errors?.[name] && String(formikProps?.errors?.[name])}
      uploadFn={(args) =>
        handleUploadFile({
          ...args,
          setLoading,
          client: gqlClient,
          form_uuid,
          formikProps,
        })
      }
      classNames={{
        helperText: clx(classes.helperText, classNames?.helperText),
        selectButton: clx(classes.selectFileButton, classNames?.selectButton),
        changeFileButton: clx(classes.changeFileButton, classNames?.changeFileButton),
        label: clx(classes?.label, classNames?.label),
      }}
      url={formikProps?.values?.[name]}
      {...props}
    />
  );
};
