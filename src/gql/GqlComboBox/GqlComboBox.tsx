import { CircularProgress } from "@mui/material";
import { FC, memo, useCallback, useEffect, useState } from "react";
import { useGqlComboBoxStyles } from "./styles";
import { GqlComboBoxProps } from "./types";
import { ComboBoxInput, ComboBoxInputOptionProps } from "../../io";
import { get } from "lodash";

export const GqlComboBox: FC<GqlComboBoxProps> = memo(
  ({
    value: initialValue,
    config: { client, key, labelKey, valueKey, name: query },
    addOption,
    loading,
    onChange,
    variables,
    ...props
  }) => {
    const classes = useGqlComboBoxStyles();
    const [options, setOptions] = useState<ComboBoxInputOptionProps[]>([]);
    const [fetching, setFetching] = useState<boolean>(true);
    const [value, setValue] = useState<ComboBoxInputOptionProps>(
      initialValue,
    );

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    const fetchData = async () => {
      return await client.query({
        query,
        fetchPolicy: "network-only",
        variables,
      });
    }

    useEffect(() => {
      const getData = async () => {
        const { data } = await fetchData();
        if (data) {
          const options = get(data, key?.join("."));
          const formattedOptions = options.map((option: any) => ({
            label: option[labelKey],
            value: option[valueKey],
          }));
          setOptions(formattedOptions);
        }
        setFetching(false);
      }
      getData();
    }, []);

    const handleChange = useCallback(
      async (selectedValue: string) => {
        let label = options?.find(
          (option) => option.value === selectedValue,
        )?.label;
        let value = selectedValue;
        if (!label) {
          const response = await handleAdd(selectedValue.split(' ')[1]);
          label = response?.label as string;
          value = response?.value as string;
        }
        const selectedOption = { label, value };
        setValue(selectedOption);
        onChange?.({ name: props.name as string, value: selectedOption.value });
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
          return { label, value };
        }
        return;
      },
      [options],
    );

    const getValue = useCallback(() => {
      if (value) return value;

      if (options && options.length > 0) return { label: options[0].label, value: options[0].value };

      return { label:"", value:"" }
    }, [options, value])

    if (loading || fetching) {
      return (
        <div className={classes.loader}>
          <CircularProgress size={14} color="inherit" />
        </div>
      );
    }

    return (
      <div className={classes.root}>
        <ComboBoxInput
          {...props}
          options={options}
          value={getValue()}
          onChange={({ value }) => {
            handleChange(value);
          }}
        />
      </div>
    );
  },
);
