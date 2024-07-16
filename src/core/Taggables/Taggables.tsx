import { FC } from "react";
import AutoComplete from "@mui/material/Autocomplete";
import { Chip, TextField, InputLabel, Typography } from "@mui/material";
import { TaggablesProps } from "./types";
import { useTaggablesStyles } from "./styles";
import clx from "classnames";

export const Taggables: FC<TaggablesProps> = ({
  onChange,
  name,
  value,
  className,
  classNames,
  label,
  feedback,
  options,
  externalChip,
  error,
  ...props
}) => {
  const handleChange = (tags: string[]) => {
    onChange?.({ name: name ?? "", value: tags });
  };
  const classes = useTaggablesStyles();

  const getFeedbackVariant = (classes: any, feedback: { text: string; status?: string }) => {
    let feedbackVariant;

    switch (feedback.status) {
      case "success":
        feedbackVariant = classes.feedbackSuccess;
        break;
      case "error":
        feedbackVariant = classes.feedbackError;
        break;
      case "neutral":
        feedbackVariant = classes.feedbackNeutral;
        break;
      default:
        feedbackVariant = classes.feedbackNeutral;
    }

    return feedbackVariant;
  };

  return (
    <div className={clx(className, classes.root)}>
      {label && (
        <InputLabel className={(classNames?.label as string) ?? ""} htmlFor={name}>
          {label}
        </InputLabel>
      )}
      <AutoComplete
        multiple
        freeSolo
        options={options}
        value={value ?? []}
        onChange={(_, tags) => {
          handleChange(tags);
        }}
        renderTags={(value: string[], getTagProps) => (
          <div className={clx(externalChip && classes.renderChipOutside)}>
            {value.map((value: string, index: number) => (
              <Chip
                variant="filled"
                label={value}
                {...getTagProps({ index })}
                classes={{ root: classes.chip, icon: classes.chipIcon }}
                key={index}
              />
            ))}
          </div>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            error={error}
            variant="outlined"
            name="tags"
            placeholder={""}
          />
        )}
        {...props}
      />
      {feedback && (
        <Typography className={clx(classes.feedback, getFeedbackVariant(classes, feedback))}>
          {feedback.text}
        </Typography>
      )}
    </div>
  );
};
