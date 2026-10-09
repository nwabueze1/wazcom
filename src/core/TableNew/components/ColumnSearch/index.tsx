import { FC } from "react";
import { useColumnSearchStyles } from "./styles";
import { SelectInput, TextInput } from "../../../../io";
import { useTheme } from "@mui/material";
import { ColumnSearchProps } from "./type";

export const ColumnSearch: FC<ColumnSearchProps> = ({ columns, search, onChange }) => {
  const classes = useColumnSearchStyles();
  const theme = useTheme();

  const options: any = columns?.map((column) => ({
    label: column.name,
    value: column?.key ?? column?.name ?? "",
  }));

  return (
    <div className={classes.searchByColumnContainer}>
      <SelectInput
        value={search?.column}
        options={options || []}
        name="column"
        className={classes.searchColumnSelect}
        onChange={onChange}
        backgroundColor={theme.design.colors.waz_white}
        height={40}
        label="select search column"
        required
      />
      <TextInput
        name="value"
        className={classes.searchColumnText}
        classNames={{
          input: classes.baseInput,
        }}
        placeholder="Enter search text"
        value={search?.value}
        onChange={onChange}
      />
    </div>
  );
};
