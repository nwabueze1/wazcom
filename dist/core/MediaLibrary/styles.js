import makeStyles from "@mui/styles/makeStyles";
export var useMediaLibraryStyles = makeStyles(function (theme) { return ({
    "@keyframes a": {
        "0%, 50%": {
            transform: "scale(0)",
        },
    },
    root: {},
    library: {
        position: "relative",
        marginTop: theme.spacing(2),
    },
    collection: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: theme.spacing(1),
        maxHeight: "calc(100vh - " + theme.spacing(20) + ")",
        overflow: "scroll",
        position: "relative",
    },
    column: {
        display: "flex",
        width: "33.3333%",
        flexDirection: "column",
        paddingRight: theme.spacing(3),
        "&:nth-child(3)": {
            padding: 0,
        },
    },
    thumbnail: {
        display: "flex",
        flexDirection: "column",
        marginBottom: theme.spacing(3),
    },
    image: {},
    loading: {
        height: 40,
        // backgroundColor: theme.design.colors.black,
        opacity: 0.9,
    },
    dot: {
        background: theme.design.colors.black,
        "&, &:after": {
            display: "inline-block",
            width: "2em",
            height: "2em",
            borderRadius: "50%",
            animation: "a 1.5s calc(((var(--i) + var(--o, 0))/var(--n) - 1)*#{1.5s}) infinite",
        },
        "&:after": {
            background: "tomato",
            content: '""',
        },
    },
    loader: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent",
    },
    tab: {
        display: "flex",
        position: "relative",
    },
    actions: {},
}); });
