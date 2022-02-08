import { useContactUsStyles } from "./styles";
import { useState } from "react";
import { TextArea, TextInput  } from "io";
import { fields } from "Templates/Temp4/TemplateData";
import { Button } from "core";

export const ContactUsForm = () => {
  const classes = useContactUsStyles();
  const [formData, setFormData] = useState<{ [key: string]: any }>({ fields });

  const handleField = (e: {[key: string]: any}) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
  };

  const displayFields = () => {
    return fields.map(({ name, type }, index) =>
      type !== "textfield" ? (
        <TextInput
          key={index}
          name={name}
          label={name}
          type={type}
          placeholder={name}
          value={formData[name]}
          onChange={handleField}
        />
      ) : (
        <div className={classes.field}>
          <TextArea
            minRows={10}
            key={index}
            name={name}
            value={formData[name]}
            onChange={handleField}
          />
        </div>
      ),
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <p className={classes.header}>Contact Us</p>
        <p className={classes.contactText}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Velit officia
          consequat duis enim velit mollit.
        </p>
        <div className={classes.contactContainer}>
          <div className={classes.leftContainer}></div>
          <div className={classes.rightContainer}>{displayFields()}
          <Button className={classes.btn}>Send Message</Button></div>
        </div>
      </div>
    </div>
  );
};
