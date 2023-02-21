import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useTimeInputStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'start',
    },
    label: {
        fontSize: theme.typography.fontSize - 2,
        display: "flex",
        marginBottom: 8,
        color: theme.design.colors.waz_grey,
        alignItems: "center",
        textTransform: "uppercase",
    },
    required: {
        color: theme.design.colors.waz_dangerColor100,
        margin: '-4px 4px 0 4px',
    },
    baseInput: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '4px 12px',
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
                gap: 0,
                margin: '15px 15px 15px 0',
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
        gap: 8
    }
}));