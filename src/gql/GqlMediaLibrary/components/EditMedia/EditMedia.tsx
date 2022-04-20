import React, { useCallback, useEffect, useState, useRef } from "react";
import { useEditMediaStyles } from "./styles";
import { EditMediaProps } from "./types";
import { TextInput } from "../../../../io";
import { Button } from "../../../../core";
import { Image } from "gql/GqlMediaLibrary/types";

export const EditMedia: React.FC<EditMediaProps> = ({
  loading,
  image,
  handleEdit,
  handleClose,
}) => {
  const classes = useEditMediaStyles();
  const ref = useRef<any>();
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    title: image instanceof File ? image.name : image.title ?? "",
    alternative_text:
      image instanceof File ? image.name : image.alternative_text ?? "",
    caption: (image as Image).caption ?? "",
  });

  useEffect(() => {
    const formData = {
      title: image instanceof File ? image.name : image.title ?? "",
      alternative_text:
        image instanceof File ? image.name : image.alternative_text ?? "",
      caption: (image as Image).caption ?? "",
    };
    setFormData(formData);
  }, [image]);

  const handleChange = useCallback(
    ({ name, value }) => {
      setFormData({ ...formData, [name]: value });
    },
    [formData],
  );

  const displayFields = () =>
    Object.entries(formData).map(([key, value], index) => (
      <div className={classes.formControl} key={index}>
        <TextInput
          label={key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " ")}
          value={value}
          name={key}
          onChange={handleChange}
        />
      </div>
    ));

  const handleSubmit = useCallback(() => {
    const update = { ...formData };
    if (!(image instanceof File)) {
      update.id = image.id;
    }
    handleEdit({ ...update });
  }, [formData, image]);

  const displayImage = useCallback(() => {
    if (!(image instanceof File)) return image.url;
    const reader = new FileReader();
    reader.onload = (e: any) => {
      if (ref.current) {
        ref.current.setAttribute("src", e.target.result);
      }
    };

    reader.readAsDataURL(image);
    return;
  }, [image]);

  return (
    <div className={classes.root}>
      <img src={displayImage()} ref={ref} className={classes.image} alt={""} />
      <div className={classes.form}>
        <p className={classes.tab}>Image Properties</p>
        {displayFields()}
        <div className={classes.formButtons}>
          <Button onClick={handleSubmit} loading={loading}>
            Save
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};
