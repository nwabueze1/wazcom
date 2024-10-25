import { FC, useEffect, useState } from "react";
import { SelectInput, TextInput } from "../../../../../../io";
import { useFilterOptionStyles } from "./useStyles";
import { FilterOptionProps } from "./type";
import { PiTrashLight } from "react-icons/pi";
import clx from "classnames";

export const FilterOption: FC<FilterOptionProps> = ({
  columns,
  value,
  onChange,
  onDelete,
  isSubmitting = false,
}) => {
  const classes = useFilterOptionStyles();
  const operators = columns?.find((column) => column.key === value?.column)?.filterOperators;
  const [touched, setTouched] = useState<Record<any, any>>({});
  const [submitting, setSubmitting] = useState(isSubmitting);

  const getIsError = (name: "column" | "operator" | "value") => {
    return submitting ? value?.column && !value?.[name] : touched[name] && !value?.[name];
  };

  console.log(isSubmitting);

  const handleChange = (e: { name: string; value: string }) => {
    onChange({ ...value, [e.name]: e.value });
  };

  const handleBlur = (e: { name: string }) => {
    setTouched({ ...touched, [e.name]: true });
  };

  useEffect(() => {
    setSubmitting(isSubmitting);
  }, [isSubmitting]);

  return (
    <div className={classes.base}>
      <div
        className={clx(classes.root, {
          [classes.rootSelectInput]: value?.column?.length > 0,
        })}
      >
        <div>
          <SelectInput
            value={value?.column}
            options={
              columns?.map((column) => ({
                label: column?.name as string,
                value: column?.key ?? "",
                icon: column?.icon as any,
              })) || []
            }
            classNames={{
              control: classes.control,
              option: classes.option,
            }}
            name="column"
            onChange={handleChange}
            placeholder="Select column"
            isError={touched?.column && !value?.column}
            helperText={touched?.column && !value?.column ? "Please select a column" : ""}
            onBlur={() => handleBlur({ name: "column" })}
          />
        </div>
        <div>
          {!value?.column ? (
            <TextInput
              value={value?.operator}
              placeholder="Select operator"
              disabled
              classNames={{
                input: classes.textInput,
              }}
              onBlur={() => handleBlur({ name: "value" })}
            />
          ) : (
            <SelectInput
              value={value?.operator}
              options={(operators ?? [])?.map((operator) => ({
                label: operator?.label ?? "",
                value: operator?.value ?? "",
              }))}
              name="operator"
              onChange={handleChange}
              classNames={{
                control: classes.control,
                option: classes.option,
              }}
              onBlur={() => handleBlur({ name: "operator" })}
              isError={getIsError("operator")}
              helperText={getIsError("operator") ? "Please select an operator" : ""}
            />
          )}
        </div>
        <div>
          <TextInput
            placeholder="Type your filter value..."
            classNames={{
              input: classes.textInput,
            }}
            name="value"
            value={value?.value}
            onChange={handleChange}
            onBlur={() => handleBlur({ name: "value" })}
            isError={getIsError("value")}
            helperText={getIsError("value") ? "Please enter a filter value" : ""}
          />
        </div>
      </div>
      <button
        className={classes.trashButton}
        onClick={onDelete}
        disabled={!value?.column || !value?.operator || !value?.value}
      >
        <PiTrashLight />
      </button>
    </div>
  );
};
