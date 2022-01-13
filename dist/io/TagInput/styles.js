import makeStyles from '@mui/styles/makeStyles';
export var useTaggableStyles = makeStyles(function () { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        marginBottom: 15,
    },
    label: {
        marginBottom: 9,
        fontSize: "1rem",
        fontWeight: 700,
    },
    autoCompleteField: {
        fontSize: 12,
    },
}); });
