import React, { useCallback, useEffect, useState, useRef } from "react";
import { useEditMediaStyles } from "./styles";
import { EditMediaProps } from "./types";
import { TextInput } from "../../../../io";
import { Button , Tooltip} from "../../../../core";
import { Image } from "../../types";
import { BsQuestionCircleFill } from "react-icons/bs";

export const EditMedia: React.FC<EditMediaProps> = ({
    loading = true,
    image,
    handleEdit,
    handleClose,
}) => {
    const classes = useEditMediaStyles();
    const ref = useRef<any>();
    const [formData, setFormData] = useState<{ [key: string]: string }>({
        title: image instanceof File ? image.name : image.title ?? "",
        alternative_text: image instanceof File ? "" : image.alternative_text ?? "",
        caption: (image as Image).caption ?? "",
    });

    const removeExtension = (filename: string) => {
        return filename.replace(/\.[^/.]+$/, "");
    };

    useEffect(() => {
        const formData = {
            title: image instanceof File ? removeExtension(image.name) : image.title ?? "",
            alternative_text:
                image instanceof File ? "" : image.alternative_text ?? "",
            caption: (image as Image).caption ?? "",
        };
        setFormData(formData);
    }, [image]);

    const handleChange = useCallback(
        ({ name, value }: { name?: string; value: any }) => {
            setFormData({ ...formData, [name as string]: value });
        },
        [formData],
    );

    const displayFields = () =>
        Object.entries(formData).map(([key, value], index) => {
            const label = (
                <div className={classes.placeholderContainer}>
                    {key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " ")}
                    {index == 1 ? (
                        <Tooltip content="Describe the image">
                            <p>
                                <BsQuestionCircleFill className={classes.tooltipIcon} />
                            </p>
                        </Tooltip>
                    ) : (
                        ""
                    )}
                </div>
            );

            return (
                <div className={classes.formControl} key={index}>
                    <TextInput label={label} value={value} name={key} onChange={handleChange} />
                </div>
            );
        });

    const handleSubmit = useCallback(() => {
        const { alternative_text, ...rest } = formData;
        const placeholderUpdate = { ...rest, alternative_text: alternative_text };
        const update: { [key: string]: string } = { ...placeholderUpdate };
        if (!(image instanceof File)) {
            update.uuid = image.uuid;
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

        return undefined
    }, [image]);

    return (
        <div className={classes.root}>
            <img src={displayImage()} ref={ref} className={classes.image} alt={""} />
            <div className={classes.form}>
                <p className={classes.tab}>Image Properties</p>
                {displayFields()}
                <div className={classes.formButtons}>
                    <Button onClick={handleClose} className={classes.buttonSecondary}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        isLoading={loading}
                        className={classes.buttonPrimary}
                    >
                        Save
                    </Button>
                </div>
            </div>
        </div>
    );
};
