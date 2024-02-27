import { Form, Formik, FormikHelpers } from "formik";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { PluginFormRef } from "./";
import { buildValidationSchema } from "./BuildValidationSchema";
import { getInitialFormValues } from "./getInitialFormValues";
import { createResponse } from "./gql/actions/createResponse";
import { QuestionsInput } from "./QuestionInput";
import { PluginFormPropsType, QuestionType } from "./type";
import { usePluginFormStyles } from "./usePluginFormStyles";

export const PlugInForm = forwardRef<PluginFormRef, PluginFormPropsType>((props, ref) => {
  const {
    form: { questions },
    form_uuid,
    setLoading,
    className,
    submitButton,
    classNames,
    style = { display: "grid" },
    onNotify,
    onFormSubmitted,
    apolloClient,
    palette,
  } = props;
  const initialFormState = getInitialFormValues((questions ?? []) as QuestionType[]);
  const validationSchema = buildValidationSchema((questions ?? []) as QuestionType[]);
  const classes = usePluginFormStyles();
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => {
    return {
      submit: () => submitButtonRef.current?.click(),
    };
  });

  const handleSubmit = async (
    values: Record<string, any>,
    formikHelpers: FormikHelpers<Record<string, any>>,
  ) => {
    let errorMessage = "You need to select a valid form";
    if (!form_uuid) {
      return onNotify?.("error", errorMessage);
    }

    setLoading?.(true);
    try {
      const { errors, data } = await createResponse(apolloClient, form_uuid, values);

      if (errors) {
        errorMessage = "Failed to create form";

        return onNotify?.("error", errorMessage);
      }

      const submission_text: string = data?.createResponse?.submission_text;

      const successMessage =
        submission_text?.length > 0 ? submission_text : "Form has been submitted successfully.";

      onNotify?.("success", successMessage);
      formikHelpers.resetForm();
      onFormSubmitted?.(data?.createResponse?.data);
    } catch (ex) {
      onNotify?.("error", "An error occurred while creating the form.");
      //TODO: LOG THIS SENTRY
    } finally {
      setLoading?.(false);
    }
  };

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialFormState}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form style={style}>
            <div className={className}>
              {((questions ?? []) as QuestionType[]).map(
                ({ question, fields, type, is_required, uuid }, index) => (
                  <QuestionsInput
                    name={uuid}
                    fields={fields}
                    type={type}
                    is_required={is_required}
                    key={index}
                    classNames={classNames}
                    formikProps={props}
                    label={question}
                    palette={palette}
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
    </>
  );
});

PlugInForm.displayName = "PluginForm";
