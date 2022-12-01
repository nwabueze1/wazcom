import makeStyles from "@mui/styles/makeStyles";
export var useCarouselStyles = makeStyles(function (theme) { return ({
    stepper: {
        backgroundColor: "transparent",
        "& > button": {
            backgroundColor: theme.design.colors.waz_white,
            padding: theme.spacing(1, 3),
            color: theme.design.colors.waz_orangeColor100,
            fontSize: theme.typography.fontSize * 2,
            "&:hover": {
                backgroundColor: "".concat(theme.design.colors.waz_white, " !important"),
            }
        },
    },
    active: {
        backgroundColor: "".concat(theme.design.colors.waz_white, " !important"),
    },
    dot: {
        backgroundColor: theme.design.colors.waz_lightOrange,
        opactity: 0.1,
    },
}); });
