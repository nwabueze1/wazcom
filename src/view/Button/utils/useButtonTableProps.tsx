import { Button, CheckBoxInput, TextInput } from "../../../build";
import { IComponentProps } from "core/ComponentProps/types";
import { useContext } from "react";
import ButtonPropsContext from "./ButtonComponentContext";

const useButtonPropsData = () => {
  const { isLoading, onChange, height, leftIcon, rightIcon } = useContext(ButtonPropsContext);

  const data: IComponentProps[] = [
    {
      name: "isDisabled",
      description: "This prop is used to disable or enable the button",
      default: "false",
      controls: <CheckBoxInput onChange={onChange} name="isDisabled" />,
    },
    {
      name: "isLoading",
      description: "This prop is used to control the loading state of the button.",
      default: "false",
      controls: <CheckBoxInput value={isLoading} onChange={onChange} name="isLoading" />,
    },
    {
      name: "children",
      description: "The content of the component.",
      default: "undefined",
      controls: <TextInput type={"text"} height={10}></TextInput>,
    },
    {
      name: "height",
      description: "This is useed to set the height of the button",
      default: "auto",
      controls: (
        <TextInput type={"number"} value={height} onChange={onChange} height={10} name="height" />
      ),
    },
    {
      name: "width",
      description: "This is used to set the width of the button",
      default: "auto",
      controls: <TextInput type={"text"} value={"auto"} height={10} disabled />,
    },
    {
      name: "leftIcon",
      description: "This prop is used to insert an Element before the children",
      default: "undefined",
      controls: <CheckBoxInput value={leftIcon} onChange={onChange} name="leftIcon" />,
    },
    {
      name: "rightIcon",
      description: "This prop is used to insert an Elemet after the children",
      default: "undefined",
      controls: <CheckBoxInput value={rightIcon} onChange={onChange} name="rightIcon" />,
    },
    {
      name: "variant",
      description: "This prop is used to change the variations of the button. ",
      default: "contained",
    },
    {
      name: "onClick",
      description: "This is the function that get's triggered when the button is clicked.",
      default: "()=>void",
      controls: (
        <Button size={"sm"} onClick={() => alert("button clicked")} variant="outlined">
          click me
        </Button>
      ),
    },
  ];

  return {
    data,
  };
};

export default useButtonPropsData;
