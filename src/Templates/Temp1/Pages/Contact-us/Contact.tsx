import React, { useState } from "react";
import { useContactUsStyles } from "./styles";
import {TextInput} from "../../../../io/TextInput"
import {TextArea} from "../../../../io/TextArea";
import { fields } from "../../TemplateData";
import clx from "classnames";
import TextField from '@mui/material/TextField';
import { ContactData } from "../../TemplateData";

const Contact = () => {
  const classes = useContactUsStyles();
  const [formData, setFormData] = useState<{ [key: string]: any }>({ fields });

  const handleField = (e: any) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
  };



  const displayContactData = () => {
    return ContactData.map(({ detail1, detail2, detail3, title }, index) => {
      return (
        <div key={index}>
          <p className={clx(classes.title, index > 0 && classes.titleParent)}>
            {title}
          </p>
          <p className={classes.details}>{detail1}</p>
          <p className={classes.details}>{detail2}</p>
          <p className={classes.details}>{detail3}</p>
        </div>
      );
    });
  };

  const displayFields = () => {
    return fields.map(({ name, type }, index) =>
      type !== "textfield" ? (
        <TextInput
          key={index}
          name={name}
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
      )
    );
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <p className={classes.header}>Contact Us</p>
        <div className={classes.parent}>
          <div className={classes.leftColumn}>{displayContactData()}</div>
          <div className={classes.rightColumn}>
            <div >
              <div>{displayFields()} </div>
              <div className={classes.btnContainer}>
                <button type="submit" className={classes.btn}>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
