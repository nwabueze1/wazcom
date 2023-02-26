import { useEditorToolbarStyles } from "./styles";
import clx from "classnames";

export const modules = {
  toolbar: {
    container: "#toolbar",
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};

// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

// Quill Toolbar component
export const EditorToolbar = () => {
  const classes = useEditorToolbarStyles();
  return (
    <div id="toolbar" className={classes.toolbar}>
      <span className={clx("ql-formats")}>
        <select className="ql-size" defaultValue="medium">
          <option value="extra-small">1</option>
          <option value="small">2</option>
          <option value="medium">3</option>
          <option value="large">4</option>
        </select>
      </span>
      <span className={clx("ql-formats", classes.toolbarItem)}>
        <select className={clx("ql-header", classes.toolbarItem)} defaultValue="3">
          <option value="1">H1</option>
          <option value="2">H2</option>
          <option value="3">H3</option>
        </select>
      </span>
      <span className={clx("ql-formats", classes.toolbarItem)}>
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
      </span>
      <span className={clx("ql-formats", classes.toolbarItem)}>
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
        <button className="ql-indent" value="-1" />
        <button className="ql-indent" value="+1" />
      </span>

      <span className={clx("ql-formats", classes.toolbarItem)}>
        <button className="ql-link" />
        <button className="ql-image" />
        <button className="ql-video" />
      </span>
    </div>
  );
};
