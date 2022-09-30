export const getSizeVariants = (classes: any, size: string) => {
    let sizeVariants;

    switch (size) {
        case "sm":
            sizeVariants = [classes.sizeSm, classes.cameraIconSm];
            break;
        case "md":
            sizeVariants = [classes.sizeMd, classes.cameraIconMd];
            break;
        case "lg":
            sizeVariants = [classes.sizeLg, classes.cameraIconLg];
            break;
        case "xl":
            sizeVariants = [classes.sizeXl, classes.cameraIconXl];
            break;
        case "full":
            sizeVariants = [classes.full, classes.cameraIconFull];
            break;
        default:
            sizeVariants = [classes.sizeMd, classes.cameraIconMd];
            break;
    }

    return sizeVariants;
};
