import { CircularProgress } from "@mui/material";
import { memo, useCallback, useEffect, useState } from "react";
import { useGqlComboBoxStyles } from "./styles";
import { GqlComboBoxProps } from "./types";
import { ComboBoxInput, ComboBoxInputOptionProps } from "../../io";
import { get } from "lodash";

export const GqlComboBox = memo(
  ({
    value: initialValue,
    config: { client, key, labelKey, valueKey, name: query },
    postFetchHook,
    addOption,
    onChange,
    onEnter,
    label,
    variables,
    ...props
  }: GqlComboBoxProps) => {
    const classes = useGqlComboBoxStyles();
    const [options, setOptions] = useState<ComboBoxInputOptionProps[]>([]);
    const [fetching, setFetching] = useState<boolean>(true);
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    const fetchData = async () => {
      return await client.query({
        query,
        fetchPolicy: "network-only",
        variables,
      });
    };

    useEffect(() => {
      const getData = async () => {
        const { data } = await fetchData();
        if (data) {
          const options = get(data, key?.join("."));
          const formattedOptions = options.map((option: any) => ({
            label: option[labelKey],
            value: option[valueKey],
          }));
          postFetchHook?.(formattedOptions);
          setOptions(formattedOptions);
        }
        setFetching(false);
      };
      getData();
    }, [query]);

    const handleChange = useCallback(
      async (selectedValue: string) => {
        let label = options?.find(
          (option) => option.value.toLowerCase() === selectedValue.toLowerCase(),
        )?.label;
        let value = selectedValue;
        if (!label) {
          setFetching(true);
          const response = await handleAdd(
            selectedValue.startsWith("Add ") ? selectedValue.split("Add ")[1] : selectedValue,
          );
          label = response?.label as string;
          value = response?.value as string;
        }
        setValue(value);
        onChange?.({ name: props.name as string, value });
        setFetching(false);
      },
      [options],
    );

    const handleAdd = useCallback(
      async (value: string) => {
        const response = await addOption?.(value);
        if (response?.status) {
          const value = response.value as string;
          const label = response.label as string;
          const newOptions = [...options];
          newOptions.push({ label, value });
          setOptions(newOptions);
          postFetchHook?.(newOptions);
          return { label, value };
        }
        return;
      },
      [options],
    );

    if (fetching) {
      return (
        <div className={classes.loader}>
          <CircularProgress size={14} color="success" />
        </div>
      );
    }

    return (
      <ComboBoxInput
        label={label}
        options={options}
        value={value ?? ""}
        onChange={({ value }) => {
          handleChange(value);
        }}
        {...props}
      />
    );
  },
);

GqlComboBox.displayName = "GqlComboBox";
