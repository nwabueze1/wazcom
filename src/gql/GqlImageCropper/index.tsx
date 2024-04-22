import { FC, useState } from "react";
import { Dialog, Button } from "../../core";
import { ImageCropperProps, TCoordinates, TScreen } from "./types";
import { useImageCropperStyles } from "./styles";
import { FaTimes } from "react-icons/fa";
import clx from "classnames";
import { ImageProperty } from "./components/ImageProperty/ImageProperty";
import { CropAndSize } from "./components/CropAndSize/CropAndSize";
import { CropImage } from "./components/CropImage";
import { parseImageCropperValue, tabs } from "./helpers";
import { Coordinates } from "react-advanced-cropper";

export const GqlImageCropper: FC<ImageCropperProps> = ({
    open,
    value: initialValue,
    onChange,
    handleClose,
}) => {
    const classes = useImageCropperStyles();
    const [activeTab, setActiveTab] = useState(0);
    const [dimensions, setDimensions] = useState<Record<"width" | "height", number>>({
        width: initialValue["width"] ?? 0,
        height: initialValue["height"] ?? 0,
    });
    const [value, setValue] = useState(parseImageCropperValue(initialValue));

    const setCoordinates = (coordinates: Coordinates) => {
        const typedCoordinates = value["coordinates"] as TCoordinates;
        const newValue = {
            ...value,
            coordinates: {
                ...typedCoordinates,
                [value.screenType]: {
                    ...typedCoordinates[value.screenType],
                    ...coordinates,
                },
            },
        };
        setValue(newValue);
    };

    const handleValueChange = (field: string, result: string) => {
        const newValue = { ...value, [field]: result };
        setValue(newValue);
    };

    const handleGenerate = () => {
        const generatedCoordinates: Record<string, any> = {};
        const typedCoordinates = value["coordinates"] as TCoordinates;

        Object.keys(typedCoordinates).forEach((key) => {
            const coordinates = typedCoordinates[key as TScreen];

            if (
                !coordinates["width"] === undefined ||
                !coordinates["height"] === undefined ||
                !coordinates["left"] === undefined ||
                !coordinates["top"] === undefined
            )
                return;

            generatedCoordinates[key] = {
                left: Number((coordinates["left"] / dimensions.width).toFixed(2)),
                top: Number((coordinates["top"] / dimensions.width).toFixed(2)),
                right: Number(
                    ((coordinates["left"] + coordinates["width"]) / dimensions.width).toFixed(2),
                ),
                bottom: Number(
                    ((coordinates["top"] + coordinates["height"]) / dimensions.width).toFixed(2),
                ),
            };
        });

        const generatedValue = JSON.parse(
            JSON.stringify({ ...value, ...dimensions, coordinates: generatedCoordinates }),
        );
        delete generatedValue?.screenType;
        delete generatedValue?.url;
        ["name", "description", "alternative_text", "caption"].forEach((field) => {
            if (!generatedValue[field]) delete generatedValue[field];
        });
        onChange?.({ name: "image", value: generatedValue });
    };

    return (
        <>
            <Dialog open={open} handleClose={handleClose}>
                <div className={classes.imageDialog}>
                    <div className={classes.imageDialogHeadingContainer}>
                        <div className={classes.imageDialogHeading}>
                            <p className={classes.imageDialogTitle}>Edit Image</p>
                            <FaTimes className={classes.imageDialogIcon} onClick={handleClose} />
                        </div>
                    </div>

                    <div className={classes.imageDialogComponentsContainer}>
                        <div className={classes.imageDialogCropSection}>
                            <CropImage
                                src={value.src}
                                screenType={value.screenType}
                                coordinates={(value.coordinates as TCoordinates)[value.screenType]}
                                setCoordinates={setCoordinates}
                                setDimensions={setDimensions}
                                isEdit={Object.keys(initialValue).length > 1}
                            />
                        </div>
                        <div className={classes.imageDialogConfigSection}>
                            <div className={classes.configTabs}>
                                {tabs.map((tab, index) => (
                                    <>
                                        <div
                                            className={clx(
                                                classes.configTab,
                                                activeTab === index && classes.activeConfigTab,
                                            )}
                                            key={index}
                                            onClick={() => {
                                                setActiveTab(index);
                                            }}
                                        >
                                            <p
                                                className={clx(
                                                    classes.tabName,
                                                    activeTab === index && classes.activeTabName,
                                                )}
                                            >
                                                {tab}
                                            </p>
                                        </div>
                                    </>
                                ))}
                            </div>
                            {activeTab === 0 && (
                                <ImageProperty
                                    form={{
                                        name: value.name ?? "",
                                        description: value?.description ?? "",
                                        alternative_text: value?.alternative_text ?? "",
                                        caption: value?.caption ?? "",
                                    }}
                                    handleChange={handleValueChange}
                                />
                            )}
                            {activeTab === 1 && (
                                <CropAndSize
                                    screenType={value.screenType}
                                    handleChange={handleValueChange}
                                />
                            )}
                            <Button onClick={handleGenerate} className={clx(classes.btn)}>
                                Apply Changes
                            </Button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
};
