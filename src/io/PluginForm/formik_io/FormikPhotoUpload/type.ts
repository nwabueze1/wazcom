import { FormikProps } from "formik";
import { ImageSelectorInputPropsType } from "../../../ImageSelectorInput";
import { FormPallette } from "build";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

export type FormikPhotoUploadType = ImageSelectorInputPropsType & {
  isRequired?: boolean;
  formikProps?: FormikProps<Record<string, any>>;
  palette?: FormPallette;
  client?: ApolloClient<NormalizedCacheObject>;
  form_uuid?: string;
};
