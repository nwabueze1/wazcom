import { Modal, TextField, Button } from "@mui/material";
import { useEditImageDialogStyles } from "./styles";
import { EditImageProps } from "./types";

export const EditImageDialog = ({
    image,
    handleEditImage,
    handleDialogClose,
    handleInsertImage
}: EditImageProps) => {

    const classes = useEditImageDialogStyles()
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
            <div className={classes.editMediaSizeContainer}>
              <TextField
                label="Width"
                variant="outlined"
                size="small"
                className={classes.editMediaSizeInput}
                value={image.width}
                type="number"
                placeholder="Image Width"
                onChange={(event) =>
                  handleEditImage("width", event.target.value)
                }
              />
              <TextField
                label="Height"
                variant="outlined"
                size="small"
                className={classes.editMediaSizeInput}
                value={image.height}
                type="number"
                placeholder="Image Height"
                onChange={(event) =>
                  handleEditImage("height", event.target.value)
                }
              />
            </div>
          </div>
          <div className={classes.editButtonContainer}>
            <Button
              onClick={handleDialogClose}
              className={classes.editMediaCancelBtn}
            >
              Cancel
            </Button>
            <Button
              onClick={handleInsertImage}
              className={classes.editMediaSubmitBtn}
            >
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    );
  }