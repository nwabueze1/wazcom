import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { FormikProps } from "formik";
import { Dispatch, SetStateAction } from "react";
export declare const handleUploadFile: (args: {
    name: string;
    file?: File | null;
    setLoading?: Dispatch<SetStateAction<boolean>>;
    client: ApolloClient<NormalizedCacheObject>;
    formikProps?: FormikProps<Record<string, any>>;
    form_uuid?: string;
}) => Promise<boolean>;
