import { makeStyles } from "@mui/styles";
export var useTimeInputStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'start',
    },
    label: {
        fontSize: theme.typography.fontSize - 2,
        display: "flex",
        marginBottom: theme.spacing(1),
        color: theme.design.colors.waz_grey,
        alignItems: "center",
        textTransform: "uppercase",
    },
    required: {
        color: theme.design.colors.waz_dangerColor100,
        margin: theme.spacing(-.5, .5, 0, .5),
    },
    baseInput: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1),
        padding: theme.spacing(0.5, 1.5),
        height: 36,
        width: '100%',
        background: theme.design.colors.white100,
        color: theme.design.colors.waz_primaryBlack,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 4,
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.fontSize,
        borderColor: theme.design.colors.waz_primary700,
        '&:hover': {
            borderColor: theme.design.colors.waz_primary500,
        },
        '&:focus, &:hover:focus, &:active': {
            borderColor: theme.design.colors.waz_primary400,
        },
        '& .rc-time-picker-input': {
            background: 'transparent',
            border: 0,
            outline: 0
        },
    },
    errorInput: {
        borderColor: theme.design.colors.error,
        '&:hover, &:focus, &:hover:focus, &:active': {
            borderColor: theme.design.colors.error,
        },
    },
    successInput: {
        borderColor: theme.design.colors.waz_primaryColor100,
        '&:hover, &:focus, &:hover:focus, &:active': {
            borderColor: theme.design.colors.waz_primaryColor100,
        },
    },
    containerDiv: {
        background: 'transparent',
        border: 0,
        borderRadius: 4,
        zIndex: 100000,
        '& .rc-time-picker-panel-inner': {
            background: theme.design.colors.grey600,
            border: 0,
            borderRadius: 4,
            '& .rc-time-picker-panel-combobox': {
                display: 'flex',
                gap: theme.spacing(0),
                margin: theme.spacing(2, 0, 2, 2),
            },
            '& .rc-time-picker-panel-input-wrap': {
                background: theme.design.colors.grey600,
            },
            '& .rc-time-picker-panel-input': {
                background: theme.design.colors.grey600,
            },
            '& .rc-time-picker-panel-select': {
                border: 0,
            },
            '& .rc-time-picker-panel-select ul li': {
                fontSize: theme.typography.fontSize + 2,
                fontWeight: theme.typography.fontWeightMedium,
                borderRadius: 4,
                height: 40,
                width: 40,
            },
            '& .rc-time-picker-panel-select-active ul li': {
                fontSize: theme.typography.fontSize + 2,
                fontWeight: theme.typography.fontWeightMedium,
                borderRadius: 4,
                height: 40,
                width: 40,
            },
            '& .rc-time-picker-panel-select-option-selected': {
                background: theme.design.colors.waz_primary50,
                color: theme.design.colors.waz_white,
                fontSize: theme.typography.fontSize + 2,
                fontWeight: theme.typography.fontWeightMedium,
                borderRadius: 4,
                height: 40,
                width: 40,
            },
            '& .rc-time-picker-panel-select li': {
                padding: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
        }
    },
    input: {
        display: 'flex',
        width: '100%',
        background: 'transparent',
        border: 0,
        outline: "none",
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.fontSize,
    },
    labelWrapper: {
        display: 'flex',
        justifyContent: "space-between",
        width: '100%'
    },
    timeRangeSeperator: {
        fontSize: theme.typography.fontSize - 2,
        color: theme.design.colors.waz_greyColor400
    },
    timeRangeDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        gap: theme.spacing(1)
    },
    helperTextDefault: {
        display: 'flex',
        width: '100%',
        fontSize: theme.typography.fontSize - 1,
        textAlign: 'left',
        marginTop: theme.spacing(0.5)
    },
    helperTextSuccess: {
        color: theme.design.colors.waz_primaryColor100,
    },
    helperTextError: {
        color: theme.design.colors.error,
    }
}); });
