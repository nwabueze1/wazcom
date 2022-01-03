import { FC } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { Chip, TextField, InputLabel } from "@mui/material";
import { TagInputProps } from "./types";
import { useTaggableStyles } from "./styles";

export const TagInput: FC<TagInputProps> = ({
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
            // eslint-disable-next-line react/jsx-key
            <Chip label={value} {...getTagProps({ index })} />
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
