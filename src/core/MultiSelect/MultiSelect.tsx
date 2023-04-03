import { CheckBoxInput } from "io";
import { useMultiSelectStyles } from "./styles";
import { IoMdArrowDropdown } from "react-icons/io";
import { FC, useState } from "react";
import { defaultMultiSelect, multiSelectPositive } from "./helper";
import { MultiSelectProps } from "./types";
import clx from "classnames";

export const MultiSelect: FC<MultiSelectProps> = ({ onChange, name, label, className }) => {
  const classes = useMultiSelectStyles();
  const [selectedValue, setSelectedValue] = useState(defaultMultiSelect);

  const handleChange = ({ input_name, value }: any) => {
    let _value = defaultMultiSelect;

    if (input_name === "everyday") {
      if (selectedValue.everyday === false) {
        setSelectedValue({ ...multiSelectPositive });
        _value = { ...multiSelectPositive };
      } else {
        setSelectedValue({ ...defaultMultiSelect });
        _value = { ...defaultMultiSelect };
      }
    } else {
      if (selectedValue.everyday) {
        setSelectedValue({
          ...defaultMultiSelect,
          everyday: false,
          [input_name]: true,
        });
        _value = {
          ...defaultMultiSelect,
          everyday: false,
          [input_name]: true,
        };
      } else {
        setSelectedValue({ ...selectedValue, [input_name]: value });
        _value = { ...selectedValue, [input_name]: value };
      }
    }

    onChange && onChange({ name, value: _value });
  };

  return (
    <div className={clx(classes.root, className)}>
      <label htmlFor="multi-select" className={classes.dropdown}>
        {label ? label : "Multi-days"}
        <span />
        <IoMdArrowDropdown className={classes.iconButton} />
      </label>
      <input type="checkbox" id="multi-select" className="multi-select" />
      <div className={clx(classes.dropdownList, "dropdown__list")}>
        <div className={classes.listItem}>
          <label htmlFor="everyday" className={classes.listItem}>
            Everyday
          </label>
          <CheckBoxInput
            name="everyday"
            id="everyday"
            className={classes.dropdownCheckbox}
            value={selectedValue.everyday}
            onChange={({ name, value }) => {
              handleChange({ input_name: name, value });
            }}
          />
        </div>
        <div className={clx(classes.listItem, "dropdown__listItem")}>
          <label htmlFor="sunday" className={classes.listItem}>
            Sunday
          </label>
          <CheckBoxInput
            name="sunday"
            id="sunday"
            className={classes.dropdownCheckbox}
            value={selectedValue.sunday}
            onChange={({ name, value }) => {
              handleChange({ input_name: name, value });
            }}
          />
        </div>
        <div className={classes.listItem}>
          <label htmlFor="monday" className={classes.listItem}>
            Monday
          </label>
          <CheckBoxInput
            name="monday"
            id="monday"
            className={classes.dropdownCheckbox}
            value={selectedValue.monday}
            onChange={({ name, value }) => {
              handleChange({ input_name: name, value });
            }}
          />
        </div>
        <div className={classes.listItem}>
          <label htmlFor="tuesday" className={classes.listItem}>
            Tuesday
          </label>
          <CheckBoxInput
            name="tuesday"
            id="tuesday"
            className={classes.dropdownCheckbox}
            value={selectedValue.tuesday}
            onChange={({ name, value }) => {
              handleChange({ input_name: name, value });
            }}
          />
        </div>
        <div className={classes.listItem}>
          <label htmlFor="wednesday" className={classes.listItem}>
            Wednesday
          </label>
          <CheckBoxInput
            name="wednesday"
            id="wednesday"
            className={classes.dropdownCheckbox}
            value={selectedValue.wednesday}
            onChange={({ name, value }) => {
              handleChange({ input_name: name, value });
            }}
          />
        </div>
        <div className={classes.listItem}>
          <label htmlFor="thursday" className={classes.listItem}>
            Thursday
          </label>
          <CheckBoxInput
            name="thursday"
            id="thursday"
            className={classes.dropdownCheckbox}
            value={selectedValue.thursday}
            onChange={({ name, value }) => {
              handleChange({ input_name: name, value });
            }}
          />
        </div>
        <div className={classes.listItem}>
          <label htmlFor="friday" className={classes.listItem}>
            Friday
          </label>
          <CheckBoxInput
            name="friday"
            id="friday"
            className={classes.dropdownCheckbox}
            value={selectedValue.friday}
            onChange={({ name, value }) => {
              handleChange({ input_name: name, value });
            }}
          />
        </div>
        <div className={classes.listItem}>
          <label htmlFor="saturday" className={classes.listItem}>
            Saturday
          </label>
          <CheckBoxInput
            name="saturday"
            id="saturday"
            className={classes.dropdownCheckbox}
            value={selectedValue.saturday}
            onChange={({ name, value }) => {
              handleChange({ input_name: name, value });
            }}
          />
        </div>
      </div>
    </div>
  );
};
