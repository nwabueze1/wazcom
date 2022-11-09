import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
export var useTestimonialCardPropsStyles = makeStyles(function (theme) {
    return createStyles({
        root: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: theme.spacing(1),
            background: theme.design.colors.waz_white,
            borderRadius: "4px",
            border: "1px solid ".concat(theme.design.colors.waz_grey300),
            opacity: 0.2,
            boxSizing: "border-box",
            position: "relative",
            margin: theme.spacing(1, 0),
            transition: " boxShadow 1s ease",
        },
        content: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "left",
            boxSizing: "border-box",
            padding: theme.spacing(2),
            width: "100%",
        },
        description: {
            marginBottom: theme.spacing(1),
            lineHeight: "22px",
            textOverflow: "ellipsis",
            fontSize: theme.typography.fontSize * 1.5,
            color: theme.design.colors.waz_grey400,
            opacity: 0.9,
            fontFamily: theme.design.font.montserrat,
        },
        author: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            lineHeight: "22px",
            fontSize: theme.typography.fontSize * 1.5,
            color: theme.design.colors.waz_black,
            fontWeight: theme.typography.fontWeightBold,
            fontFamily: theme.design.font.montserrat,
        },
        type: {
            textOverflow: "ellipsis",
            fontSize: theme.typography.fontSize - 2,
            color: theme.design.colors.waz_grey400,
            fontFamily: theme.design.font.montserrat,
            opacity: 0.9,
        },
        menuHeaderContainer: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
        },
        visible: {
            opacity: 1,
        },
    });
});
