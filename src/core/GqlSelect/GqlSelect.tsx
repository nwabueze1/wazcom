import { FC, useState, useEffect } from "react";
import { SelectProps } from "./types";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  CircularProgress
} from "@material-ui/core";
import { useSelectStyles } from "./styles";
import { useQuery } from "@apollo/client";

export const Select: FC<SelectProps> = ({ name, label, options:{ key, name:query }, onChange, }) => {
  const classes = useSelectStyles();
  const { data, loading } = useQuery(query);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if(data) {
      const options = data?.[key as string].data;
      setOptions(options);
    }
  }, [data]);

  if(loading) {
    return (
      <div className={classes.loader}>
        <CircularProgress size={14} color="inherit" />
      </div>
    )    
  }

  return (
    <div className={classes.root}>
      <InputLabel className={classes.label} htmlFor={name}>
        {label}
      </InputLabel>
      <FormControl variant="outlined">
        <MuiSelect name={name} onChange={onChange} displayEmpty defaultValue="">
          <MenuItem disabled value="">
            <em>Select an option!</em>
          </MenuItem>
          {options.map((row: any, index: number) => {
            return (
              <MenuItem key={index} value={row.title}>
                {row.title}
              </MenuItem>
            );
          })}
        </MuiSelect>
      </FormControl>
    </div>
  );
};
