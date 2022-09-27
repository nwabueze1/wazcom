import React, { useState } from "react";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";
import { MdFormatBold, MdOutlineFormatItalic } from "react-icons/md";
import { BiHeading } from "react-icons/bi";
import { BsLink } from "react-icons/bs";
// import "./styles.css";

function EditButton(props: any) {
  return (
    <p
      key={props.cmd}
      onMouseDown={(evt) => {
        evt.preventDefault(); // Avoids loosing focus from the editable area
        document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
      }}
    >
      {props.icon || props.name}
    </p>
  );
}

const contols = [
  {
    name: "italic",
    cmd: "italic",
    icon: <MdOutlineFormatItalic />
  },
  {
    name: "bold",
    cmd: "bold",
    icon: <MdFormatBold />
  },
  {
    name: "heading",
    icon: <BiHeading />,
    cmd: "formatBlock",
    arg: "h1"
  },
  {
    cmd: "createLink",
    arg: "https://github.com/lovasoa/react-contenteditable",
    name: "hyperlink",
    icon: <BsLink />
  }
];
const EditableTextInput = () => {
  const [fieldState, setFieldState] = useState<{
    editable?: boolean;
    html?: string;
  }>({
    html: `<p>Hello <b>World</b> !</p><p>Paragraph 2</p>`,
    editable: true
  });

  const handleChange = (evt: any) => {
    setFieldState({ html: evt.target.value });
  };

  const sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
    allowedAttributes: { a: ["href"] }
  };

  const sanitize = () => {
    setFieldState({ html: sanitizeHtml(fieldState?.html || "", sanitizeConf) });
  };

  const toggleEditable = () => {
    setFieldState({ editable: fieldState.editable });
  };

  return (
    <div>
      <h3>editable contents</h3>
      <ContentEditable
        className="editable"
        tagName="pre"
        html={fieldState?.html ?? "<p></p>"}
        onChange={handleChange}
        onBlur={sanitize}
      />
      <h3>source</h3>
      <textarea
        className="editable"
        value={fieldState.html}
        onChange={handleChange}
        onBlur={sanitize}
      />
      {contols.map((control) => (
        <EditButton {...control} />
      ))}
      <button onClick={toggleEditable}>
        Make {fieldState.editable ? "readonly" : "editable"}
      </button>
    </div>
  );
};

export default EditableTextInput;
