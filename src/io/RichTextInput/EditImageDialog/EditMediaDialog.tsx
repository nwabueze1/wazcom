import { Modal, TextField, Button } from "@mui/material";
import { useEditImageDialogStyles } from "./styles";
import { EditImageProps } from "./types";
import { desktopFields, tabletFields, mobileFields } from "./data";
import { ImageProperties } from "../types";

export const EditImageDialog = ({
    image,
    handleEditImage,
    handleDialogClose,
    handleInsertImage,
}: EditImageProps) => {
    const classes = useEditImageDialogStyles();

    const renderFields = (
        image: ImageProperties,
        handleEditImage: (name: string, value: string, device?: string) => void,
        fields: { label: string; device?: string; placeholder: string }[],
    ) => {
        return fields.map(
            ({
                placeholder,
                device,
                label,
            }: {
                placeholder: string;
                device?: string;
                label: string;
            }) => (
                <>
                    <TextField
                        label={label}
                        variant="outlined"
                        size="small"
                        className={classes.editMediaSizeInput}
                        value={image[label][device as string]}
                        type="number"
                        placeholder={placeholder}
                        onChange={(event) => handleEditImage(label, event.target.value, device)}
                    />
                </>
            ),
        );
    };

    return (
        <Modal open={true}>
            <div className={classes.editMediaModal}>
                <p className={classes.editImageHeader}>Edit Image</p>
                <div className={classes.inputContainer}>
                    <TextField
                        label="Title"
                        variant="outlined"
                        size="small"
                        className={classes.editMediaInput}
                        value={image.title}
                        type="text"
                        placeholder="Image Title"
                        onChange={(event) => handleEditImage("title", event.target.value)}
                    />
                    <TextField
                        label="Url"
                        variant="outlined"
                        size="small"
                        className={classes.editMediaInput}
                        value={image.url}
                        type="text"
                        placeholder="Image URL"
                        onChange={(event) => handleEditImage("url", event.target.value)}
                    />
                    <p className={classes.deviceHeader}>Desktop</p>
                    <div className={classes.editMediaSizeContainer}>
                        {renderFields(image, handleEditImage, desktopFields)}
                    </div>
                    <p className={classes.deviceHeader}>Tablet</p>
                    <div className={classes.editMediaSizeContainer}>
                        {renderFields(image, handleEditImage, tabletFields)}
                    </div>
                    <p className={classes.deviceHeader}>Mobile</p>
                    <div className={classes.editMediaSizeContainer}>
                        {renderFields(image, handleEditImage, mobileFields)}
                    </div>
                </div>
                <div className={classes.editButtonContainer}>
                    <Button onClick={handleDialogClose} className={classes.editMediaCancelBtn}>
                        Cancel
                    </Button>
                    <Button onClick={handleInsertImage} className={classes.editMediaSubmitBtn}>
                        Submit
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
