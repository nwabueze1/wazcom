import { FC, useEffect, useState } from "react";
import { InputDisplayProps } from "./types";
import { Input } from "./Input/Input";

export const InputDisplay: FC<InputDisplayProps> = ({ setAnswers, question }) => {
  const [jsx, setJSX] = useState<JSX.Element[] | null>();

  useEffect(() => {
    setJSX(
      question.options.map((value, idx) => (
        <Input
          index={idx}
          key={idx}
          value={value.text}
          handleSelect={() => handleSelect(idx)}
          type={question.type}
          checked={question.answers.some((answer) => answer === idx)}
        />
      )),
    );
  }, [question]);

  const handleSelect = (idx: number) => {
    if (question.answers.some((answer) => answer === idx)) {
      setAnswers([...question.answers.filter((answer) => answer !== idx)]);
    } else {
      setAnswers([...question.answers, idx]);
    }
  };

  return <>{jsx}</>;
};
