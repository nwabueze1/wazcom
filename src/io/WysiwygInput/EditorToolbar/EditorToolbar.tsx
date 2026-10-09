import { FC } from "react";
import { useEditorToolbarStyles } from "./styles";
import clx from "classnames";
import { EmbedButton, EmbedButtonProps } from "../EmbedButton";

export const EditorToolbar: FC<EmbedButtonProps> = ({ initiateEmbed }) => {
  const classes = useEditorToolbarStyles();

  return (
    <div id="toolbar" className={classes.toolbar}>
      <span className={clx("ql-formats", classes.toolbarItem)}>
        <EmbedButton initiateEmbed={initiateEmbed} />
      </span>
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
        <button className={"ql-strike"} />
        <button
          className={"ql-link"}
          onClick={() => {
            const linkTooltip = Array.from(
              document.getElementsByClassName(
                "ql-tooltip ql-editing",
              ) as HTMLCollectionOf<HTMLElement>,
            );

            if (linkTooltip[0]) {
              const editor = document.getElementsByClassName("ql-editor")[0];
              const editorScroll = editor.scrollTop;

              if (editorScroll > 0) {
                linkTooltip[0].style.top = `calc(${linkTooltip[0].style.top} - ${editorScroll}px + 80px)`;
              }
              const maxLeft = editor.clientWidth - linkTooltip[0].clientWidth - 20;

              let left = Number(linkTooltip[0].style.left.split("px")[0]);

              left = Math.max(20, left);

              left = Math.min(maxLeft, left);

              linkTooltip[0].style.left = `${left}px`;
            }
          }}
        />
      </span>

      <span className={clx("ql-formats", classes.toolbarItem)}>
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
        <select className="ql-align" />
      </span>
    </div>
  );
};
