import React, { FC } from "react";
import { Select } from "@material-ui/core";
import { useStyles, StyleProps } from "./Styles";

interface SelectorProps {
  items: Array<string>;
  onChange?: (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,
  ) => void;
  name?: string;
  label?: string;
  error?: boolean;
  styles: StyleProps;
}

const Selector: FC<SelectorProps> = ({
  items,
  onChange,
  name,
  label,
  styles,
}) => {
  const classes = useStyles(styles);
  return (
    <div>
      <Select
        className={classes.selector}
        native
        classes={{
          root: classes.label,
          selectMenu: classes.select,
        }}
        required
        onChange={onChange}
        name={name}
        label={label}
      >
        {items.map((field: string, index: number) => (
          <option
            key={index}
            value={field}
            selected={index === 0 ? true : false}
          >
            {field}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default Selector;
