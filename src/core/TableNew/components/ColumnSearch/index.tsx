import { FC } from "react";
import { TableColumn, TableFilter } from "../../types";
import { useColumnSearchStyles } from "./styles";
import { SelectInput, TextInput } from "../../../../io";
import { Button } from "../../../Button";
import { useTheme } from "@mui/material";

type ColumnSearchProps = {
  columns: TableColumn[];
  onChange?: (e: { name: string; value: any }) => void;
  onSearchBtnClick?: () => void;
  search: TableFilter;
  loading: boolean;
};

export const ColumnSearch: FC<ColumnSearchProps> = ({
  columns,
  search,
  loading,
  onChange,
  onSearchBtnClick,
}) => {
  const classes = useColumnSearchStyles();
  const theme = useTheme();
  const isColumnSearchParamsValid = search?.column && search?.value;

  const options: any = columns?.map((column) => ({
    label: column.name,
    value: column?.unique_identifier ?? column?.name ?? "",
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
      <Button
        className={classes.searchBtn}
        isDisabled={!isColumnSearchParamsValid || loading}
        onClick={onSearchBtnClick}
      >
        Search
      </Button>
    </div>
  );
};
