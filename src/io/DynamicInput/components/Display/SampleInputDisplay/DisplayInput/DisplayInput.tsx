import {
  CheckBoxOutlineBlank,
  Close as CloseIcon,
  RadioButtonUncheckedOutlined,
} from "@mui/icons-material";
import { FC, useEffect, useState } from "react";
import { useDisplayInputStyles } from "./styles";
import { DisplayInputProps } from "./types";
import { TextInput } from "../../../../../TextInput/TextInput";
import { FiImage } from "react-icons/fi";
import clx from "classnames";
import { QuestionOption } from "../../../../types";

export const DisplayInput: FC<DisplayInputProps> = ({
  handleRemove,
  handleChange,
  handleOptionMedia,
  value: inputValue,
  index,
  onFocus,
  type,
}) => {
  const classes = useDisplayInputStyles();
  const [value, setValue] = useState<QuestionOption>(inputValue);

  useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);

  const handleInputChange = (event: { name: string; value: any }) => {
    setValue((value) => ({ ...value, text: event.value }));
    handleChange({ ...value, text: event.value });
  };

  const displayLabel = () => {
    switch (type) {
      case "dropdown":
        return <p>{index + 1}.</p>;
      case "checkboxes":
        return <CheckBoxOutlineBlank />;
      case "multiple":
        return <RadioButtonUncheckedOutlined />;
      default:
        return <p>{index + 1}.</p>;
    }
  };

  return (
    <div className={classes.root}>
      {displayLabel()}
      <TextInput
        // className={{
        //     textInput: classes.displayInput,
        //     newRoot: classes.newRoot,
        // }}
        value={value?.text}
        onChange={handleInputChange}
        id="standard-basic"
        onFocus={onFocus}
      />
      <FiImage
        className={clx(classes.displayIcon, classes.mediaIcon)}
        onClick={handleOptionMedia}
      />
      <CloseIcon className={classes.displayIcon} onClick={handleRemove} />
    </div>
  );
};
