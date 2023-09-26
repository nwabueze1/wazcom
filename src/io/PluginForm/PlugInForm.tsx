import { Form, Formik, FormikHelpers } from "formik";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

import { PluginFormRef } from "./";
import { buildValidationSchema } from "./BuildValidationSchema";
import { getInitialFormValues } from "./GetInitialFormValues";
import { createResponse } from "./gql/actions/createResponse";
import { QuestionsInput } from "./QuestionInput";
import { PluginFormPropsType, QuestionType } from "./type";
import { usePluginFormStyles } from "./usePluginFormStyles";
import { toast } from "react-toastify";

export const PlugInForm = forwardRef<PluginFormRef, PluginFormPropsType>((props, ref) => {
  const {
    form: { questions },
    form_uuid,
    setLoading,
    className,
    submitButton,
    classNames,
    onNotify,
  } = props;
  const initialFormState = getInitialFormValues((questions ?? []) as QuestionType[]);
  const validationSchema = buildValidationSchema((questions ?? []) as QuestionType[]);
  const classes = usePluginFormStyles();
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const [{ message, type }, setMessage] = useState<{
    message?: string;
    type?: "success" | "error";
  }>({});

  useImperativeHandle(ref, () => {
    return {
      submit: () => submitButtonRef.current?.click(),
    };
  });

  const handleSubmit = async (
    values: Record<string, any>,
    formikHelpers: FormikHelpers<Record<string, any>>,
  ) => {
    if (!form_uuid) {
      const errorMessage = "You need to supply a valid form_uuid to submit this form";
      setMessage?.({ type: "error", message: errorMessage });
      resetErrorMessage();
      onNotify?.("error", errorMessage);
      return toast.error(errorMessage);
    }

    const errorMessage = "Failed to create form";
    setLoading?.(true);
    try {
      const { errors, data } = await createResponse(form_uuid, values);
      if (errors) {
        setMessage?.({
          type: "error",
          message: errorMessage,
        });
        onNotify?.("error", errorMessage);
        return toast.error(errorMessage);
      }

      const submission_text = data?.createResponse?.submission_text;
      const successMessage = !submission_text ? "Form submitted successfully" : submission_text;
      setMessage?.({ type: "success", message: successMessage });
      onNotify?.("success", successMessage);
      toast.success(successMessage);
      formikHelpers.resetForm();
    } catch (ex) {
      onNotify?.("error", errorMessage);
      toast.error(errorMessage);
      setMessage?.({ type: "error", message: errorMessage });
    } finally {
      setLoading?.(false);
      resetErrorMessage();
    }
    return;
  };

  const resetErrorMessage = () => {
    setTimeout(() => {
      setMessage?.({ type: "success", message: "" });
    }, 5000);
  };

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialFormState}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form style={{ display: "grid" }}>
            <div className={className}>
              {((questions ?? []) as QuestionType[]).map(
                ({ question, fields, type, is_required }, index) => (
                  <QuestionsInput
                    name={question}
                    fields={fields}
                    type={type}
                    is_required={is_required}
                    key={index}
                    classNames={classNames}
                    formikProps={props}
                  />
                ),
              )}
            </div>
            {!submitButton ? (
              <button
                className={classes.submitButton}
                type={"submit"}
                ref={submitButtonRef}
              ></button>
            ) : (
              submitButton
            )}
          </Form>
        )}
      </Formik>
      {type === "success" && message && <p className={classes.success}>{message}</p>}
      {type === "error" && message && <p className={classes.error}>{message}</p>}
    </>
  );
});

PlugInForm.displayName = "PluginForm";
