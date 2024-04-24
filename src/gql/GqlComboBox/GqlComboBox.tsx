import { memo, useCallback, useEffect, useState } from "react";
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
    label,
    variables,
    ...props
  }: GqlComboBoxProps) => {
    const [options, setOptions] = useState<ComboBoxInputOptionProps[]>([]);
    const [fetching, setFetching] = useState<boolean>(true);
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    const fetchData = async (search: string = "") => {
      return await client.query({
        query,
        fetchPolicy: "network-only",
        variables: {
          ...variables,
          search,
        },
      });
    };

    const getData = async (search: string = "") => {
      try {
        setFetching(true);
        const { data } = await fetchData(search);
        if (data) {
          const r_options = get(data, key?.join("."));
          const formattedOptions = r_options.map((option: any) => ({
            label: option[labelKey],
            value: option[valueKey],
          }));
          setOptions((options) => {
            console.log("==========> options", options);
            postFetchHook?.([...options, ...formattedOptions]);

            return [...options, ...formattedOptions];
          });
        }
      } catch (e) {
        console.log("===============> error", e);
        postFetchHook?.([]);
        setOptions([]);
      } finally {
        setFetching(false);
      }
    };

    useEffect(() => {
      getData();
      console.log("===============> inside query called");
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
        try {
          const response = await addOption?.(value);

          if (response?.status) {
            const value = response.value as string;
            const label = response.label as string;

            const newOptions = [...options, { label, value }];
            setOptions(newOptions);
            postFetchHook?.(newOptions);
            return { label, value };
          }
          return;
        } catch (error) {
          setFetching(false);
        }
        return;
      },
      [options],
    );

    return (
      <ComboBoxInput
        label={label}
        options={options}
        value={value ?? ""}
        onChange={(data) => {
          if (data.type && data.type == "search" && !variables?.all) {
            getData(data.value);
          } else {
            handleChange(data.value);
          }
        }}
        handleAdd={handleChange}
        isLoading={fetching}
        {...props}
      />
    );
  },
);

GqlComboBox.displayName = "GqlComboBox";
