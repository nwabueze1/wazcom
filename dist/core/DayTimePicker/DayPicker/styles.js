import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
export var menuItemTableStyles = makeStyles(function (theme) {
    return createStyles({
        siteTypeSelect: {
            width: "6em",
        },
        option: {
            background: "red"
        },
        dayPicker: {
            border: "1px solid ".concat(theme.design.colors.waz_grey300),
            borderRadius: "5px",
            width: "140%",
            height: "40px",
            paddingInline: theme.spacing(2),
        },
        calendarIcon: {
            width: "30px",
            height: "30px"
        }
    });
});
