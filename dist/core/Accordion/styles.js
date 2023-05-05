import { makeStyles } from "@mui/styles";
export var useAccordionStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: (_a = {
                position: "relative",
                cursor: "pointer",
                width: "100%"
            },
            _a[theme.breakpoints.down("sm")] = {
                width: "100%",
            },
            _a),
        accordionContent: {
            height: "auto",
            maxHeight: 0,
            fontSize: theme.typography.fontSize - 2,
            color: theme.design.colors.grey100,
            opacity: 0,
            transition: "all 180ms ease-in-out 0ms",
        },
        accordionActive: {
            "& .accordion__content": {
                maxHeight: "fit-content",
                opacity: 1,
                padding: theme.spacing(1.5, 2),
                transition: "all 150ms ease-in-out 0ms",
                backgroundColor: theme.design.colors.waz_white,
                border: "1px solid transparent",
                borderTop: 0,
                borderColor: theme.design.colors.waz_primary700,
            },
            "& .accordion__icon": {
                transform: "rotate(180deg)",
            },
        },
        accordionTitle: {
            fontSize: theme.typography.fontSize,
            fontWeight: theme.typography.fontWeightBold,
            color: theme.design.colors.grey100,
        },
        accordionHeader: {
            cursor: "pointer",
            minHeight: 38,
            display: "flex",
            borderRadius: theme.spacing(0.5, 0.5, 0, 0),
            border: "1px solid transparent",
            borderColor: theme.design.colors.waz_primary700,
            alignItems: "center",
            justifyContent: "space-between",
            padding: theme.spacing(0, 2),
            userSelect: "none",
            width: "100%",
            "&:hover": {
                background: theme.design.colors.waz_white100,
            },
        },
        accordionIcon: {
            transition: "transform .2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
    });
});
