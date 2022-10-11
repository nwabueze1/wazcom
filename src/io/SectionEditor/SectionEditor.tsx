import { FC, useEffect, useState } from "react";
import { useDynamicInputStyles } from "./styles";
import { SectionEditorProps } from "./types";
import clx from "classnames";
import { EditableTextInput } from "io/EditableTextInput";

export const SectionEditor: FC<SectionEditorProps> = ({
    title,
    description,
    handleSetSection,
    className,
}) => {
    const classes = useDynamicInputStyles();
    const [section, setSection] = useState<{
        title: string | JSX.Element;
        description: string | JSX.Element;
    }>({
        title: title ?? "Title",
        description: description ?? "description (optional)",
    });

    useEffect(() => {
        handleSetSection?.(section);
    }, [section]);

    const handleSetTitle = (title: string | JSX.Element) => {
        setSection((section) => ({ ...section, title }));
    };
    const handleSetDescription = (description: string | JSX.Element) => {
        setSection((section) => ({ ...section, description }));
    };
    return (
        <div className={clx(classes.root, className)}>
            <div className={classes.sectionTitle}>
                <EditableTextInput
                    placeholder={section.title as string}
                    setHtml={handleSetTitle}
                    heading={true}
                />
            </div>
            <div className={classes.sectionTitle}>
                <EditableTextInput
                    placeholder={section.description as string}
                    setHtml={handleSetDescription}
                />
            </div>
        </div>
    );
};
