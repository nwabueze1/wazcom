import { FC } from "react";
import { GroupedInputProps } from "./types";
import { useGroupedInputStyles } from "./styles";
import { FormControl } from "../FormControl";

export const GroupedInput: FC<GroupedInputProps> = ({ name, controls }) => {
  const classes = useGroupedInputStyles();

  const displayControls = () =>
    controls.map((control, index) => <FormControl key={index} {...control} />);

  return (
    <div className={classes.root}>
      <p className={classes.groupedInputName}>{name}</p>
      {displayControls()}
    </div>
  );
};
