import { makeStyles } from "@mui/styles";
export var useCartStepsStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        justifyContent: "center",
    },
    step: {
        display: "flex",
        width: "33.33%",
        justifyContent: "center",
        marginTop: theme.spacing(1),
        position: "relative",
    },
    lastStep: {
        width: "auto",
    },
    stepContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    stepNum: {
        fontFamily: theme.design.font.openSans,
        textAlign: "center",
        letterSpacing: "0px",
        color: theme.design.colors.waz_white,
        fontSize: theme.typography.fontSize,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "32px",
        height: "32px",
        borderRadius: "5px",
        boxShadow: "0px 1px 10px #0000001A",
    },
    stepName: {
        fontFamily: theme.design.font.montserrat,
        letterSpacing: "0px",
        textAlign: "center",
        fontSize: theme.typography.fontSize,
        marginTop: theme.spacing(1),
    },
    activeStepName: {
        color: theme.design.colors.waz_black,
    },
    activeStepNum: {
        backgroundColor: theme.design.colors.waz_primaryColor300,
        color: theme.design.colors.waz_greyColor150,
    },
    inactiveStepName: {
        color: theme.design.colors.waz_greyColor600,
        opacity: 0.6,
    },
    inactiveStepNum: {
        backgroundColor: theme.design.colors.waz_white,
        color: theme.design.colors.waz_greyColor150,
    },
    completedStepNum: {
        backgroundColor: theme.design.colors.waz_primaryColor300,
    },
    completedStepName: {
        color: theme.design.colors.waz_primaryColor300,
        opacity: 1,
    },
    stepDivider: {
        borderTop: "solid 1px ".concat(theme.design.colors.waz_greyColor150),
        width: "100%",
        height: "fit-content",
        top: theme.spacing(2),
        right: "-50%",
        position: "absolute",
        zIndex: "-1",
    },
}); });
