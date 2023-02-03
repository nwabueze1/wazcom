import React from "react";
import { Quill } from "react-quill";
import { useEditorToolbarStyles } from './styles';
import clx from "classnames";

// Undo and redo functions for Custom Toolbar
function undoChange() {
  this.quill.history.undo();
}
function redoChange() {
  this.quill.history.redo();
}

// Add sizes to whitelist and register them
// const Size = Quill.import("formats/size");
// Size.whitelist = ["extra-small", "small", "medium", "large"];
// Quill.register(Size, true);

// Add fonts to whitelist and register them
// const Font = Quill.import("formats/font");
// Font.whitelist = [
//   "arial",
//   "comic-sans",
//   "courier-new",
//   "georgia",
//   "helvetica",
//   "lucida"
// ];
// Quill.register(Font, true);

// Modules object for setting up the Quill editor
export const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: undoChange,
      redo: redoChange
    }
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true
  }
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
    "video"
];

// Custom Undo button icon component for Quill editor. You can import it directly
// from 'quill/assets/icons/undo.svg' but I found that a number of loaders do not
// handle them correctly
const CustomUndo = () => (
    <svg viewBox="0 0 18 18">
      <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
      <path
        className="ql-stroke"
        d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
      />
    </svg>
  );
  
  // Redo button icon component for Quill editor
  const CustomRedo = () => (
    <svg viewBox="0 0 18 18">
      <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
      <path
        className="ql-stroke"
        d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
      />
    </svg>
  );

// Quill Toolbar component
export const EditorToolbar = () => {
    const classes = useEditorToolbarStyles()
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
            <span className={clx("ql-formats", classes.toolbarItem)}>
                <button className="ql-undo">
                    <CustomUndo />
                </button>
                <button className="ql-redo">
                    <CustomRedo />
                </button>
            </span>
        </div>
    );
}