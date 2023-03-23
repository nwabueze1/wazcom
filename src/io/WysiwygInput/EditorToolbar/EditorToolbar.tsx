import { useEditorToolbarStyles } from "./styles";
import clx from "classnames";

export const EditorToolbar = () => {
  const classes = useEditorToolbarStyles();
  return (
    <div id="toolbar" className={classes.toolbar}>
      <span className={clx("ql-formats", classes.toolbarItem)}>
        <select className="ql-header">
          <option value="1">Heading 1</option>
          <option value="2">Heading 2</option>
          <option value="3">Heading 3</option>
          <option value="4">Heading 4</option>
          <option value="5">Heading 5</option>
          <option value="6">Heading 6</option>
          <option value="">Normal</option>
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
        <select className="ql-align" />
      </span>
    </div>
  );
};
