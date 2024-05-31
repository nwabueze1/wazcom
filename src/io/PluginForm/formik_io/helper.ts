import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { FormikProps } from "formik";
import { Dispatch, SetStateAction } from "react";
import { UPLOAD_FILE } from "./gql";

export const handleUploadFile = async (args: {
  name: string;
  file?: File | null;
  setLoading?: Dispatch<SetStateAction<boolean>>;
  client: ApolloClient<NormalizedCacheObject>;
  formikProps?: FormikProps<Record<string, any>>;
  form_uuid?: string;
}): Promise<boolean> => {
  if (!args?.form_uuid) return false;
  args?.setLoading?.(true);

  try {
    const { data, errors } = await args?.client?.mutate({
      mutation: UPLOAD_FILE,
      variables: {
        file: args.file,
        form_uuid: args?.form_uuid,
      },
    });

    if (errors) return false;

    if (data) {
      args?.formikProps?.setFieldValue(args?.name, data.uploadFile.url);
      return true;
    }
  } catch (error) {
    return false;
  } finally {
    args?.setLoading?.(false);
  }
  return false;
};
