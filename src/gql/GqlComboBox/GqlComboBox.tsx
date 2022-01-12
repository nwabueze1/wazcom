import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { FC, memo, useCallback, useEffect, useState } from "react";
import { useGqlComboBoxStyles } from "./styles";
import { GqlComboBoxProps } from "./types";
import { ComboBoxInput } from "../../io";

export const GqlComboBox: FC<GqlComboBoxProps> = memo(
  ({
    value: initialValue,
    config: { key, name: query },
    addOption,
    addingOption,
    placeholder,
    onChange,
    error,
    ...props
  }) => {
    const classes = useGqlComboBoxStyles();
    const { data, loading } = useQuery(query, {
      fetchPolicy: "cache-and-network",
    });
    const [options, setOptions] = useState<any[]>([]);
    const [id, setId] = useState<string>(initialValue ?? "");

    useEffect(() => {
      setId(id);
      setId(initialValue);
    }, [initialValue]);

    useEffect(() => {
      if (data) {
        const options = data?.[key as string].data;
        setOptions(options);
      }
    }, [data]);

    // const handleChange = useCallback(
    //   async (data: ComboBoxOptionProps) => {
    //     let title = options?.find(
    //       (option) => option.id.toString() === data?.value.toString(),
    //     )?.title;
    //     let id = data?.value;
    //     if (!title) {
    //       const response = await handleAdd(data?.value);
    //       title = response?.title as string;
    //       id = response?.id as string;
    //     }

    //     setId(id);
    //     // onChange && onChange(props?.name, id, title);
    //   },
    //   [data, options, setId, onChange, props.name],
    // );

    const handleAdd = useCallback(
      async (value: string) => {
        const response = await addOption?.(value);
        if (response?.status) {
          const id = response.value as string;
          const title = response.label as string;
          const newOptions = [...(options as { [key: string]: string }[])];
          newOptions.push({ id, title });
          setOptions(newOptions);
          return { id, title };
        }
        return '';
      },
      [options],
    );

    if (loading || addingOption) {
      return (
        <div className={classes.loader}>
          <CircularProgress size={14} color="inherit" />
        </div>
      );
    }

    return (
      <div onClick={() => { handleAdd('') }} className={classes.root}>
        <ComboBoxInput {...props} options={[]} />
      </div>
    );
  },
);
