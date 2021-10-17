import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
export var usePriceStyles = makeStyles(function () {
    return createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
        },
        label: {
            fontSize: "16px",
            fontWeight: 500,
            paddingBottom: "0.5em",
        },
        addon: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "20%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.1rem",
            background: "#EFEDED",
            borderRight: "1px solid #BEBEBE",
            borderRadius: "3px 0 0 3px",
        },
        inputControl: {
            position: "relative",
            width: "90%",
        },
        field: {
            width: "100%",
            boxSizing: "border-box",
            "& input": {
                paddingLeft: "25%",
            },
            "& input::placeholder": {
                fontSize: 14,
            },
        },
        error_message: {
            color: "#EA3C53",
            fontSize: "16px",
        },
    });
});
