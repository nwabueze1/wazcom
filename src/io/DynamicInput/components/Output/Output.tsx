import { FC } from "react";
import { BsClipboardCheck } from "react-icons/bs";
import { useOutputStyles } from "./styles";
import { TextInput } from "../../../TextInput/TextInput";
import { Button } from "@mui/material";
import { OutputProps } from "./types";
import { InputDisplay } from "./InputDisplay/InputDisplay";

export const Output: FC<OutputProps> = ({
  question,
  setAnswers,
  setPoint,
  resetDisplay,
  active,
}) => {
  const classes = useOutputStyles();

  const displayInput = () => {
    switch (question.type) {
      case "short_answer":
        return <TextInput name="short_answer" placeholder={question.type} />;
      case "paragraph":
        return <TextInput name="paragraph" placeholder={question.type} />;
      case "dropdown":
        return <InputDisplay question={question} setAnswers={setAnswers} />;
      case "checkboxes":
        return <InputDisplay question={question} setAnswers={setAnswers} />;
      case "multiple":
        return <InputDisplay question={question} setAnswers={setAnswers} />;
      default:
        return <TextInput name={question.type} />;
    }
  };

  return (
    <div className={classes.root}>
      {active && (
        <div className={classes.title}>
          <BsClipboardCheck className={classes.outputIcon} />
          Choose Correct Answers
        </div>
      )}
      <div className={classes.outputOverAllContainer}>
        <div className={classes.outputQuestionContainer}>
          <p>
            <span dangerouslySetInnerHTML={{ __html: question.text as string }}></span>
            {question.text !== "" && question.required && (
              <span className={classes.outputRequired}>*</span>
            )}
          </p>
          {active && (
            <div className={classes.outputPoints}>
              <TextInput
                type={"number"}
                classNames={{
                  textInput: classes.outputTextInput,
                  newRoot: classes.outputNumberInput,
                }}
                value={question.point}
                id="standard-basic"
                onChange={(event) => setPoint(parseFloat(event.value))}
              />
              <p>points</p>
            </div>
          )}
        </div>
        {question?.supportImage && (
          <img src={question?.supportImage.value.url} className={classes.outputSupportImage} />
        )}
        <div className={classes.outputAnswer}>{displayInput()}</div>
        {active && (
          <div className={classes.outputDone}>
            <Button variant="outlined" onClick={resetDisplay}>
              Done
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
