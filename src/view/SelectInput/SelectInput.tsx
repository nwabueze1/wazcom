import { FC, useState, useCallback } from "react";
import { SelectInput } from "../../io";

import { useSelectInputStyles } from "./styles";
import { SelectInputViewProps } from "./types";

export const SelectInputView: FC<SelectInputViewProps> = () => {
  const [value, setValue] = useState(0);
  const handleValueChange = useCallback((val: any) => {
    // eslint-disable-next-line
    console.log(val);
    setValue(val);
  }, []);


  const classes = useSelectInputStyles();

  const inputData: any = [
    {
      label: "Default",
      options: [
        { label: "Label", value: "Value" },
        { label: "Label 2", value: "Value 2" },
      ],
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}>Select Input</h1>
          <div className={classes.description}>
            <p className={classes.descriptionText}>
              Select inputs enable users to to create drop-down menus so that users can select the
              value they want. The select input element is most often used in a form, to collect
              user input.
            </p>
          </div>
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.inputs}>
            {inputData.map((item: any, index: any) => (

              <SelectInput key={index} label={item.label} options={item.options} value={value} onChange={handleValueChange} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
