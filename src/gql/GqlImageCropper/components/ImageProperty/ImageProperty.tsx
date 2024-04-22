import { FC } from "react";
import { TextInput, TextArea } from "../../../../io";
import { Tooltip } from "../../../../core";
import { BsQuestionCircleFill } from "react-icons/bs";
import { useImagePropertyStyles } from "./styles";
import { ImagePropertyProps } from "./types";
import { formFields } from "./helpers";
import { capitalizeFirstCharacter } from "./helpers";
import clx from "classnames";

export const ImageProperty: FC<ImagePropertyProps> = ({ form, handleChange }) => {
  const classes = useImagePropertyStyles();
  const parsedForm = JSON.parse(JSON.stringify(form));

  const displayFields = () =>
    formFields.map((field, index) => {
      const value = parsedForm[field?.field ?? field?.name];
      const label = (
        <div className={classes.placeholderContainer}>
          <p className={classes.formLabel}>{field.name}</p>
          {field.showToolTip && (
            <Tooltip
              title={field.toolTipDescription}
              content={capitalizeFirstCharacter(field.toolTipDescription)}
              classNames={{ content: classes.tooltipContent }}
            >
              <p>
                <BsQuestionCircleFill className={classes.tooltipIcon} />
              </p>
            </Tooltip>
          )}
        </div>
      );

      return field.name === "description" ? (
        <TextArea
          label={(<p className={classes.formLabel}>{field.name}</p>) as any}
          value={value}
          name={field.name}
          className={clx(classes.formControl, "textarea")}
          onChange={({ value }) => {
            handleChange((field?.field ?? field.name).toLowerCase().replace(/ /g, "_"), value);
          }}
          placeholder={field.placeholder}
          rows={4}
          key={index}
        />
      ) : (
        <TextInput
          label={label}
          value={value}
          name={field.name}
          className={classes.formControl}
          placeholder={field.placeholder}
          onChange={({ value }) => {
            handleChange((field?.field ?? field.name).toLowerCase().replace(/ /g, "_"), value);
          }}
          key={index}
        />
      );
    });

  return <div className={classes.form}>{displayFields()}</div>;
};
