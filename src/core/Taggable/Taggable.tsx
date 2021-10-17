import  { FC } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Chip, TextField, InputLabel } from "@material-ui/core";
import { TaggableProps } from "./types";
import { useTaggableStyles } from "./styles";

export const Taggable: FC<TaggableProps> = ({
  label,
  name,
  onChange,
  error,
  tags,
}) => {
  const classes = useTaggableStyles();
  return (
    <div className={classes.root}>
      <InputLabel className={classes.label} htmlFor={name}>
        {label}
      </InputLabel>
      <Autocomplete
        multiple
        options={tags}
        freeSolo
        value={tags}
        onChange={onChange}
        renderTags={(value: string[], getTagProps) =>
          value.map((value: string, index: number) => (
            <Chip
              variant="default"
              label={value}
              key={index}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            name="tags"
            placeholder="Add tags"
            fullWidth
            className={`${classes.autoCompleteField}`}
          />
        )}
      />
      {error && <p className={classes.error_message}>tags is required</p>}
    </div>
  );
};
