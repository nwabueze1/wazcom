import clx from 'classnames';
import { FC } from 'react';

import { capitalizeFirstChar } from '../QuestionInput/CapitalizeFirstCharacter';
import { CheckBoxInputPropsType } from './type';
import { useCheckBoxInputStyles } from './useCheckBoxInputStyles';

export const CheckBoxInput: FC<CheckBoxInputPropsType> = ({
  onChange,
  name,
  value,
  options,
  isError,
  multiple,
  label,
  required,
  classNames,
  onFocus,
  onBlur,
  errorMessage,
}) => {
  const classes = useCheckBoxInputStyles();
  const isChecked = (searchValue: string) =>
    multiple && Array.isArray(value)
      ? value.includes(searchValue)
      : value === searchValue;

  const handleChange = ({ changeValue }: { changeValue: string }) => {
    if (multiple) {
      if (isChecked(changeValue)) {
        const filtered = (value as string[]).filter(
          (content) => content !== changeValue
        );
        onChange?.({ name, value: filtered });
      } else {
        const initialValue = value && Array.isArray(value) ? value : [];
        onChange?.({ name, value: [...initialValue, changeValue] });
      }
    } else {
      onChange?.({ name, value: changeValue });
    }
  };

  return (
    <div>
      <fieldset
        className={clx(
          classes.multiChoiceFieldSet,
          classNames?.fieldset,
          isError && 'error'
        )}
      >
        <legend
          className={clx(classes.label, classNames?.legend, isError && 'error')}
        >
          {capitalizeFirstChar(label)}{' '}
          {required && <sup className={classes.requiredStar}>*</sup>}
        </legend>
        {options?.map((option, index) => (
          <div
            key={index}
            className={clx(classes.radioGroup, classNames?.checkboxGroup)}
          >
            <input
              onFocus={onFocus}
              onBlur={onBlur}
              type="checkbox"
              id={option?.label}
              name={name}
              value={option?.value}
              defaultChecked={isChecked(option?.value)}
              className={clx(classes.radioButton, classNames?.checkboxInput)}
              onClick={() => handleChange({ changeValue: option.value })}
            />
            <label
              htmlFor={option?.label}
              className={clx(
                classes.radioGroupLabel,
                classNames?.checkboxLabel
              )}
            >
              {option?.label}
            </label>
          </div>
        ))}
      </fieldset>
      {isError && <p className={classes.errorMessage}>{errorMessage}</p>}
    </div>
  );
};
