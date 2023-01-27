import { Modal } from "@mui/material";
import { GET_IMAGES, UPLOAD_IMAGE } from "../../../../helpers/graphQL";
import { GqlMediaLibrary } from "../../../../gql/GqlMediaLibrary";
import { EditorMediaLibraryProps } from "./types";
import { useEditorMediaLibStyles } from "./styles";

export const EditorMediaLibrary = ({
    mediaOpen,
    name,
    handleSelect,
    handleClose,
    client,
}: EditorMediaLibraryProps) => {
    const classes = useEditorMediaLibStyles();
    return (
        <Modal open={mediaOpen}>
            <div className={classes.mediaLibraryDialog}>
                <div className={classes.mediaLibraryWrapper}>
                    <GqlMediaLibrary
                        config={{
                            client: client,
                            query: {
                                name: GET_IMAGES,
                                variables: {
                                    page: 1,
                                    count: 7,
                                },
                            },
                            upload: {
                                name: UPLOAD_IMAGE,
                                variables: {},
                            },
                            viewOnly: true,
                        }}
                        onChange={(data) => handleSelect(data.value)}
                        name={name}
                        handleClose={handleClose}
                    />
                </div>
            </div>
        </Modal>
    );
};
